import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-image">
        <img
          src={import.meta.env.BASE_URL + "IMG_9994.jpeg"}
          alt="Notime Quartet"
          className="hero-image"
        />
        <div className="header-overlay">
          <h1>{t('title')}</h1>
          <p>{t('subtitle')}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
