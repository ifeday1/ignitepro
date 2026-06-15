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
import Speakers from './pages/Speakers';
import PEvent from './pages/PEvent';
import Podcast from './components/Podcast';
import AcceleratePage from './pages/AcceleratePage';
import AccelerateCountdown from './components/AccelerateCountdown';
import Donate from './pages/Donate';
import ScholarshipPage from './pages/ScholarshipPage';

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
          <Route path='/pastevents' element={<PEvent />} />
          <Route path='/upcomingevents' element={<Events />} />
          <Route path='/podcast' element={<Podcast />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pitch' element={<Pitch />} />
          <Route path='/terms-and-condition' element={<Terms />} />
          <Route path='/pitch-form' element={<Form />} />
          <Route path='/speakers' element={<Speakers />} />
          <Route path='/accelerate3.0' element={<AcceleratePage />} />
          <Route path='/accelerate3.0/scholarship' element={<ScholarshipPage />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
        <AccelerateCountdown />

        <ScrollToTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
