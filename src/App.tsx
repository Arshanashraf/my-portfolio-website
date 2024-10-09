
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import About from './Pages/About'


function App() {

  return (
    <>
      <div className='min-h-screen  flex flex-wrap content-between  text-white '>
        <div className='w-full '>
          
          <Header />
          <main>
          
            <Outlet/>
          </main>
          <About />
          
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
