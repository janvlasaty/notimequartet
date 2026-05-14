import { useTranslation } from 'react-i18next';
import './Gallery.css';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  alt: string;
}

const Gallery = () => {
  const { t } = useTranslation();

  const mediaItems: MediaItem[] = [
    // Add media items here
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2>{t('gallery')}</h2>
        <p className="section-subtitle">{t('photosAndVideos')}</p>
        {mediaItems.length > 0 ? (
          <div className="gallery-grid">
            {mediaItems.map((item, index) => (
              <div key={index} className="gallery-item">
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.alt} />
                ) : (
                  <video controls poster={item.thumbnail}>
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-media">{t('noMediaYet')}</p>
        )}
      </div>
    </section>
  );
};

export default Gallery;
