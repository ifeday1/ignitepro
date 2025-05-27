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
import Team from './pages/Team';
import Terms from './pages/Terms';
import Form from './components/Form';
import Gallery from './pages/Gallery';


function App() {
  return (
    <>
      <Router>
        <Scroll />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/meet-the-team' element={<Team />} />
          <Route path='/works' element={<Services />} />
          <Route path='/events' element={<Events />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pitch' element={<Pitch />} />
          <Route path='/terms-and-condition' element={<Terms />} />
          <Route path='/pitch-form' element={<Form />} />
        </Routes>

        <ScrollToTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
