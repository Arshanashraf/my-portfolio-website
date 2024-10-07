import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import Logo from '../Logo';

function Header() {
    const authStatus = useSelector((state:RootState) =>state.auth.status)
    const navigate = useNavigate()
    const navItems= [
      {
        name: 'Home',
        slug: '/',
        active: true
      },
      {
        name: 'About',
        slug: '/about',
        active: authStatus
      },
      {
        name: 'Work',
        slug: '/work',
        active: authStatus
      },
      {
        name: 'Contact',
        slug: '/contact',
        active: authStatus
      },
    ]
   // fixed -mt-7
  return (
    <div className='w-full left-0 top-0 z-50 bg-black fixed '>  
    <Navbar expand="lg" className="w-full bg-body-tertiary ">
      <Container fluid > 
        <Navbar.Brand ><Link to={'/'}/><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='navbar-dark' />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <ul className='flex ml-auto'>
            {navItems.map((item)=>
            item.active ? (
              <li key={item.name}>
                <button
                onClick={()=> navigate(item.slug)}
                className='inline-block px-6 py-2 duration-200 text-lg hover:text-green-400 hover:animate-bounce rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            
          </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header
