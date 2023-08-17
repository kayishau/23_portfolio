import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { flushSync } from "react-dom";
import "../embla.css";
import { GithubIcon } from "./Icons";

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="embla__slide"
              key={index}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] }),
              }}
            >
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-75 hover:opacity-100 hover:border-primary border border-slate-400 p-3">
                <img className="embla__slide__img" src={index.img} />
                <h1 className="font-cg text-4xl font-extrabold">{index.title}</h1>
                <h2 className="text-2xl">{index.type}</h2>
                <p className="font-cg text-xl text-center px-10">{index.summary}</p>
                <div className="flex w-full justify-around items-center">
                <a className="hover:underline" href={index.link}>
                 Demo
                </a>
                <a className="h-10 w-10" href={index.github}>
                  <GithubIcon />
                </a>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
