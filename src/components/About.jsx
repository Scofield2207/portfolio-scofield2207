// About.jsx
import React from "react";
import "../css/About.css";
import profil2 from '../assets/profil2.jpg'; 

export const About = () => (
  <section className="about-section">
    {/* Background decorative elements */}
    <div className="background-decorations">
      <div className="decoration decoration-1"></div>
      <div className="decoration decoration-2"></div>
    </div>
    
    <div className="container">
      <div className="about-grid">
        
        {/* Image Section */}
        <div className="image-container">
          <div className="image-wrapper">
            {/* Gradient border effect */}
            <div className="gradient-border"></div>
            
            {/* Main image container */}
            <div className="profile-image">
              <img 
                src={profil2} 
                alt="Klougba Gildas - Développeur Full Stack" 
              />
              {/* Overlay gradient */}
              <div className="image-overlay"></div>
            </div>
            
            {/* Floating badge */}
            <div className="status-badge">
              <div className="status-indicator"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section">
          {/* Header */}
          <div className="header">
            
            <h2 className="main-title">
              À propos de moi
            </h2>
          </div>

          {/* Main description */}
          <div className="description">
            <p>
              Développeur web et mobile <span className="highlight-blue">passionné</span>, 
              avec une solide expertise dans la création d'applications performantes et ergonomiques. 
              Maîtrise complète du développement frontend et backend, ainsi que du développement mobile 
              multiplateforme <span className="highlight-bold">(Flutter, React Native)</span>.
            </p>
            
            <p>
              Fort d'une expérience sur des projets variés, je suis à l'aise aussi bien en startup 
              qu'en freelance. <span className="highlight-purple">Proactif, autonome et curieux</span>, 
              je suis toujours à l'affût des dernières technologies pour créer des solutions innovantes.
            </p>
          </div>
          
        </div>
      </div>
    </div>
     {/* Stats/Highlights - Nouveau Design */}
     <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <div className="stat-number">2+</div>
              <div className="stat-label">Années d'expérience</div>
              <div className="stat-description">Développement web et mobile professionnel</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <div className="stat-number">7+</div>
              <div className="stat-label">Projets réalisés</div>
              <div className="stat-description">Applications web, mobiles et sites e-commerce</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies maîtrisées</div>
              <div className="stat-description">React, Node.js, Flutter, bases de données</div>
            </div>
          </div>

          
          {/* Skills highlights - Nouveau Design */}
          <div className="skills-section">
            <h3 className="skills-title">Domaines d'expertise</h3>
            <div className="skills-container">
              <div className="skill-card">
                <div className="skill-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h4 className="skill-name">Développement Web</h4>
                <p className="skill-description">Frontend & Backend, React, Node.js, APIs REST</p>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                </div>
                <h4 className="skill-name">Applications Mobile</h4>
                <p className="skill-description">Flutter, React Native, iOS & Android</p>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                  </svg>
                </div>
                <h4 className="skill-name">UI/UX Design</h4>
                <p className="skill-description">Interfaces modernes, expérience utilisateur</p>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                  </svg>
                </div>
                <h4 className="skill-name">Bases de données</h4>
                <p className="skill-description">SQL, NoSQL, MongoDB, PostgreSQL</p>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 10h-1.26A8 8 0 1 1 9 20c0-.5.06-1 .17-1.5"/>
                    <path d="M14 14h4v4h-4z"/>
                  </svg>
                </div>
                <h4 className="skill-name">Cloud & DevOps</h4>
                <p className="skill-description">AWS, Docker, CI/CD, déploiement</p>
              </div>
              
              <div className="skill-card">
                <div className="skill-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </div>
                <h4 className="skill-name">APIs REST</h4>
                <p className="skill-description">Architecture API, documentation, intégration</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <button className="cta-button">
              <span>Découvrir mes projets</span>
              <svg className="cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

  </section>
);
