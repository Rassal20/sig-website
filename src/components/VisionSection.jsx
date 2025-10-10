import { useScrollAnimation } from '../hooks/useScrollAnimation';

const VisionSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [descriptionRef, descriptionVisible] = useScrollAnimation(0.2);

  return (
    <section id="vision" className="section bg-black text-white relative">
      <div className="abstract-bg-2"></div>
      
      <div className="container relative z-10">
        <div className="section-header mb-8">
          <h2 
            ref={titleRef}
            className={`animate-fade-in-up mb-4 ${titleVisible ? 'visible' : ''}`}
          >
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F2C26B] to-[#E6B55C] mx-auto mb-4"></div>
        </div>
        
        <div className="section-content text-center max-w-4xl mx-auto">
          <p
          ref={descriptionRef}
          className={`text-body leading-relaxed text-gray-300 max-w-4xl mx-auto animate-slide-up animate-delay-300 ${descriptionVisible ? 'visible' : ''}`}
          >
            To become the leading force in next-generation gaming, creating immersive worlds 
            that transcend traditional boundaries and redefine what interactive entertainment 
            can achieve. We envision a future where <span className="text-accent-primary font-semibold">Web3 technology</span> empowers 
            true digital ownership, <span className="text-accent-secondary font-semibold">AI-driven experiences</span> adapt to every player, 
            and <span className="text-accent-primary font-semibold">play-to-earn economies</span> reward dedication and skill. 
            Our games serve as bridges between reality and imagination, fostering global communities 
            united by shared adventures and real-world value creation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;