import { useTranslation } from 'react-i18next';
import { Users, Calendar, ImageIcon, Music2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">{t('title')}</div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('musicians')}>
              <Users size={24} />
              <span>{t('musicians')}</span>
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('concerts')}>
              <Calendar size={24} />
              <span>{t('upcomingConcerts')}</span>
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('gallery')}>
              <ImageIcon size={24} />
              <span>{t('gallery')}</span>
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('repertoire')}>
              <Music2 size={24} />
              <span>{t('repertoire')}</span>
            </button>
          </li>
        </ul>

        <div className="language-selector">
          <button
            className={i18n.language === 'cs' ? 'active' : ''}
            onClick={() => changeLanguage('cs')}
          >
            CS
          </button>
          <button
            className={i18n.language === 'en' ? 'active' : ''}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
