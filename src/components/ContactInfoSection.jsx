import React from 'react';
import { motion } from 'framer-motion';
import './ContactInfoSection-responsive.css';

const ContactInfoSection = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact-info" className="section relative overflow-hidden">
      {/* Background image positioned behind all content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 w-full h-full flex items-center justify-end z-0"
        style={{ right: '-140px' }}
      >
        <img 
          src="/images/bbb562e9-7515-4cfe-9fb0-75074c3e37d4.png" 
          alt="Gaming Character" 
          className="h-full w-auto object-cover object-center scale-100 sm:scale-105 lg:scale-110 filter brightness-110 opacity-50"
          onLoad={() => console.log('Contact info background image loaded successfully')}
          onError={(e) => console.error('Contact info background image failed to load:', e)}
        />
      </motion.div>
      
      <div className="container relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header text-left"
        >
          <h2 className="text-h2 font-semibold mb-4">Contact Information</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F2C26B] to-[#E6B55C] mb-4"></div>
          <p className="text-body text-gray-300 max-w-2xl">
            Connect with us through any of these channels. We're here to help bring your gaming vision to life.
          </p>
        </motion.div>
        
        {/* Content - Two Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-content max-w-6xl mx-auto px-4"
        >
          
          {/* Two Column Layout - Force horizontal alignment with CSS classes */}
          <div 
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto contact-info-container"
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            
            {/* Left Column - Contact Details Card */}
            <motion.div
              variants={cardVariants}
              className="glass-card text-center group hover:scale-101 transition-transform duration-300 w-full sm:w-1/2 flex-1 contact-info-card"
              style={{
                flex: '1',
                width: '100%'
              }}
            >
              <div className="text-left">
                <h3 className="text-h3 font-medium mb-4 text-primary">Office Addresses</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-primary">Abu Dhabi Office</p>
                    <p className="text-body text-muted leading-relaxed">Sofitel 17-02, Abu Dhabi</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Dubai Office</p>
                    <p className="text-body text-muted leading-relaxed">Burj Khalifa 142-01, Dubai</p>
                  </div>
                </div>
                <div className="w-16 h-px bg-white/20 my-4"></div>
                <h3 className="text-h3 font-medium mb-2 text-primary">Contact Details</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-body text-muted"><span className="font-semibold text-primary">Phone:</span> +971 54 473 7373</p>
                  </div>
                  <div>
                    <p className="text-body text-muted"><span className="font-semibold text-primary">Email:</span> info@schamz-gaming.ae</p>
                  </div>
                  <div>
                    <p className="text-body text-muted"><span className="font-semibold text-primary">P.O Box:</span> 27772</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Financial Channel Card */}
            <motion.div
              variants={cardVariants}
              className="glass-card text-center group hover:scale-101 transition-transform duration-300 w-full sm:w-1/2 flex-1 contact-info-card"
              style={{
                flex: '1',
                width: '100%'
              }}
            >
              <div className="text-left">
                <h3 className="text-h3 font-medium mb-4 text-primary">Financial Channel</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-body text-muted"><span className="font-semibold text-primary">Bank Name:</span> UBL</p>
                  </div>
                  <div>
                    <p className="text-body text-muted"><span className="font-semibold text-primary">Account Name:</span> SCHAMZ INTERNATIONAL GAMING LLC</p>
                  </div>
                  <div>
                    <p className="text-body text-muted"><span className="font-semibold text-primary">Account Number:</span> <span className="font-mono">200881658</span></p>
                  </div>
                  <div>
                    <p className="text-body text-muted"><span className="font-semibold text-primary">IBAN:</span> <span className="font-mono">AE4704700000200881658</span></p>
                  </div>
                  <div>
                    <p className="text-body text-muted"><span className="font-semibold text-primary">Branch Name:</span> BUR DUBAI (0907)</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

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
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-accent/20 rounded-full"
        />
      </div>
    </section>
  );
};

export default ContactInfoSection;