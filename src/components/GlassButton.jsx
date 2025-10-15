import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const GlassButton = ({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const variants = {
    primary: {
      background: 'linear-gradient(135deg, rgba(242, 194, 107, 0.2) 0%, rgba(242, 194, 107, 0.1) 100%)',
      border: '1px solid rgba(242, 194, 107, 0.3)',
      color: 'text-[#F2C26B]',
      hoverBg: 'linear-gradient(135deg, rgba(242, 194, 107, 0.3) 0%, rgba(242, 194, 107, 0.15) 100%)',
      hoverBorder: 'rgba(242, 194, 107, 0.5)',
      hoverShadow: '0 10px 30px rgba(242, 194, 107, 0.3), 0 0 20px rgba(242, 194, 107, 0.2)',
    },
    secondary: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'text-white',
      hoverBg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
      hoverBorder: 'rgba(255, 255, 255, 0.3)',
      hoverShadow: '0 10px 30px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05)',
    },
    outline: {
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)',
      border: '1px solid rgba(242, 194, 107, 0.4)',
      color: 'text-[#F2C26B]',
      hoverBg: 'linear-gradient(135deg, rgba(242, 194, 107, 0.1) 0%, rgba(242, 194, 107, 0.05) 100%)',
      hoverBorder: 'rgba(242, 194, 107, 0.6)',
      hoverShadow: '0 10px 30px rgba(242, 194, 107, 0.2), 0 0 15px rgba(242, 194, 107, 0.1)',
    },
    danger: {
      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.1) 100%)',
      border: '1px solid rgba(239, 68, 68, 0.3)',
      color: 'text-red-100',
      hoverBg: 'linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.15) 100%)',
      hoverBorder: 'rgba(239, 68, 68, 0.5)',
      hoverShadow: '0 10px 30px rgba(239, 68, 68, 0.3), 0 0 20px rgba(239, 68, 68, 0.2)',
    }
  };

  const sizes = {
    small: 'px-4 py-2 text-small',
    medium: 'px-6 py-3 text-body',
    large: 'px-8 py-4 text-lg',
  };

  const currentVariant = variants[variant];

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative rounded-xl font-medium transition-all duration-300 
        backdrop-blur-xl shadow-lg overflow-hidden
        ${currentVariant.color} ${sizes[size]} ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      style={{
        background: currentVariant.background,
        border: currentVariant.border,
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
      whileHover={!disabled ? {
        scale: 1.02,
        boxShadow: currentVariant.hoverShadow,
        background: currentVariant.hoverBg,
        borderColor: currentVariant.hoverBorder,
      } : {}}
      whileTap={!disabled ? {
        scale: 0.98,
      } : {}}
      transition={{ 
        duration: 0.2, 
        ease: "easeOut" 
      }}
      {...props}
    >
      {/* Subtle inner glow */}
      <div 
        className="absolute inset-0 rounded-xl opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Animated highlight on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
        }}
        whileHover={{ 
          opacity: 1,
          x: ['-100%', '100%'],
        }}
        transition={{ 
          x: { duration: 0.6, ease: "easeInOut" },
          opacity: { duration: 0.2 }
        }}
      />
    </motion.button>
  );
};

GlassButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default GlassButton;