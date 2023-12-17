import React from 'react'
import conch from './images/conch.jpg'
import './styles/about.css'
function About() {
  return (
    <>
      <div className="about-container">
        <div className='about-img'>
          <img src={conch} alt="" />
        </div>
        <div className="about-text">
          <h1>About Us: Samarpan - Nurturing Inner Harmony</h1>
          <p>Step into the sacred realm of Samarpan, where the threads of ancient wisdom intricately weave together with contemporary practices to create a haven for those seeking profound inner peace and spiritual growth. Our mission is rooted in the transformative power of storytelling, offering a collection of Buddhist narratives that transcend time and culture. These stories, carefully curated, have the potential to impact lives by instilling timeless values, providing solace during challenging times, and offering profound insights for personal growth. Explore the eternal wisdom encapsulated in the verses of the Bhagavad Gita, each shloka serving as a guiding light on the path to self-realization, empowering individuals to navigate life's complexities with resilience and clarity. Embrace the Pomodoro technique, fostering both productivity and mental well-being through focused work intervals and rejuvenating breaks, unlocking the potential for enhanced creativity and balance in daily life. Samarpan unfolds the diverse paths of yoga—Bhakti, Karma, and Jnana—each providing a unique journey toward self-discovery, personal transformation, and holistic well-being. Our Meditation Corner invites you to find solace amid immersive sounds, creating a tranquil space for mindfulness that has the potential to positively impact mental health and emotional well-being. The Gratitude Journal, a sacred sanctuary, encourages reflections on moments of serenity amid life's chaos, fostering a mindset of gratitude that can uplift spirits and bring joy. Samarpan warmly invites you to join our community, where positive moments, big or small, are celebrated collectively. Embark with us on a journey of self-discovery, gratitude, and mindfulness, cultivating a life filled with purpose, peace, and boundless joy.</p>
        </div>
      </div>
    </>
  )
}

export default About;
