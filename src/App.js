import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Features from './components/Features.js'
import Stories from './components/Stories.js'
import Shlokas from './components/Shlokas.js'
import Pomo from './components/Pomo.js'
import Yoga from './components/Yoga.js'
import Meditation from './components/Meditation.js'
import Journal from './components/Journal.js'
import ScrollToTop from './components/ScrollToTop.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/shlokas' element={<Shlokas />} />
          <Route path='/pomo' element={<Pomo />} />
          <Route path='/yoga' element={<Yoga />} />
          <Route path='/meditation' element={<Meditation />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='*' element={<NotFound />} /> {/* Use a wildcard for unmatched routes */}
        </Routes>
        <ScrollToTop />
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default App;
