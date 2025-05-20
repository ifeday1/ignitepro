import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Pitch from './pages/Pitch';
import Footer from './components/Footer';
import Scroll from './components/Scroll';

function App() {
  return (
    <>
      <Router>
        <Scroll/> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/works' element={<Services />} />
          <Route path='/events' element={<Events />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pitch' element={<Pitch />} />
        </Routes>

        <ScrollToTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
