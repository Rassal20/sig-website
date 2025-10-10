import { motion } from 'framer-motion';

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

  return (
    <section id="contact-info" className="section relative overflow-hidden">
      {/* Background image positioned behind all content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 w-full h-full flex items-center justify-end z-0"
        style={{ right: '-100px' }}
      >
        <img 
          src="/images/bbb562e9-7515-4cfe-9fb0-75074c3e37d4.png" 
          alt="Gaming Character" 
          className="h-full w-auto object-cover object-center drop-shadow-2xl scale-100 sm:scale-105 lg:scale-110 filter brightness-110"
          style={{
            filter: "drop-shadow(0 0 30px rgba(242, 194, 107, 0.8)) drop-shadow(0 0 60px rgba(255, 215, 0, 0.6)) drop-shadow(0 0 90px rgba(242, 194, 107, 0.4))"
          }}
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
          className="section-header"
        >
          <h2 className="text-h2 font-semibold mb-4">Contact Information</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F2C26B] to-[#E6B55C] mx-auto mb-4"></div>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            Connect with us through any of these channels. We're here to help bring your gaming vision to life.
          </p>
        </motion.div>
        
        {/* Content - Single Contact Info Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-content max-w-4xl mx-auto flex justify-center"
        >
          
          {/* Single Contact Information Card - Center Aligned */}
          <motion.div variants={itemVariants} className="glass-card text-left max-w-md">
            <div className="space-y-6">
              
              {/* Office Addresses */}
              <div>
                <h3 className="text-h3 font-medium mb-3 text-primary">Office Addresses</h3>
                <div className="text-body text-muted space-y-3">
                  <div>
                    <p className="font-medium text-primary">Abu Dhabi Office</p>
                    <p>Sofitel 17-02, Abu Dhabi</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary">Dubai Office</p>
                    <p>Burj Khalifa 142-01, Dubai</p>
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div>
                <h3 className="text-h3 font-medium mb-3 text-primary">Email</h3>
                <div className="text-body text-muted">
                  <p>info@shamz-gaming.ae</p>
                </div>
              </div>

            </div>
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