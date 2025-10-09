import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [descriptionRef, descriptionVisible] = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="text-h2 font-semibold mb-4">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F2C26B] to-[#E6B55C] mx-auto"></div>
        </motion.div>
        
        {/* Content Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-content max-w-5xl mx-auto grid gap-8 md:gap-12"
        >
          
          {/* Main Story Card */}
          <motion.div variants={itemVariants} className="glass-card">
            <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
              <div>
                <h3 className="text-h3 font-medium mb-4 text-primary">Our Story</h3>
                <p className="text-body text-muted mb-4">
                  Founded by a team of passionate gaming veterans with over 15 years of combined experience 
                  in the industry, Schamz Gaming represents the convergence of creative vision and technical 
                  excellence.
                </p>
                <p className="text-body text-muted">
                  Our founders have contributed to major gaming franchises and understand what 
                  makes players truly engaged.
                </p>
              </div>
              <div className="glass-card bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center">
                <div className="text-h2 font-semibold text-primary mb-2">15+</div>
                <div className="text-body text-muted">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Mission and Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="glass-card text-center">
               <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 mx-auto">
               </div>
               <h3 className="text-h3 font-medium mb-4 text-primary">Our Mission</h3>
               <p className="text-body text-muted">
                 To create immersive gaming experiences that push the boundaries of storytelling, 
                 technology, and player engagement while fostering a vibrant gaming community.
               </p>
             </motion.div>

            <motion.div variants={itemVariants} className="glass-card text-center">
               <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mb-6 mx-auto">
               </div>
               <h3 className="text-h3 font-medium mb-4 text-primary">Our Values</h3>
               <ul className="text-body text-muted space-y-2">
                 <li>Innovation in gameplay mechanics</li>
                 <li>Community-driven development</li>
                 <li>Exceptional visual storytelling</li>
                 <li>Inclusive gaming experiences</li>
               </ul>
             </motion.div>
          </div>

          {/* Future Focus Card */}
          <motion.div variants={itemVariants} className="glass-card text-center">
            <h3 className="text-h3 font-medium mb-4 text-primary">The Future</h3>
            <p className="text-body text-muted max-w-2xl mx-auto">
              At Schamz Gaming, every project is an opportunity to push boundaries and redefine what's 
              possible in interactive entertainment. We're not just making games – we're crafting the 
              future of digital experiences.
            </p>
          </motion.div>

        </motion.div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-24 h-24 border border-accent/20 rounded-full"
        />
      </div>
    </section>
  );
};

export default AboutSection;