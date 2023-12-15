import React from 'react'
import bg1 from './images/shlokas.jpg';
import quotes from './Shlokas_data';
import './styles/shlokas.css'

function Shlokas() {
  return (
    <>
      <div className="shlok-container">
        <img src={bg1} alt="" className='shlok-image' />
        <div className="shlok-text">
          <p>'O son of Kunti, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, O scion of Bharata, and one must learn to tolerate them without being disturbed.'</p>
          <h2>- Lord Sri Krishna - Bhagavad-gita 2.14</h2>
        </div>
      </div>
      <button className='shloka-button'>Read Another Shlok</button>
    </>
  )
}

export default Shlokas;
