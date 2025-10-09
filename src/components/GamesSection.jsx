import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GamesSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [selectedGame, setSelectedGame] = useState(0);

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
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const previewVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="games" className="section bg-gradient-dark relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div 
          className="section-header"
          ref={titleRef}
          initial={{ opacity: 0, y: -30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-xl text-white mb-6">
            Our Games
          </h2>
          <div className="accent-line mx-auto mb-8"></div>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            Immersive gaming experiences crafted with passion and innovation
          </p>
        </motion.div>

        <div className="section-content max-w-4xl mx-auto w-full px-4">
          {/* 3-Column Grid Game Cards */}
          <motion.div 
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                className="relative group cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Main Card */}
                <div className="glass-card overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                  {/* Game Thumbnail - Square */}
                  <div className="aspect-square bg-gray-900 overflow-hidden relative">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-5 group-hover:opacity-12 transition-opacity duration-300`}></div>
                    
                    {/* Curtain Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 0.4 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-2 right-2">
                      <span className="text-xs px-2 py-1 bg-black/80 text-white rounded font-medium backdrop-blur-sm">
                        {game.status}
                      </span>
                    </div>
                  </div>
                  
                  {/* Game Info */}
                  <div className="p-2 sm:p-3 text-center">
                    <h3 className="text-xs font-semibold text-white mt-6 mb-4 group-hover:text-accent-primary transition-colors line-clamp-1">
                      {game.title}
                    </h3>
                    <p className="text-accent-primary text-xs font-normal uppercase tracking-wide opacity-70 group-hover:opacity-100 transition-opacity">
                      {game.genre}
                    </p>
                  </div>
                </div>
                
                {/* Curtain Reveal Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 border-2 border-accent-primary/20 rotate-12"
        animate={{ 
          rotate: [12, 45, 12],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-24 h-24 border-2 border-accent-secondary/20 rounded-full"
        animate={{ 
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      <motion.div 
        className="abstract-bg-2"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </section>
  );
};

export default GamesSection;