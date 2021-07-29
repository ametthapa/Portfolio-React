import Header from './components/Header';
import Showcase from './components/Showcase';
import Gallery from './components/Gallery';
import MoreWorks from './components/MoreWorks';
import Servies from './components/Services';
import Starttalking from './components/Starttalking';
import Footer from './components/Footer';

import "./components/FontawesomeIcons"



function App() {
  return (
    <div className="container">
      <Header />
      <Showcase />
      <Gallery />
      <MoreWorks />
      <Servies />
      <Starttalking />
      <Footer />

    </div>
    
  );
}

export default App;
