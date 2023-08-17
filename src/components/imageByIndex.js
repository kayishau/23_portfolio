import image1 from '../imgs/testimage.JPG'
import image2 from '../imgs/testimage.JPG'
import image3 from '../imgs/testimage.JPG'
import image4 from '../imgs/testimage.JPG'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex