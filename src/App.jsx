import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Layout Components
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransitionLoader from './components/PageTransitionLoader';
import WhatsAppButton from './components/WhatsAppButton';

// Page Views
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GetCertified from './pages/GetCertified';

function App() {
  return (
    <Router>
      {/* 🟢 Smooth Page Transitions & Scroll Reset */}
      <ScrollToTop />
      <PageTransitionLoader />
      <TopBar />
      <Navbar />
      <div>
        <WhatsAppButton />
      </div>

      <main className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-certified" element={<GetCertified />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;