// import image1 from '../imgs/testimage.JPG'
// import image2 from '../imgs/testimage.JPG'
// import image3 from '../imgs/testimage.JPG'
// import image4 from '../imgs/testimage.JPG'
import Test2 from "./test2"
import Test3 from "./test2"
// import projectsComponent1 from '../projects/firstProject'
// import projectsComponent2 from '../projects/firstProject'
// import projectsComponent3 from '../projects/firstProject'
// import projectsComponent4 from '../projects/firstProject'

// export const images = [image1, image2, image3, image4]

// export const images = [projectsComponent1, projectsComponent2, projectsComponent3, projectsComponent4]

export const images = [Test2, Test3]


const imageByIndex = (index) => images[index % images.length]

export default imageByIndex