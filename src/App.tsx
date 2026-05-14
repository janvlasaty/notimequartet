import './App.css';
import './i18n/config';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Musicians from './components/Musicians';
import Concerts from './components/Concerts';
import Gallery from './components/Gallery';
import Repertoire from './components/Repertoire';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Musicians />
      <Concerts />
      <Gallery />
      <Repertoire />
      <Footer />
    </div>
  );
}

export default App;
