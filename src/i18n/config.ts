import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  cs: {
    translation: {
      title: 'Notime Quartet',
      subtitle: 'Pražské smyčcové kvarteto',
      musicians: 'Hudebníci',
      upcomingConcerts: 'Nadcházející koncerty',
      gallery: 'Galerie',
      repertoire: 'Repertoár',
      violin1: '1. housle',
      violin2: '2. housle',
      viola: 'viola',
      cello: 'violoncello',
      noConcertsScheduled: 'Žádné koncerty nejsou momentálně naplánovány',
      photosAndVideos: 'Fotografie a videa',
      noMediaYet: 'Zatím žádná média nejsou k dispozici',
      ourRepertoire: 'Náš repertoár',
      noRepertoireYet: 'Repertoár bude brzy doplněn',
    },
  },
  en: {
    translation: {
      title: 'Notime Quartet',
      subtitle: 'Prague-based string quartet',
      musicians: 'Musicians',
      upcomingConcerts: 'Upcoming Concerts',
      gallery: 'Gallery',
      repertoire: 'Repertoire',
      violin1: '1st violin',
      violin2: '2nd violin',
      viola: 'viola',
      cello: 'violoncello',
      noConcertsScheduled: 'No concerts currently scheduled',
      photosAndVideos: 'Photos and Videos',
      noMediaYet: 'No media available yet',
      ourRepertoire: 'Our Repertoire',
      noRepertoireYet: 'Repertoire coming soon',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'cs',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
