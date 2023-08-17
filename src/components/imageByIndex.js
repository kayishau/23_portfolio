// import image1 from '../imgs/testimage.JPG'
// import image2 from '../imgs/testimage.JPG'
// import image3 from '../imgs/testimage.JPG'
// import image4 from '../imgs/testimage.JPG'
// import { Project1, Project2, Project3, Project4 }from "./test2"
// import project2 from "./test2"
// import projectsComponent1 from '../projects/firstProject'
// import projectsComponent2 from '../projects/firstProject'
// import projectsComponent3 from '../projects/firstProject'
// import projectsComponent4 from '../projects/firstProject'

// export const images = [image1, image2, image3, image4]

// export const images = [projectsComponent1, projectsComponent2, projectsComponent3, projectsComponent4]



export const images = [
    {title:"Carbon FootPrint Tracker",
    img:"/img/projects/image-coming-soon.jpeg",
    summary:"A mini full CRUD wiki application that provides overviews on some of Web3 biggest topics. Created with NextJS, Tailwind CSS, Framer-Motion, MongoDB Atlas and NodeJS",
    link:"https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd",
    type:"Featured Project",
        github:"https://github.com/tiffanysimione/ProjectThree-CarbonFootprint-FrontEnd"}]


const imageByIndex = (index) => images[index % images.length]

export default imageByIndex