// Component
import Project from "../components/project/Project"
import Partners from "../components/partners/Partners"
import ProjectHeader from "../components/projectHeader/ProjectHeader"
import ProjectDescription from "../components/projectDescription/ProjectDescription"
import Footer from "../components/footer/Footer"

const ProjectPage = () => {
  return (
    <>
      <ProjectHeader/>
      <ProjectDescription/>
      <Project />
      <Partners />
      <Footer />
    </>
  )
}

export default ProjectPage