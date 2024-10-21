
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden mt-2 py-10 bg-black border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12 xl:w-5/12 2xl:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo />
              </div>
              <div className='text-start border-l-2 ml-16 mb-5'>
                <p className='ml-2 text-md'>
                  "Architects of the digital realm, shaping dreams into reality, one keystroke at a time."
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  &copy; Copyright 2024. All Rights Reserved by ArshanDev.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12 xl:w-3/12 2xl:w-3/12">
            <div className="h-full mt-8">
              <ul>
                <li className="mb-4">
                  <a href="#about" className="text-base font-medium text-white hover:text-gray-700">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#work" className="text-base font-medium text-white hover:text-gray-700">
                    Work
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#about" className="text-base font-medium text-white hover:text-gray-700">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-base font-medium text-white hover:text-gray-700">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12 xl:w-3/12 2xl:w-3/12 mt-10">
            <div className="h-full">
              <h3 className="mb-9 text-md font-semibold uppercase text-white">Get in touch</h3>
              <div className="space-x-4 text-lg">
                <a target='_blank'  href="https://www.facebook.com/profile.php?id=100005702447736"><i className="fa-brands fa-facebook-f hover:text-gray-400" ></i></a>
                <a target='_blank' href="https://www.linkedin.com/in/arshan-ashraf-650124288/"><i className="fa-brands fa-linkedin hover:text-gray-400"></i></a>
                <a target='_blank' href="https://www.instagram.com/m_arshan10/"><i className="fa-brands fa-instagram hover:text-gray-400"></i></a>
                <a target='_blank' href="https://github.com/Arshanashraf" ><i className="fa-brands fa-github hover:text-gray-400"></i></a>
                <a target='_blank' href="#"><i className="fa-brands fa-x-twitter hover:text-gray-400"></i></a>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer