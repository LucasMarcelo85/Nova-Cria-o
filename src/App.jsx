import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Section from './components/Section'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import BannerSection from './components/BannerSection'
import { ScrollToTop } from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <BannerSection/>
      <Section1/>
      <Section/>
      <Section2/>
      <Section3/>
      <ScrollToTop/>
      <Footer />
    </Router>
  );
}

export default App;
