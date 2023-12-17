import React from 'react'
import Card3 from './Card3';
import data from './Meditation-data';
import './styles/meditation.css'
function Meditation() {
  return (
    <>
      <div className="med-text">
        <h1>Elevate your serenity with Meditation Corner</h1>
        <p>Meditation, coupled with soothing sounds, amplifies its benefits, creating a harmonious experience for the mind and body. The infusion of calming sounds, such as gentle rain or ocean waves, enhances relaxation and stress reduction during meditation. These auditory elements deepen the meditative state, promoting mental clarity and focus. The rhythmic sounds serve as anchors, guiding practitioners into a tranquil state of mindfulness. The immersive experience not only cultivates a sense of inner peace but also contributes to better sleep, heightened emotional balance, and an overall enhanced well-being, making meditation with sounds a powerful tool for holistic self-care.
        </p>
      </div>
      <div className="med-card-container">
        {
          data.map((data, index) => (
            <Card3 key={index} image={data.image} heading={data.heading} paragraph={data.paragraph} sound={data.sound}></Card3>
          ))
        }
      </div>
    </>
  )
}

export default Meditation;
