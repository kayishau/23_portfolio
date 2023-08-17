import React from "react";
import comingSoonImage from "../../src/imgs/testimage.JPG";
import { GithubIcon } from "./Icons";

export const Test2 = ({ title, type, img, summary, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center border border-solid border-light bg-light p-6 relative shadow-2xl">
      <a
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden"
      >
        <img src={img} alt={title} className="w-full h-auto" />
      </a>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className=" text-primary font-medium text-xl">{type}</span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-1xl font-semibold">
            {title}
          </h2>
          <p>{summary}</p>
        </a>

        <div className=" w-full mt-2 flex items-center justify-between underline">
          <a href={link} target="_blank" className="font-semibold">
            {" "}
            Visit
          </a>
          <a href={github} target="_blank" className="w-8">
            <GithubIcon />{" "}
          </a>
        </div>
      </div>
    </article>
  );
};

export default Test2;
