import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <ScrollToTop />
      </Router>
    </>
  );
}

export default App;
