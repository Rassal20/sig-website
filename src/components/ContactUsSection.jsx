import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="container flex flex-col items-center justify-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header mb-8 text-center w-full"
        >
          <h2 className="text-h2 font-semibold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F2C26B] to-[#E6B55C] mx-auto mb-4"></div>
          <p className="text-body text-muted max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out to us directly! We're here to help you with any inquiries about our gaming services, partnerships, or general support. Fill out the form and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        
        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-content w-full flex justify-center items-center px-4 sm:px-6 md:px-8"
        >
          
          {/* FORM SECTION */}
          <div className="glass-card w-full max-w-2xl">
            <motion.div 
            className="relative overflow-hidden backdrop-blur-xl shadow-xl w-full"
            style={{
              // Form dimensions
              width: '100%',
              maxWidth: '600px',
              margin: '0 auto',
              padding: 'clamp(1.5rem, 3vh, 2.5rem)',
              // More transparent and less blurry glassmorphism styling
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(8px) saturate(120%)',
              WebkitBackdropFilter: 'blur(8px) saturate(120%)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
              borderRadius: '2rem'
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.01,
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
              borderColor: 'rgba(255, 255, 255, 0.15)',
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Subtle inner glow */}
            <div 
              className="absolute inset-0 opacity-50 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
                borderRadius: '2rem'
              }}
            />
            
            {/* Decorative corner highlights */}
            <div 
              className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
              style={{ borderRadius: '2rem' }}
            />
            <div 
              className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/5 to-transparent pointer-events-none"
              style={{ borderRadius: '2rem' }}
            />

            {/* Form Content */}
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-[3vh] text-center">
                
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label 
                    className="block mb-[1.5vh] font-medium text-center"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'var(--font-size-ui)',
                      color: '#F2C26B'
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full transition-all duration-300 ease-in-out focus:outline-none focus:scale-[1.02]"
                    style={{
                      height: 'clamp(45px, 5vh, 60px)',
                      padding: '0 clamp(1rem, 2vw, 1.5rem)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(15px) saturate(150%)',
                      WebkitBackdropFilter: 'blur(15px) saturate(150%)',
                      fontSize: 'var(--font-size-body)',
                      fontFamily: 'Inter, sans-serif',
                      color: '#E2E8F0',
                      borderRadius: '1rem'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(242, 194, 107, 0.4)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(242, 194, 107, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label 
                    className="block mb-[1.5vh] font-medium text-center"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'var(--font-size-ui)',
                      color: '#F2C26B'
                    }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full transition-all duration-300 ease-in-out focus:outline-none focus:scale-[1.02]"
                    style={{
                      height: 'clamp(45px, 5vh, 60px)',
                      padding: '0 clamp(1rem, 2vw, 1.5rem)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(15px) saturate(150%)',
                      WebkitBackdropFilter: 'blur(15px) saturate(150%)',
                      fontSize: 'var(--font-size-body)',
                      fontFamily: 'Inter, sans-serif',
                      color: '#E2E8F0',
                      borderRadius: '1rem'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(242, 194, 107, 0.4)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(242, 194, 107, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </motion.div>

                {/* Subject Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label 
                    className="block mb-[1.5vh] font-medium text-center"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'var(--font-size-ui)',
                      color: '#F2C26B'
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your inquiry"
                    className="w-full transition-all duration-300 ease-in-out focus:outline-none focus:scale-[1.02]"
                    style={{
                      height: 'clamp(45px, 5vh, 60px)',
                      padding: '0 clamp(1rem, 2vw, 1.5rem)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(15px) saturate(150%)',
                      WebkitBackdropFilter: 'blur(15px) saturate(150%)',
                      fontSize: 'var(--font-size-body)',
                      fontFamily: 'Inter, sans-serif',
                      color: '#E2E8F0',
                      borderRadius: '1rem'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(242, 194, 107, 0.4)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(242, 194, 107, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label 
                    className="block mb-[1.5vh] font-medium text-center"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'var(--font-size-ui)',
                      color: '#F2C26B'
                    }}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    rows="4"
                    className="w-full resize-vertical transition-all duration-300 ease-in-out focus:outline-none focus:scale-[1.02]"
                    style={{
                      minHeight: 'clamp(100px, 12vh, 140px)',
                      padding: 'clamp(1rem, 2vh, 1.5rem) clamp(1rem, 2vw, 1.5rem)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(15px) saturate(150%)',
                      WebkitBackdropFilter: 'blur(15px) saturate(150%)',
                      fontSize: 'var(--font-size-body)',
                      fontFamily: 'Inter, sans-serif',
                      color: '#E2E8F0',
                      borderRadius: '1rem'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(242, 194, 107, 0.4)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(242, 194, 107, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full font-semibold transition-all duration-300 ease-in-out mt-[2vh]"
                  style={{
                    height: 'clamp(50px, 6vh, 70px)',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'var(--font-size-ui)',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                    border: '2px solid rgba(242, 194, 107, 0.3)',
                    color: '#F2C26B',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    borderRadius: '1rem'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: '0 10px 25px rgba(242, 194, 107, 0.3)',
                    borderColor: 'rgba(242, 194, 107, 0.5)',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>

              </form>
            </div>
          </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsSection;