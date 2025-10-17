import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact';
import Testimonials from './components/Testimonial';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama dengan semua komponen */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Projects />
              <Experience />
              <Skills />
              <Testimonials />
              <Contact />
              <Footer />
              <ScrollToTop />
            </>
          }
        />
        {/* Halaman detail proyek tanpa navbar dan footer */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;