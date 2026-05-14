import { useTranslation } from 'react-i18next';
import './Navigation.css';

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">{t('title')}</div>
        <ul className="nav-menu">
          <li>
            <button onClick={() => scrollToSection('musicians')}>{t('musicians')}</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('concerts')}>{t('upcomingConcerts')}</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('gallery')}>{t('gallery')}</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('repertoire')}>{t('repertoire')}</button>
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
