import { useTranslation } from 'react-i18next';
import './Musicians.css';

interface Musician {
  name: string;
  instrument: string;
  photo: string;
}

const Musicians = () => {
  const { t } = useTranslation();

  const musicians: Musician[] = [
    {
      name: 'Tadeáš Kříž',
      instrument: t('violin1'),
      photo: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Tadeáš+Kříž',
    },
    {
      name: 'Jan Vlasatý',
      instrument: t('violin2'),
      photo: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Jan+Vlasatý',
    },
    {
      name: 'Linda Tomášková',
      instrument: t('viola'),
      photo: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Linda+Tomášková',
    },
    {
      name: 'Daniela Nečasová',
      instrument: t('cello'),
      photo: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Daniela+Nečasová',
    },
  ];

  return (
    <section className="musicians" id="musicians">
      <div className="container">
        <h2>{t('musicians')}</h2>
        <div className="musicians-grid">
          {musicians.map((musician, index) => (
            <div key={index} className="musician-card">
              <img src={musician.photo} alt={musician.name} />
              <h3>{musician.name}</h3>
              <p>{musician.instrument}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Musicians;
