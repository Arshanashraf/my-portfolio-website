
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import { Outlet } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import './components/global.css'
import './components/sliderImages.css'
import './components/slideAnimation.css'
import Skills from './Pages/Skills'
import SkillLogos from './Pages/SkillLogos'
import Work from './Pages/Work'
import Contact from './Pages/Contact'



function App() {

  return (
    <>
      <div className='min-h-screen  flex flex-wrap content-between  text-white '>
        <div className='w-full '>
          
          <Header />
          {/* <main>
          
            <Outlet/>
          </main> */}
          <Home />
          <About />
          <Skills />
          <SkillLogos />
          <Work />
          <Contact />
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
