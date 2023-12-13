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

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/features' element={<Features></Features>}></Route>
        <Route path='/stories' element={<Stories></Stories>}></Route>
        <Route path='/shlokas' element={<Shlokas></Shlokas>}></Route>
        <Route path='/pomo' element={<Pomo></Pomo>}></Route>
        <Route path='/yoga' element={<Yoga></Yoga>}></Route>
        <Route path='/meditation' element={<Meditation></Meditation>}></Route>
        <Route path='/journal' element={<Journal></Journal>}></Route>
        
        <Route></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
