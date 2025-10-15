import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GamesSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [centerCard, setCenterCard] = useState(0);
  const [isHorizontalOrientation, setIsHorizontalOrientation] = useState(false);
  const scrollRef = useRef(null);

  const games = [
    {
      id: 1,
      title: "Genesis",
      genre: "AI LIFE SIMULATION",
      status: "In Development",
      description: "Experience the future of artificial life simulation where AI entities evolve, learn, and create their own digital ecosystems.",
      image: "/images/neogenesis.png",
      features: ["AI Evolution", "Dynamic Ecosystems", "Machine Learning", "Emergent Behavior"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      title: "COF",
      genre: "Story Hybrid",
      status: "Coming Soon",
      description: "A unique narrative experience that blends multiple storytelling formats into an immersive hybrid adventure.",
      image: "/images/cof.png",
      features: ["Interactive Storytelling", "Multiple Formats", "Branching Narratives", "Immersive Experience"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "XONTAINER: META SPACE",
      genre: "Simulation",
      status: "In Development",
      description: "Enter a revolutionary meta space where reality and virtuality converge in unprecedented ways.",
      image: "/images/xontainer.png",
      features: ["Meta Reality", "Virtual Convergence", "Spatial Computing", "Next-Gen Interface"],
      color: "from-red-500 to-orange-600"
    },
    {
      id: 4,
      title: "Andar Bahar",
      genre: "Play-to-Earn",
      status: "Available",
      description: "Traditional Indian card game with blockchain rewards and competitive gameplay.",
      image: "/images/spinix/andar-bahar.png",
      features: ["Blockchain Rewards", "Traditional Gameplay", "Competitive Matches", "Real Earnings"],
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 5,
      title: "Book of Mines",
      genre: "Play-to-Earn",
      status: "Available",
      description: "Strategic mining adventure where every decision can lead to treasure or danger.",
      image: "/images/spinix/book-of-mines.png",
      features: ["Strategic Gameplay", "Risk Management", "Treasure Hunting", "Crypto Rewards"],
      color: "from-amber-500 to-yellow-600"
    },
    {
      id: 6,
      title: "Crash X Football",
      genre: "Play-to-Earn",
      status: "Available",
      description: "Football-themed crash game combining sports excitement with earning potential.",
      image: "/images/spinix/crash-x-football.png",
      features: ["Sports Theme", "Crash Mechanics", "Live Multipliers", "Football Action"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 7,
      title: "Crash X",
      genre: "Play-to-Earn",
      status: "Available",
      description: "High-stakes multiplier game where timing is everything for maximum rewards.",
      image: "/images/spinix/crash-x.png",
      features: ["Multiplier Mechanics", "Real-time Action", "High Stakes", "Quick Rounds"],
      color: "from-red-500 to-rose-600"
    },
    {
      id: 8,
      title: "Dice Thrice",
      genre: "Play-to-Earn",
      status: "Available",
      description: "Classic dice game with modern blockchain integration and earning mechanics.",
      image: "/images/spinix/dice-thrice.png",
      features: ["Classic Dice", "Triple Chances", "Blockchain Integration", "Fair Gaming"],
      color: "from-purple-500 to-violet-600"
    },
    {
      id: 9,
      title: "Sic Bo",
      genre: "Play-to-Earn",
      status: "Available",
      description: "Ancient Chinese dice game reimagined with cryptocurrency rewards.",
      image: "/images/spinix/sic-bo.png",
      features: ["Ancient Game", "Multiple Bets", "Crypto Rewards", "Traditional Rules"],
      color: "from-orange-500 to-red-600"
    },
    {
      id: 10,
      title: "Teen Patti",
      genre: "Play-to-Earn",
      status: "Available",
      description: "Popular Indian poker variant with blockchain-powered tournaments and rewards.",
      image: "/images/spinix/teen-patti.png",
      features: ["Indian Poker", "Tournament Play", "Blockchain Rewards", "Social Gaming"],
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 11,
      title: "Xoc Dia",
      genre: "Play-to-Earn",
      status: "Available",
      description: "Vietnamese traditional game enhanced with modern earning opportunities.",
      image: "/images/spinix/xoc-dia.png",
      features: ["Vietnamese Game", "Traditional Rules", "Modern Rewards", "Cultural Gaming"],
      color: "from-pink-500 to-purple-600"
    }
  ];

  // Intersection Observer to detect centered card
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const cardIndex = parseInt(entry.target.dataset.cardIndex);
            setCenterCard(cardIndex);
          }
        });
      },
      {
        threshold: [0.5, 0.75, 1.0],
        rootMargin: '-25% 0px -25% 0px'
      }
    );

    const cards = document.querySelectorAll('.game-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Track screen orientation for responsive positioning
  useEffect(() => {
    const checkOrientation = () => {
      setIsHorizontalOrientation(window.innerWidth > window.innerHeight);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  // Touch and scroll handlers for mobile carousel
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    scrollRef.current.startX = touch.clientX;
  };

  const handleTouchMove = (e) => {
    if (!scrollRef.current.startX) return;
    const touch = e.touches[0];
    const diff = scrollRef.current.startX - touch.clientX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < games.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (diff < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
      scrollRef.current.startX = null;
    }
  };

  const handleTouchEnd = () => {
    scrollRef.current.startX = null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Navigation functions for arrows
  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = 280 + 32; // card width + margins
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = 280 + 32; // card width + margins
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="games" className="section bg-gradient-dark relative overflow-visible">
      <div className="container relative z-10 overflow-visible">
        <motion.div 
          className="section-header mb-12"
          ref={titleRef}
          initial={{ opacity: 0, y: -30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-xl text-white mb-4">
            Our Games
          </h2>
          <div className="accent-line mx-auto mb-4"></div>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            Immersive gaming experiences crafted with passion and innovation
          </p>
        </motion.div>

        {/* Horizontal Slider Container */}
        <div className="relative overflow-visible">
          <div 
            ref={scrollRef}
            className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory hide-scrollbar py-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              // Full viewport width to allow right overflow
              width: '100vw',
              // Calculate proper left positioning to align first card with container
              // Container has max-width and is centered, so we need to account for that
              marginLeft: `calc(-50vw + 50% - ${isHorizontalOrientation ? '32px' : '24px'})`,
              // Left padding to align first card with container's content area
              paddingLeft: `calc(50vw - 50% + ${isHorizontalOrientation ? '32px' : '24px'})`,
              // Right padding to ensure last card can scroll to container's right edge
              paddingRight: `calc(50vw - 50% + ${isHorizontalOrientation ? '32px' : '24px'})`,
              paddingTop: '16px',
              paddingBottom: '24px'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                data-card-index={index}
                className={`game-card flex-shrink-0 snap-start transition-all duration-500 ${
                  centerCard === index 
                    ? 'animate-pulse' 
                    : ''
                }`}
                style={{
                  // Smaller card dimensions with proper proportions
                  width: 'clamp(240px, 15vw, 280px)', // Reduced from 18vw to 15vw
                  height: 'clamp(340px, 25vh, 380px)', // Reduced from 28vh to 25vh
                  marginLeft: index === 0 ? '0px' : 'clamp(8px, 1vw, 16px)', // Reset first card margin with new container positioning
                  marginRight: 'clamp(8px, 1vw, 16px)'
                }}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
              >
                <div 
                  className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                    centerCard === index
                      ? 'border-2 border-yellow-400 shadow-[0_0_25px_rgba(255,215,0,0.6)]'
                      : 'border border-yellow-400/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-yellow-400/70 hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                  }`}
                  style={{
                    // Glassmorphism effect
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px) saturate(150%)',
                    borderRadius: '1.5rem'
                  }}
                >
                  {/* Game Cover Image - Square Thumbnail */}
                  <div 
                    className="relative overflow-hidden"
                    style={{
                      height: '240px', // Reduced from 280px to match smaller card
                      width: '100%',
                      borderTopLeftRadius: '1.5rem',
                      borderTopRightRadius: '1.5rem'
                    }}
                  >
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-full object-cover object-center"
                      style={{
                        aspectRatio: '1/1' // Force square aspect ratio
                      }}
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
                        {game.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Area - Bottom section for title and genre */}
                  <div 
                    className="flex flex-col justify-center items-center text-center px-4 py-3"
                    style={{
                      height: 'calc(100% - 240px)', // Updated to match new image height
                      minHeight: '100px' // Ensure minimum space for content
                    }}
                  >
                    {/* Game Title */}
                    <h3 
                      className="font-bold text-yellow-400 mb-1"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        fontSize: 'calc(var(--font-size-ui) + 0.125rem)',
                        color: '#FFD700',
                        lineHeight: '1.2'
                      }}
                    >
                      {game.title}
                    </h3>
                    
                    {/* Game Genre */}
                    <p 
                      className="text-gray-400"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: 'calc(var(--font-size-ui) - 0.0625rem)',
                        color: '#AAAAAA',
                        lineHeight: '1.3'
                      }}
                    >
                      {game.genre}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Arrows - Below Slider, Center Aligned */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={scrollLeft}
              className="bg-black/80 hover:bg-black/95 backdrop-blur-md border-2 border-yellow-400/60 hover:border-yellow-400 rounded-full w-12 h-12 transition-all duration-300 flex items-center justify-center group shadow-xl hover:shadow-yellow-400/30"
              aria-label="Scroll left"
            >
              <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-r-[10px] border-t-transparent border-b-transparent border-r-yellow-400 group-hover:border-r-yellow-300 transition-colors duration-300 -ml-1"></div>
            </button>
            
            <button
              onClick={scrollRight}
              className="bg-black/80 hover:bg-black/95 backdrop-blur-md border-2 border-yellow-400/60 hover:border-yellow-400 rounded-full w-12 h-12 transition-all duration-300 flex items-center justify-center group shadow-xl hover:shadow-yellow-400/30"
              aria-label="Scroll right"
            >
              <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-yellow-400 group-hover:border-l-yellow-300 transition-colors duration-300 -mr-1"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements - Increased Particles */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-accent-primary/10 rounded-full blur-xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-accent-secondary/10 rounded-full blur-xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-20 w-20 h-20 bg-yellow-400/8 rounded-full blur-lg"
        animate={{ 
          x: [0, 25, 0],
          y: [0, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-20 w-28 h-28 bg-blue-400/8 rounded-full blur-xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 25, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute top-10 right-1/3 w-16 h-16 bg-purple-400/6 rounded-full blur-md"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      <motion.div 
        className="absolute bottom-10 left-1/3 w-36 h-36 bg-green-400/5 rounded-full blur-2xl"
        animate={{ 
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute top-2/3 left-5 w-22 h-22 bg-red-400/7 rounded-full blur-lg"
        animate={{ 
          y: [0, 35, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute top-1/4 right-5 w-18 h-18 bg-cyan-400/9 rounded-full blur-md"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.4, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </section>
  );
};

export default GamesSection;