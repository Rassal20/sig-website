import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const ServicesSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [servicesRef, visibleServices] = useStaggeredAnimation(6, 150);

  const services = [
    {
      title: "Game Development",
      description: "Full-cycle game development from concept to launch, specializing in immersive experiences across multiple platforms."
    },
    {
      title: "Web3 Gaming",
      description: "Blockchain-powered gaming solutions with NFT integration, decentralized economies, and true digital asset ownership."
    },
    {
      title: "Play-to-Earn Games",
      description: "Revolutionary gaming models where players earn real rewards through gameplay, creating sustainable gaming economies."
    },
    {
      title: "AI Integration",
      description: "Advanced AI-powered game mechanics, intelligent NPCs, procedural content generation, and personalized gaming experiences."
    },
    {
      title: "Technical Consulting",
      description: "Expert guidance on game architecture, performance optimization, and technology stack selection for your projects."
    },
    {
      title: "Creative Direction",
      description: "Comprehensive creative services including narrative design, visual direction, and user experience optimization."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="section bg-gradient-dark relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div 
          className="section-header"
          ref={titleRef}
          initial={{ opacity: 0, y: -30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-xl text-white mb-6">
            Our Services
          </h2>
          <div className="accent-line mx-auto mb-8"></div>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            Comprehensive gaming solutions tailored to bring your vision to life
          </p>
        </motion.div>
        
        <div 
          ref={servicesRef}
          className="section-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              animate={visibleServices.has(index) ? "visible" : "hidden"}
              whileHover={{ y: -10 }}
            >
              <h3 className="heading-md text-white mb-4 group-hover:text-accent-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-20 h-20 border-2 border-accent-primary/20 rotate-45"
        animate={{ 
          rotate: [45, 135, 45],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-accent-secondary/20 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="abstract-bg-1"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </section>
  );
};

export default ServicesSection;