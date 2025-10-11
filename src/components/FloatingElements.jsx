import { useEffect, useRef } from 'react';

const FloatingElements = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating elements
    const createFloatingElement = (index) => {
      const element = document.createElement('div');
      element.className = `floating-element floating-element-${index % 3}`;
      
      // Random positioning
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      element.style.cssText = `
        position: fixed;
        left: ${startX}px;
        top: ${startY}px;
        width: ${Math.random() * 100 + 50}px;
        height: ${Math.random() * 100 + 50}px;
        pointer-events: none;
        z-index: 2;
        opacity: ${Math.random() * 0.3 + 0.1};
        animation: float-${index % 3} ${Math.random() * 20 + 15}s infinite linear;
        transform-origin: center;
      `;

      // Create different shapes
      if (index % 3 === 0) {
        // Wispy cloud-like shape
        element.innerHTML = `
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="blur-${index}">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
              </filter>
              <radialGradient id="grad-${index}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style="stop-color:#F2C26B;stop-opacity:0.4" />
          <stop offset="100%" style="stop-color:#F2C26B;stop-opacity:0" />
              </radialGradient>
            </defs>
            <path d="M20,50 Q30,20 50,30 Q70,10 80,40 Q90,60 70,70 Q50,80 30,70 Q10,60 20,50 Z" 
                  fill="url(#grad-${index})" filter="url(#blur-${index})"/>
          </svg>
        `;
      } else if (index % 3 === 1) {
        // Abstract geometric shape
        element.innerHTML = `
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="blur-${index}">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5"/>
              </filter>
              <linearGradient id="grad-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#4A5568;stop-opacity:0.3" />
                <stop offset="100%" style="stop-color:#2D3748;stop-opacity:0.1" />
              </linearGradient>
            </defs>
            <polygon points="50,10 80,30 70,70 30,70 20,30" 
                     fill="url(#grad-${index})" filter="url(#blur-${index})"/>
          </svg>
        `;
      } else {
        // Ethereal orb
        element.innerHTML = `
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="blur-${index}">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
              </filter>
              <radialGradient id="grad-${index}" cx="30%" cy="30%" r="70%">
                <stop offset="0%" style="stop-color:#F2C26B;stop-opacity:0.5" />
          <stop offset="50%" style="stop-color:#F2C26B;stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:#F2C26B;stop-opacity:0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#grad-${index})" filter="url(#blur-${index})"/>
          </svg>
        `;
      }

      container.appendChild(element);
      return element;
    };

    // Create multiple floating elements
    const elements = [];
    const elementCount = Math.min(16, Math.floor(window.innerWidth / 100));
    
    for (let i = 0; i < elementCount; i++) {
      elements.push(createFloatingElement(i));
    }

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-0 {
        0% { transform: translate(0, 0) rotate(0deg) scale(1); }
        25% { transform: translate(100px, -50px) rotate(90deg) scale(1.1); }
        50% { transform: translate(-50px, -100px) rotate(180deg) scale(0.9); }
        75% { transform: translate(-100px, 50px) rotate(270deg) scale(1.05); }
        100% { transform: translate(0, 0) rotate(360deg) scale(1); }
      }
      
      @keyframes float-1 {
        0% { transform: translate(0, 0) rotate(0deg) scale(1); }
        33% { transform: translate(-80px, 80px) rotate(120deg) scale(0.8); }
        66% { transform: translate(80px, -80px) rotate(240deg) scale(1.2); }
        100% { transform: translate(0, 0) rotate(360deg) scale(1); }
      }
      
      @keyframes float-2 {
        0% { transform: translate(0, 0) rotate(0deg) scale(1); }
        20% { transform: translate(60px, 60px) rotate(72deg) scale(1.1); }
        40% { transform: translate(-60px, 60px) rotate(144deg) scale(0.9); }
        60% { transform: translate(-60px, -60px) rotate(216deg) scale(1.05); }
        80% { transform: translate(60px, -60px) rotate(288deg) scale(0.95); }
        100% { transform: translate(0, 0) rotate(360deg) scale(1); }
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      elements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }} />;
};

export default FloatingElements;