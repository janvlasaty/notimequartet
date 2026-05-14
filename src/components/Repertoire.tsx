import { useTranslation } from 'react-i18next';
import './Repertoire.css';

interface RepertoireItem {
  composer: string;
  work: string;
}

const Repertoire = () => {
  const { t } = useTranslation();

  const repertoire: RepertoireItem[] = [
    // Add repertoire items here
  ];

  return (
    <section className="repertoire" id="repertoire">
      <div className="container">
        <h2>{t('repertoire')}</h2>
        <p className="section-subtitle">{t('ourRepertoire')}</p>
        {repertoire.length > 0 ? (
          <div className="repertoire-list">
            {repertoire.map((item, index) => (
              <div key={index} className="repertoire-item">
                <h3>{item.composer}</h3>
                <p>{item.work}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-repertoire">{t('noRepertoireYet')}</p>
        )}
      </div>
    </section>
  );
};

export default Repertoire;
