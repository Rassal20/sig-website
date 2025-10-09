const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] h-[8vh] md:h-[8vh] bg-black/70 backdrop-blur-sm flex justify-between items-center px-[5vw]">
      {/* Logo */}
      <div className="text-[#F2C26B] font-['Montserrat'] font-bold text-lg md:text-xl cursor-pointer">
        SCHAMZ GAMING
      </div>
      
      {/* Navigation Links */}
      <div className="flex items-center space-x-[3vw]">
        <a 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
          className="text-[#F2C26B] font-['Inter'] font-medium uppercase text-sm md:text-sm no-underline hover:text-[#E6B55C] transition-colors duration-300 cursor-pointer"
          style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.3)' }}
        >
          About Us
        </a>
        <a 
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('services');
          }}
          className="text-[#F2C26B] font-['Inter'] font-medium uppercase text-sm md:text-sm no-underline hover:text-[#E6B55C] transition-colors duration-300 cursor-pointer"
          style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.3)' }}
        >
          What We Do
        </a>
        <a 
          href="#vision"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('vision');
          }}
          className="text-[#F2C26B] font-['Inter'] font-medium uppercase text-sm md:text-sm no-underline hover:text-[#E6B55C] transition-colors duration-300 cursor-pointer"
          style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.3)' }}
        >
          Vision
        </a>
        <a 
          href="#games"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('games');
          }}
          className="text-[#F2C26B] font-['Inter'] font-medium uppercase text-sm md:text-sm no-underline hover:text-[#E6B55C] transition-colors duration-300 cursor-pointer"
          style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.3)' }}
        >
          Games
        </a>
      </div>
    </nav>
  );
};

export default NavBar;