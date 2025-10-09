import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LicensingSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const authorities = [
    "General Commercial Gaming Regulatory Authority",
    "Abu Dhabi Registration Authority", 
    "Department of Economic Development – Abu Dhabi",
    "Judicial Department",
    "UAE Media Council"
  ];

  return (
    <section 
      id="licensing"
      ref={ref}
      className="section bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-xl text-white mb-6">
            <span className="text-primary">
              Licensed & Regulated
            </span>
          </h2>
          <div className="accent-line mx-auto mb-8"></div>
          <p className="text-body text-gray-300 max-w-2xl mx-auto">
            Schamz International Gaming is proud to be one of the first companies licensed to operate in the UAE by:
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="section-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Authorities List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {authorities.map((authority, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + (index * 0.1)
                }}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-yellow-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
                    {authority}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Certified Icon */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Custom Certified Icon */}
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={isVisible ? { scale: 1, rotate: 0 } : {}}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="w-80 h-80 lg:w-96 lg:h-96 relative"
              >
                <img 
                  src="/Certified Icon.svg" 
                  alt="Certified Icon" 
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Elements around the icon */}
                <div className="absolute -top-4 -right-4 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/4 -left-6 w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-1/4 -right-6 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </motion.div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-yellow-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-20 h-20 border-2 border-primary/20 rotate-45"
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
        className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-yellow-400/20 rounded-full"
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
    </section>
  );
};

export default LicensingSection;