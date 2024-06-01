// Components
import About from '../components/about/About'
import Counts from '../components/counts/Counts'
import Header from '../components/header/Header'
import Partners from '../components/partners/Partners'
import Project from '../components/project/Project'
import WeCan from '../components/weCan/WeCan'

const Home = () => {
  return (
    <>
      <Header/>
      <About/>
      <WeCan/>
      <Counts/>
      <Project/>
      <Partners/>
    </>
  )
}

export default Home