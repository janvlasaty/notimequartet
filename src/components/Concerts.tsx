import { useTranslation } from 'react-i18next';
import './Concerts.css';

interface Concert {
  date: string;
  venue: string;
  city: string;
  program?: string;
}

const Concerts = () => {
  const { t } = useTranslation();

  const concerts: Concert[] = [
    // Add concerts here as they are scheduled
  ];

  return (
    <section className="concerts" id="concerts">
      <div className="container">
        <h2>{t('upcomingConcerts')}</h2>
        {concerts.length > 0 ? (
          <div className="concerts-list">
            {concerts.map((concert, index) => (
              <div key={index} className="concert-card">
                <div className="concert-date">{concert.date}</div>
                <div className="concert-details">
                  <h3>{concert.venue}</h3>
                  <p className="concert-city">{concert.city}</p>
                  {concert.program && <p className="concert-program">{concert.program}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-concerts">{t('noConcertsScheduled')}</p>
        )}
      </div>
    </section>
  );
};

export default Concerts;
