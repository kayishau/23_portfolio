import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { flushSync } from "react-dom";
import "../embla.css";
import { PiGithubLogoFill } from "react-icons/pi";

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
              <div className="flex flex-col items-center gap-1 tablet:gap-2 opacity-75 hover:opacity-100 border-2 border-projectBorder hover:border-primary">
                <img className="embla__slide__img" src={index.img} alt="project display" />
                <div className="flex flex-col w-full items-center gap-1 tablet:gap-2 md:gap-3 opacity-75 border bg-gradient-to-r from-white to-slate-300 p-1 tablet:p-2">
                <h1 className="font-cg text-base tablet:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-extrabold">{index.title}</h1>
                <h2 className="text-sm tablet:text-base md:text-lg">{index.type}</h2>
                <p className="font-cg text-xs tablet:text-sm md:text-base text-center md:px-10">{index.summary}</p>
                <div className="flex w-full justify-around items-center">
                <a className="hover:underline text-xs tablet:text-sm md:text-base" href={index.link}>
                 Link
                </a>
                <a className="hover:underline text-xs tablet:text-sm md:text-base" href={index.demo} target={"_blank"} rel="noreferrer" >Demo</a>
                <a href={index.github}>
                  <PiGithubLogoFill className="w-5 h-5 lg:w-8 lg:h-8"/>
                </a>
                </div>
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
