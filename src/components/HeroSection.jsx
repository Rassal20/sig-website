import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HeroSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [subtitleRef, subtitleVisible] = useScrollAnimation(0.2);
  const [descriptionRef, descriptionVisible] = useScrollAnimation(0.2);

  return (
    <section id="home" className="section-full-height relative overflow-hidden">
      {/* Background Image - positioned on the left behind all elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/7507_ho_00_p_2048x1536-1-1.png" 
          alt="Background" 
          className="absolute left-0 top-0 h-full w-auto object-cover object-left"
          style={{ 
            maxWidth: '70%', 
            minHeight: '100vh',
            filter: 'brightness(0.7) contrast(1.1)'
          }}
          onLoad={() => console.log('Background image loaded successfully')}
          onError={(e) => console.error('Background image failed to load:', e)}
        />
        {/* Overlay to ensure image is visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/50"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-start text-center min-h-screen pt-8 pb-20">
          
          {/* Logo - Made smaller and moved up more with sophisticated light tracing animation */}
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0.3, 
              y: -50,
              filter: "brightness(0) blur(10px)"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              filter: "brightness(1) blur(0px)"
            }}
            transition={{ 
              duration: 3.5, 
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 2.5, ease: "easeOut" },
              scale: { 
                duration: 3.5, 
                ease: [0.34, 1.56, 0.64, 1],
                type: "spring",
                stiffness: 60,
                damping: 20
              },
              filter: { duration: 2.8, ease: "easeInOut" }
            }}
            className="mb-2 flex justify-center relative"
          >
            {/* Light tracing effect - outer glow */}
            <motion.div
              initial={{ 
                opacity: 0,
                scale: 0.5,
                boxShadow: "0 0 0px rgba(242, 194, 107, 0)"
              }}
              animate={{ 
                opacity: [0, 0.8, 0.6, 1, 0.8],
                scale: [0.5, 1.2, 1.1, 1, 1],
                boxShadow: [
                  "0 0 0px rgba(242, 194, 107, 0)",
                  "0 0 30px rgba(242, 194, 107, 0.4), 0 0 60px rgba(255, 215, 0, 0.2)",
                  "0 0 40px rgba(242, 194, 107, 0.6), 0 0 80px rgba(255, 215, 0, 0.3)",
                  "0 0 20px rgba(242, 194, 107, 0.5), 0 0 40px rgba(255, 215, 0, 0.2)",
                  "0 0 15px rgba(242, 194, 107, 0.3)"
                ]
              }}
              transition={{
                duration: 4,
                delay: 0.8,
                ease: "easeInOut",
                times: [0, 0.3, 0.6, 0.8, 1]
              }}
              className="absolute inset-0 rounded-lg"
            />
            
            {/* Light sweep effect */}
            <motion.div
              initial={{ 
                opacity: 0,
                background: "linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0) 40%, rgba(255, 215, 0, 0.8) 50%, rgba(255, 215, 0, 0) 60%, transparent 100%)",
                x: "-100%"
              }}
              animate={{ 
                opacity: [0, 1, 0],
                x: ["100%", "-100%"]
              }}
              transition={{
                duration: 2.5,
                delay: 1.5,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-lg pointer-events-none"
            />

            <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white/10 rounded-lg flex items-center justify-center relative overflow-hidden">
              <motion.img 
                src="/Schamz-Gaming-Logo.svg" 
                alt="Schamz Gaming Logo" 
                className="w-full h-full object-contain relative z-10"
                initial={{ 
                  filter: "brightness(0.3) contrast(0.5)",
                  opacity: 0
                }}
                animate={{ 
                  filter: "brightness(1) contrast(1)",
                  opacity: 1
                }}
                transition={{
                  duration: 2.2,
                  delay: 1.8,
                  ease: "easeOut"
                }}
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                  e.target.parentElement.innerHTML = '<div class="text-white text-center">SCHAMZ<br/>GAMING</div>';
                }}
                onLoad={() => console.log('Logo loaded successfully')}
              />
              
              {/* Inner light pulse */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0.2, 0.6, 0.1],
                  scale: [0.8, 1.1, 0.9, 1.2, 0.8]
                }}
                transition={{
                  duration: 3,
                  delay: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 4
                }}
                className="absolute inset-2 bg-gradient-radial from-[#FFD700]/20 via-[#F2C26B]/10 to-transparent rounded-lg"
              />
            </div>
          </motion.div>

          {/* Stay Tuned Text - Simple version without revealing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              type: "spring",
              stiffness: 80
            }}
            className="mb-8"
          >
            <motion.p
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.9, 1, 0.9],
                textShadow: [
                  "0 0 10px rgba(242, 194, 107, 0.5), 0 0 20px rgba(242, 194, 107, 0.3), 0 0 30px rgba(242, 194, 107, 0.2)",
                  "0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.4)",
                  "0 0 10px rgba(242, 194, 107, 0.5), 0 0 20px rgba(242, 194, 107, 0.3), 0 0 30px rgba(242, 194, 107, 0.2)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl md:text-6xl lg:text-8xl font-black bg-gradient-to-r from-[#F2C26B] via-[#FFD700] to-[#F2C26B] bg-clip-text text-transparent tracking-wider uppercase"
              style={{
                filter: "drop-shadow(0 0 15px rgba(242, 194, 107, 0.6))",
                textShadow: "0 0 20px rgba(242, 194, 107, 0.8), 0 0 40px rgba(255, 215, 0, 0.6)"
              }}
            >
              Stay Tuned!
            </motion.p>
          </motion.div>

          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card max-w-4xl mb-12"
          >
            <motion.h1 
              ref={titleRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: titleVisible ? 1 : 0, y: titleVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-h1 font-semibold mb-6 bg-gradient-to-r from-[#F2C26B] via-[#F2C26B] to-[#E6B55C] bg-clip-text text-transparent"
            >
              SCHAMZ GAMING
            </motion.h1>
            
            <motion.p 
              ref={descriptionRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: descriptionVisible ? 1 : 0, y: descriptionVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body text-muted mb-8 max-w-2xl mx-auto"
            >
              Where Innovation Meets Entertainment. We craft extraordinary gaming experiences 
              that push the boundaries of interactive entertainment and bring communities together.
            </motion.p>
            
            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const gamesSection = document.getElementById('games');
                  if (gamesSection) {
                    gamesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Our Games
              </button>
              <button className="btn btn-secondary">
                Learn More
              </button>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Floating particles for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/70 rounded-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;