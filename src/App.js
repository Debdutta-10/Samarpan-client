import './App.css';
import React, { useState} from 'react';
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
import Alert from './components/Alert.js';

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [error,setError] = useState(true);

  const toggleAlert = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 1000);
  };

  const checkError=(myError)=>{
    if(myError){
      setError(true);
    }
    else{
      setError(false);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        {alertVisible?<Alert error={error} ></Alert>:null}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/shlokas' element={<Shlokas />} />
          <Route path='/pomo' element={<Pomo />} />
          <Route path='/yoga' element={<Yoga />} />
          <Route path='/meditation' element={<Meditation />} />
          <Route path='/journal' element={<Journal toggleAlert={toggleAlert} checkError={checkError} />} />
          <Route path='*' element={<NotFound />} />
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
