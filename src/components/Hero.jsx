// Hero.jsx - Design Moderne
import React, { useState, useEffect } from "react";
import "../css/Hero.css";

export const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const specialties = [
    "Développeur Full-Stack",
    "UI/UX Designer", 
    "Expert React & Node.js",
    "Créateur d'Apps Mobiles",
    "Architecte Web",
    "Passionné d'Innovation"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % specialties.length);
        setIsTyping(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleViewProjects = () => {
    // Ouvrir GitHub dans un nouvel onglet
    window.open("https://github.com/Scofield2207", '_blank');
  };

  const handleContact = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  

  return (
    <>
      <section className="hero-section">
       

        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
      
          {/* Titre principal */}
          <h1 className="hero-title">KLOUGBA Gildas</h1>

          {/* Sous-titre animé avec effet de frappe */}
          <div className="subtitle-container">
            <h2 className="hero-subtitle">
              <span className={`rotating-text ${isTyping ? 'typing' : ''}`}>
                {specialties[currentText]}
              </span>
              <span className="cursor">|</span>
            </h2>
          </div>

          {/* Description moderne */}
          <p className="hero-description">
            Passionné par les technologies web modernes, je transforme vos idées en 
            <span className="highlight"> expériences numériques exceptionnelles</span>. 
            De la conception à la mise en production, je vous accompagne dans tous vos projets digitaux.
          </p>

          {/* Boutons d'action modernes */}
          <div className="cta-buttons">
            <button className="btn-primary" onClick={handleViewProjects}>
              <span>Voir mes projets</span>
              <div className="btn-overlay"></div>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={handleContact}>
              <span>Me contacter</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </button>
            <button className="btn-tertiary" onClick={handleContact}>
              <span>Télécharger CV</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Modal de contact */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            
            <div className="modal-header">
              <h3 className="modal-title">Me contacter</h3>
              <p className="modal-subtitle">Pour obtenir mon CV et discuter de vos projets</p>
            </div>
            
            <div className="modal-body">
              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>WhatsApp</h4>
                    <p>+229 66 57 24 65</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>gildasprofessionnel2207@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="modal-actions">
                <button 
                  className="modal-btn-primary"
                  onClick={() => {
                    const phoneNumber = "+22966572465";
                    const message = "Bonjour ! Je suis intéressé par vos services et j'aimerais obtenir votre CV.";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                    handleCloseModal();
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Contacter sur WhatsApp
                </button>
                
                <button 
                  className="modal-btn-secondary"
                  onClick={() => {
                    const email = "gildasprofessionnel2207@gmail.com";
                    const subject = "Demande de CV - Portfolio";
                    const body = "Bonjour,\n\nJe suis intéressé par vos services et j'aimerais obtenir votre CV.\n\nCordialement,";
                    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    window.open(mailtoUrl);
                    handleCloseModal();
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Envoyer un email
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};