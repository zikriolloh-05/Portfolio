import React from 'react';
import Button from '../../ui/button/button';
// import photo from '/src/assets/me.jpg';
import './style.css';

function Home({ onScrollToSection }) {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-image-container">
          <img src="../../../../images/image copy 3.png"  alt="Ваше фото" className="hero-image" />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">
            Привет, я <span className="gradient-text"></span>
          </h1>
          <p className="hero-subtitle">Frontend Developer </p>
          <p className="hero-description">
             1 года опыта в программировании
          </p>
          <div className="hero-buttons">
            <Button className='btnProjects' variant="secondary" onClick={() => onScrollToSection('projects')}>
              Мои проекты
            </Button>
            <Button className='btnContacts' variant="secondary" onClick={() => onScrollToSection('contact')}>
              Связаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
