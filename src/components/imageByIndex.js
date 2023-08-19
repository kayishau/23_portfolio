export const projectsArray = [
  {
    title: "Carbon FootPrint Tracker",
    img: "/img/projects/image-coming-soon.jpeg",
    summary:
      "A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS",
    link: "https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd",
    type: "Featured Project",
    github:
      "https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd",
  },
  {
    title: "Web3 Wiki",
    img: "/img/projects/image-coming-soon.jpeg",
    summary:
      "A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS",
    link: "https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd",
    type: "Featured Project",
    github:
      "https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd",
  },
  {
    title: "Community Test Lab",
    img: "/img/projects/image-coming-soon.jpeg",
    summary:
      "A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS",
    link: "https://github.com/sramalho94/TOP_Frontend",
    type: "Featured Project",
    github:
      "https://github.com/sramalho94/TOP_Frontend",
  },
  {
    title: "WTW Blog",
    img: "/img/projects/image-coming-soon.jpeg",
    summary:
      "A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS",
    link: "https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd",
    type: "Featured Project",
    github:
      "https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd",
  },
];

const imageByIndex = (index) => projectsArray[index % projectsArray.length];

export default imageByIndex;
