import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import Logo from '../Logo';

function Header() {
  const authStatus = useSelector((state: RootState) => state.auth.status);

  const navItems = [
    { name: 'Home', slug: '#home', active: true },
    { name: 'About', slug: '#about', active: authStatus },
    { name: 'Work', slug: '#work', active: authStatus },
    { name: 'Contact', slug: '#contact', active: authStatus },
  ];

  const [activeSection, setActiveSection] = useState('home');

  // Scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]');
      let currentSection = 'home';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2) {
          currentSection = section.getAttribute('id')!;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Click-based navigation to update active section
  const handleNavClick = (slug: string) => {
    setActiveSection(slug.slice(1)); // Remove the "#" from the slug
    const section = document.querySelector(slug);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full left-0 top-0 z-50 fixed'>
      <Navbar expand="lg" className="w-full bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='navbar-dark' />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <ul className='flex ml-auto'>
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavClick(item.slug)}
                        className={`inline-block px-6 py-2 duration-200 text-lg hover:text-green-400 hover:animate-bounce rounded-full ${
                          activeSection === item.slug.slice(1) ? 'text-green-400' : ''
                        }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
