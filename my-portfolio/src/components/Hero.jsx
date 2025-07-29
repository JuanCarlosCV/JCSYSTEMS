import React from 'react';
import '../styles/Hero.css';
import StarBorder from '../animations/StarBorder'
import RotatingText from '../animations/RotatingText'
import Galaxy from '../animations/Galaxy';
import ProfileCard from '../animations/ProfileCard'
const Hero = () => {
  return (
    <section className="hero-container" >
        <Galaxy  />  
     
      <div className="hero-content">
   <ProfileCard
  name="Juan Carlos Cabrera Vega"
  title="Software Engineer"
  handle="JCSYSTEMS"
  status="Online"
  contactText="Contact Me"
   avatarUrl="/assets/about-photo.jpg"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
        {/* <h1>Hola, soy INGENIERO JUAN CARLOS</h1>
        {/* <h1><RotatingText
          texts={['TE', 'AMO', 'SAMANTHA', 'I LOVE YOU!']}
          mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        /></h1> */}
        {/*
        <h2>Desarrollador Frontend/Backend</h2>
        <p>CREANDO SOLUCIONES INTEGRALES WEB/MOVIL </p> 
        */}
{/*    

 <button className="cta-button">Ver mi trabajo</button>
       <StarBorder
  as="button"
  className="custom-class"
  color="cyan"
  speed="5s"
>
 </StarBorder> */}
       
      
      </div>
    </section>
  );
};

export default Hero;