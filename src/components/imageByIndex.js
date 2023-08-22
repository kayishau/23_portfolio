export const projectsArray = [
  {
    title: "Community Test Lab",
    img: "/img/projects/ctl.png",
    summary:
    "We used the U.S. COVID-19 Self-Test Data and Covid-19 Case Surveillance Public Use Data sets to build the Community Test Lab Mobile App, streamlining the sharing of diagnostic test data. Using React Native CLI, Typescript, NativeWind, PostgresSOL, NodeJS, Crypto, BCrypt and Jest",
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
    // link: "https://github.com/kayishau/web3-wiki",
    type: "Featured Project",
    github:
      "https://github.com/kayishau/web3-wiki",
  },
  {
    title: "Carbon FootPrint Tracker",
    img: "/img/projects/carbonfp.png",
    summary:
      "An app that helps you log and track your personal carbon footprint. Created with React, Tailwind CSS, Framer-Motion, MongoDB Atlas, NodeJS and Chartjs  - Project currently being refactored",
    // link: "https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd",
    type: "Featured Project",
    github:
      "https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd",
  },
  {
    title: "WTW Blog",
    img: "/img/projects/wtw.png",
    summary:
      "Catagorical by tags full crud blog app utilizing EJS, Express and AOS library - Project currently being refactored in python",
    // link: "https://github.com/kayishau/WTW-Blog",
    type: "Featured Project",
    github:
      "https://github.com/kayishau/WTW-Blog",
  },
];

const imageByIndex = (index) => projectsArray[index % projectsArray.length];

export default imageByIndex;

