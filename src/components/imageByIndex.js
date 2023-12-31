
export const projectsArray = [
  {
    title: "ReCentiFi",
    img: "/img/projects/ReCentiFi.png",
    video: "",
    summary:
      'Built at ETHGlobal NYC | An AI-powered incentivization protocol designed to control access to a suite of tier-gated services. Utilizing Express, NextJS, Typescript, Javascript, Worldcoin - proof of humanity, Polygon ID - issue and verify credentials, Filecoin - storage and compute, and  Uniswap v4 - hook to gate access w/ credentials/NFT. Winner of "Best Use of Polygon ID"',
    link: "https://github.com/KaiStryker/ReCentiFi",
    type: "Featured Project",
    github: "https://github.com/KaiStryker/ReCentiFi",
    demo: "Coming Soon!",
  },
  {
    title: "Community Test Lab",
    img: "/img/projects/ctl.png",
    video: "",
    summary:
      "We used the U.S. COVID-19 Self-Test Data and Covid-19 Case Surveillance Public Use Data sets to build the Community Test Lab Mobile App, streamlining the sharing of diagnostic test data. Using React Native CLI, Typescript, NativeWind, PostgresSOL, NodeJS, Crypto, BCrypt and Jest",
    link: "https://github.com/sramalho94/TOP_Frontend",
    type: "Featured Project",
    github: "https://github.com/sramalho94/TOP_Frontend",
    demo: "https://www.canva.com/design/DAFsTukp8G8/MjwyGMxtafM1djzQIVT8IA/watch?utm_content=DAFsTukp8G8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
  },
  {
    title: "Web3 Wiki",
    img: "/img/projects/comingsoon.png",
    summary:
      "A mini Wiki app on Web3 topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS",
    // link: "https://github.com/kayishau/web3-wiki",
    type: "Featured Project",
    github: "https://github.com/kayishau/web3-wiki",
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
    github: "https://github.com/kayishau/WTW-Blog",
  },
];

const imageByIndex = (index) => projectsArray[index % projectsArray.length];

export default imageByIndex;
