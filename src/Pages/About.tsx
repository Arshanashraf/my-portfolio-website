import Slider from 'react-slick';

const About = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed
  };

  return (
    <div id='about' className="relative mt-36 xl:mt-16 lg:mt-16 md:-mt-64 sm:-mt-80 xs:-mt-80">
      <Slider {...settings} className="w-full">
        <div className="h-screen bg-cover bg-center bg-[url('src/assets/Images/slider/slider1.png')]" style={{ backgroundImage: "" }} />
        <div className="h-screen bg-cover bg-center bg-[url('src/assets/Images/slider/slider2.png')]" style={{ backgroundImage: "url('https://whvn.cc/421dgx.jpg')" }} />
        <div className="h-screen bg-cover bg-center bg-[url('src/assets/Images/slider/slider3.png')]"  />
      </Slider>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-wrap items-center justify-center text-white text-center z-10">
        <h1 className="text-5xl md:text-6xl pt-24 font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Personal <span className=''>Overview</span></h1>
        <p className="text-lg md:text-xl   pl-36 pr-36 pb-36 xs:pl-6 xs:pr-6 sm:pl-16 sm:pr-16 md:pl-12 md:pr-12">Hello, I'm Arshan, a passionate and skilled Front-End Developer with a keen eye for design and a deep understanding of web technologies. My journey in web development has equipped me with the ability to create visually stunning and highly functional user interfaces. In addition to my front-end expertise, I have a solid grasp of core React concepts, allowing me to build dynamic and responsive web applications.

I am continuously enhancing my skills by learning backend development with Node.js, which enables me to create full-stack applications. I'm also exploring Next.js to harness the power of server-side rendering and static site generation for optimal performance. Additionally, I'm diving into React Native to develop cross-platform mobile applications that provide a seamless user experience.

My goal is to merge my front-end design skills with backend functionality, creating comprehensive web solutions that are not only aesthetically pleasing but also robust and efficient.</p>
      </div>
    </div>
  );
};

export default About;
