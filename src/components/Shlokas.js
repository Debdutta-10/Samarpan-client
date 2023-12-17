import React, { useState,useEffect } from 'react';
import bg1 from './images/shlokas.jpg';
import quotes from './Shlokas_data';
import './styles/shlokas.css';
import YouTube from 'react-youtube';

function Shlokas() {
  const [shlok, setShlok] = useState(quotes[0]);

  function randomNumbers() {
    let num = Math.floor(Math.random() * 34);
    return num;
  }

  function giveRandomShlok() {
    let n = randomNumbers();
    setShlok(quotes[n]);
  }

  const videoId = "28sptQICKCk";

  const defaultOpts = {
    height: '400',
    width: '900',
  };

  const smallScreenOpts = {
    height: '250',
    width: '100%',
  };

  const getVideoOpts = () => {
    return window.innerWidth <= 769 ? smallScreenOpts : defaultOpts;
  };

  const [videoOpts, setVideoOpts] = useState(getVideoOpts());

  useEffect(() => {
    const handleResize = () => {
      setVideoOpts(getVideoOpts());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Run this effect only on mount and unmount

  const onReady = (event) => {
    // event.target.playVideo();
  };
  return (
    <>
      <div className="shlok-container">
        <img src={bg1} alt="" className='shlok-image' />
        <div className="shlok-text">
          <p>{shlok.text}</p>
          <h2>{shlok.author}</h2> 
        </div>
      </div>
      <button className='shloka-button' onClick={giveRandomShlok}>Read Another Shlok</button>

      <div className="geeta-playlist-container">
        <h1 style={{"textAlign":"center","marginTop":"20px","marginBottom":"20px"}}>Listen Bhagwat Geeta</h1>
        <YouTube
          videoId={videoId}
          opts={videoOpts}
          onReady={onReady}
        />
        <p className="mob-para">The Bhagavad Gita stands as a timeless beacon of universal wisdom, offering profound insights into the complexities of human existence. Its teachings transcend cultural and temporal boundaries, providing ethical guidance, promoting inner strength, and outlining a comprehensive approach to spiritual fulfillment. Emphasizing the importance of righteous action, the Gita encourages individuals to perform their duties with selflessness and detachment from outcomes. Central to its philosophy is the concept of "dharma," guiding individuals to fulfill their righteous duties and responsibilities. The Gita's teachings on meditation, ethical decision-making, and the pursuit of spiritual liberation continue to inspire and guide seekers, making it a revered scripture that resonates with the enduring quest for a purposeful and harmonious life.</p>
      </div>
    </>
  );
}

export default Shlokas;
