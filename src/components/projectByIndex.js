import projectsComponent1 from './projectsComponent'
import projectsComponent2 from './projectsComponent'
import projectsComponent3 from './projectsComponent'
import projectsComponent4 from './projectsComponent'

export const projectCm = [projectsComponent1, projectsComponent2, projectsComponent3, projectsComponent4]

const projectByIndex = (index) => projectCm[index % projectCm.length]

export default projectByIndex