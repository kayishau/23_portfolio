export const projectsArray = [
  {
    title: "Community Test Lab",
    img: "/img/projects/image-coming-soon.jpeg",
    summary:
    "We used the U.S. COVID-19 Self-Test Data and Covid-19 Case Surveillance Public Use Data sets to build the Community Test Lab Mobile App, streamlining the sharing of diagnostic test data. This solution aids test users in sharing standardized COVID-19 test results, enhancing public health decision-making while building public trust.",
    link: "https://github.com/sramalho94/TOP_Frontend",
    type: "Featured Project",
    github:
      "https://github.com/sramalho94/TOP_Frontend",
  },
  {
    title: "Web3 Wiki",
    img: "/img/projects/image-coming-soon.jpeg",
    summary:
      "A mini Wiki app on Web3 topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS",
    link: "https://github.com/kayishau/web3-wiki",
    type: "Featured Project",
    github:
      "https://github.com/kayishau/web3-wiki",
  },
  {
    title: "Carbon FootPrint Tracker",
    img: "/img/projects/image-coming-soon.jpeg",
    summary:
      "An app that helps you log and track your personal carbon footprint. Created with React, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS, Chartjs",
    link: "https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd",
    type: "Featured Project",
    github:
      "https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd",
  },
  {
    title: "WTW Blog",
    img: "/img/projects/image-coming-soon.jpeg",
    summary:
      "Catagorical by tags blog app utilizing EJS - Currently being refactored in python",
    link: "https://github.com/kayishau/WTW-Blog",
    type: "Featured Project",
    github:
      "https://github.com/kayishau/WTW-Blog",
  },
];

const imageByIndex = (index) => projectsArray[index % projectsArray.length];

export default imageByIndex;

