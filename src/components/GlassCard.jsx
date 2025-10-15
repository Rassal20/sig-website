import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const GlassCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  padding = 'p-6',
  ...props 
}) => {
  const glassStyles = {
    default: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(8px) saturate(150%)',
      WebkitBackdropFilter: 'blur(8px) saturate(150%)',
      borderRadius: '14px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
    },
    subtle: {
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(6px) saturate(130%)',
      WebkitBackdropFilter: 'blur(6px) saturate(130%)',
      borderRadius: '14px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    },
    prominent: {
      background: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px) saturate(170%)',
      WebkitBackdropFilter: 'blur(10px) saturate(170%)',
      borderRadius: '14px',
      boxShadow: '0 12px 25px rgba(0, 0, 0, 0.6)',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(8px) saturate(150%)',
      WebkitBackdropFilter: 'blur(8px) saturate(150%)',
      borderRadius: '14px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
    }
  };

  const hoverEffects = hover ? {
    scale: 1.01,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 215, 0, 0.1)',
    borderColor: 'rgba(255, 215, 0, 0.3)',
  } : {};

  return (
    <motion.div
      className={`rounded-2xl backdrop-blur-xl shadow-xl relative overflow-hidden ${padding} ${className}`}
      style={{
        ...variants[variant],
        WebkitBackdropFilter: variants[variant].backdropFilter,
      }}
      whileHover={hoverEffects}
      transition={{ 
        duration: 0.3, 
        ease: "easeOut" 
      }}
      {...props}
    >
      {/* Subtle inner glow */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Decorative corner highlights */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#F2C26B]/10 to-transparent rounded-2xl pointer-events-none" />
    </motion.div>
  );
};

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'subtle', 'prominent', 'gold']),
  hover: PropTypes.bool,
  padding: PropTypes.string,
};

export default GlassCard;