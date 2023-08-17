// import image1 from '../imgs/testimage.JPG'
// import image2 from '../imgs/testimage.JPG'
// import image3 from '../imgs/testimage.JPG'
// import image4 from '../imgs/testimage.JPG'
import projectsComponent1 from '../projects/firstProject'
import projectsComponent2 from '../projects/firstProject'
import projectsComponent3 from '../projects/firstProject'
import projectsComponent4 from '../projects/firstProject'

// export const images = [image1, image2, image3, image4]

export const images = [projectsComponent1, projectsComponent2, projectsComponent3, projectsComponent4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex