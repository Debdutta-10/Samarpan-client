import React, { useEffect, useState } from 'react';
import bg1 from './images/bg5.png';
import stories from './images/bg2.jpg';
import gita from './images/gita.jpg';
import pomo from './images/pomo.jpg'
import yoga from './images/yoga.jpg'
import meditation from './images/meditation.jpg'
import journal from './images/journal.jpg'
import './styles/home.css';
import YouTube from 'react-youtube';
import Card from './Card.js'

function Home() {
  const videoId = "-squqwaTuxo";

  const defaultOpts = {
    height: '400',
    width: '800',
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
    event.target.playVideo();
  };

  return (
    <>

      {/* Home Logo and Text */}
      <div className="home-container">
        <div className="overlay">
          <h1>Samarpan</h1>
          <h4>Your ultimate spiritual productivity tool for mental wellness.</h4>
          <p>
            Immerse yourself in a harmonious journey toward unlocking your true potential and achieving life's delicate balance. With a blend of mindfulness, productivity features, and spiritual guidance,
          </p>
        </div>
        <img src={bg1} alt="Background" className="background-image" />
      </div>

      {/* Youtube Player */}
      <div className="youtubeplayer">
        <h1 style={{ textAlign: "center", marginBottom: "10px", marginTop: "10px", textDecoration: "underline" }} className='mob-home-head'>Mental Illness Causes</h1>
        <YouTube
          videoId={videoId}
          opts={videoOpts}
          onReady={onReady}
        />
        <p className='mob-para'>Mental illness comprises diverse conditions impacting cognition, emotion, and behavior. Genetic predisposition, neurochemical imbalances, and environmental factors contribute to its onset. Psychological triggers, such as trauma or stress, can amplify risks. Stigma surrounds mental health, hindering early intervention and treatment. Understanding the multifaceted nature of mental illness is vital for fostering empathy and support. Recognition that mental health is as crucial as physical health is essential, encouraging open dialogue. By addressing biological, psychological, and societal aspects, we can collectively create an environment that prioritizes mental well-being and supports those navigating the complexities of mental health challenges.</p>
      </div>

      {/* Features Column */}
      <div className="features">
        <h1 style={{ textAlign: "center", marginBottom: "10px", marginTop: "20px", textDecoration: "underline" }} className='mob-home-head'>Features</h1>
        <div className='card-container'>
          <Card heading="Buddhist Stories" paragraph="Explore Buddhist stories to rejuvenate your mind, enhance productivity, and foster focus in the midst of life's demands.Buddhist stories not only offer respite from daily stress but also instill hope during challenging times, uplifting the spirit. Immerse yourself in timeless narratives that carry wisdom, compassion, and mindfulness. " image={stories}
            myPath="/stories" pathName="Read Stories"></Card>

          <Card heading="Read Gita Shlok" paragraph="Embark on a transformative journey by immersing yourself in the profound verses of the Bhagavad Gita. These sacred shlokas offer more than spiritual guidance,they serve as a source of mental rejuvenation, heightened focus, and increased productivity in the modern hustle.Delve into the timeless wisdom of the Gita to navigate life's complexities with resilience and purpose." image={gita} myPath="/shlokas" pathName="Read Shlok" ></Card>

          <Card heading="Pomodoro Mental Break" paragraph="Introducing Mindful Pomodoro Breaks a revolutionary approach to time management and mental well-being. Inspired by the Pomodoro Technique, our innovative concept integrates short, intentional mental breaks into your work routine. Elevate your productivity by strategically combining focused work intervals with rejuvenating mindfulness breaks." image={pomo}
            myPath="/pomo" pathName="Take a Break"></Card>
        </div>

        <div className='card-container'>
          <Card heading="Yogas" paragraph="Explore the diverse realms of yogas and delve into the transformative practices that shape holistic well-being.Each yoga offers a unique journey, providing valuable insights and methodologies for personal growth, mindfulness, and spiritual development. Whether through movement, meditation, or selfless action, the yogas illuminate the  interconnectedness between our inner selves and the vast universe." image={yoga} myPath="/yoga" pathName="Try it out"></Card>

          <Card heading="Meditation Corner" paragraph="Immerse yourself in serene tranquility as you indulge in moments of mindfulness and self-discovery. Enveloped in calming ambiance and gentle lighting, this sacred space invites you to explore various meditation techniques. Choose from an array of soothing sounds—gentle rain, soft chimes, or ocean waves—as your backdrop for contemplation." image={meditation} myPath="/meditation" pathName="Grab the Headphones"></Card>

          <Card heading="Gratitude Journal" paragraph="Welcome to your Gratitude Journal, a sacred space to celebrate the beauty in every day. Write something for which you are grateful for and what brightened your path, a moment of serenity in the midst of chaos. Join for cherishing the positive, big or small. Cultivate a mindset of gratitude, and watch as each entry becomes a step towards a more fulfilling and joyful life. " image={journal} myPath="/journal" pathName="Connect"></Card>

        </div>
      </div>
    </>
  );
}

export default Home;
