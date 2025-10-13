import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const PartnershipsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [descriptionRef, descriptionVisible] = useScrollAnimation(0.2);
  const [partnersRef, visiblePartners] = useStaggeredAnimation(4, 150);

  const partnerships = [
    {
      name: "Nobellium",
      description: "Partnership with Budapest-based gaming development company specializing in innovative game solutions.",
      color: "from-blue-500 to-cyan-500",
      link: "https://store.steampowered.com/app/3307750/Xontainer_Meta_Space/"
    },
    {
      name: "Wunderino",
      description: "Strategic alliance with Europe's biggest online gaming platform for expanded market reach.",
      color: "from-purple-500 to-pink-500",
      link: "https://www.wunderino.com/en/"
    },
    {
      name: "Spinix",
      description: "Strategic partnership with Spinix.",
      color: "from-green-500 to-emerald-500",
      link: "https://spinix.ae/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
    <section id="partnerships" className="section bg-gradient-dark relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div 
          className="section-header mb-8"
          ref={titleRef}
          initial={{ opacity: 0, y: -30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-xl text-white mb-4">
            Strategic Partnerships
          </h2>
          <div className="accent-line mx-auto mb-4"></div>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional gaming experiences
          </p>
        </motion.div>
        
        <motion.div 
          ref={partnersRef}
          className="section-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {partnerships.map((partner, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              animate={visiblePartners.has(index) ? "visible" : "hidden"}
              whileHover={{ y: -10 }}
            >
              <h3 className="heading-md text-white mb-4 transition-colors">
                <a href={partner.link} target="_blank" rel="noopener noreferrer" className="no-underline text-[var(--color-primary)]">
                  {partner.name}
                </a>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          ref={descriptionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={descriptionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="glass-card p-8">
            <p className="text-body text-gray-300 leading-relaxed">
              We believe in the power of collaboration. Our strategic partnerships enable us to leverage 
              cutting-edge technologies and industry expertise to deliver exceptional gaming experiences 
              that push the boundaries of what's possible.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/3 right-20 w-28 h-28 border-2 border-accent-primary/20 rounded-full"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-20 w-20 h-20 border-2 border-accent-secondary/20 rotate-45"
        animate={{ 
          rotate: [45, 135, 45],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="abstract-bg-1"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </section>
  );
};

export default PartnershipsSection;