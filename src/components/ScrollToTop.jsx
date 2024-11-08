import React, { useState, useEffect } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram'; // Importa o ícone do Instagram
import './ScrollToTop.css';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
      {/* Ícone do Instagram */}
      <a href="https://www.instagram.com/ignovacriacao/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon style={{ color: '#E4405F', fontSize: '40px', cursor: 'pointer' }} />
      </a>

      {/* Ícone de Scroll To Top */}
      <div
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none', fontSize: '30px', cursor: 'pointer' }}
      >
        &#8679;
      </div>
    </div>
  );
};
