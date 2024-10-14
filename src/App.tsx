
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import { Outlet } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import './components/global.css'
import Skills from './Pages/Skills'



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
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
