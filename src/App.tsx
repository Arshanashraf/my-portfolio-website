
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-700 text-white'>
        <div className='w-full block'>
          <Header />
          <main>
            TODO : <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
