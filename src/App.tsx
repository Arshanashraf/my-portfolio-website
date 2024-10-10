
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// import { Outlet } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import './components/global.css'



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
          
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
