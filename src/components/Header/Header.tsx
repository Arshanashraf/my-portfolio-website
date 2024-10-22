import { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import Logo from '../Logo';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

function Header() {
  const authStatus = useSelector((state: RootState) => state.auth.status);

  const navItems = [
    { name: 'Home', slug: '#home', active: true },
    { name: 'About', slug: '#about', active: authStatus },
    { name: 'Work', slug: '#work', active: authStatus },
    { name: 'Contact', slug: '#contact', active: authStatus },
  ];

  const [activeSection, setActiveSection] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [userInteracted, setUserInteracted] = useState(false);

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
    setActiveSection(slug.slice(1));
    const section = document.querySelector(slug);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle music play/pause
  const toggleMusic = () => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying) {
        console.log('Pausing audio...');
        audio.pause();
        setIsPlaying(false);
      } else {
        console.log('Playing audio...');
        audio.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log('Play error:', error);
          });
      }
    }
  };

  // Automatically play music after user interaction
  useEffect(() => {
    const audio = audioRef.current;

    const handleInteraction = () => {
      if (audio && !userInteracted) {
        console.log('Playing audio on interaction...');
        audio.play()
          .then(() => {
            setIsPlaying(true);
            setUserInteracted(true); // Prevents autoplay from triggering again
          })
          .catch((error) => console.log('Autoplay prevented:', error));
      }

      // Cleanup: remove event listeners
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    // Add event listener for user interaction (click or keydown)
    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [userInteracted]);

  return (
    <div className="w-full left-0 top-0 z-50 fixed">
      <Navbar expand="md" className="w-full bg-body-tertiary slideBottom opacity-0">
        <Container fluid className="flex justify-between items-center">
          {/* Logo on the left */}
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>

          {/* Right side: Navbar toggle and sound button */}
          <div className="flex items-center space-x-4">
            {/* Navbar Toggle Button */}
            <Navbar.Toggle aria-controls="navbarScroll" className="navbar-dark p-2" />

            {/* Sound Toggle Button */}
            <button
              onClick={toggleMusic}
              className="text-lg text-white p-2 rounded-full bg-cyan-500 hover:bg-cyan-700"
            >
              {isPlaying ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>

          <Navbar.Collapse id="navbarScroll" className="justify-center">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <ul className="flex ml-auto sm:bg-black sm:h-52 sm:px-10 sm:pt-4 sm:flex-col sm:rounded-lg xs:bg-black xs:h-52 xs:px-10 xs:pt-4 xs:flex-col xs:rounded-lg">
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

        {/* Audio Element */}
        <audio ref={audioRef} src="/music/audio.mp3" loop />
      </Navbar>
    </div>
  );
}

export default Header;
