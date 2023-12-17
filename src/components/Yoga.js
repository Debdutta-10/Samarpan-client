import React from 'react'
import './styles/yoga.css'
import img1 from './yoga-story/img1.gif'
import img2 from './yoga-story/img2.gif'
import img3 from './yoga-story/img3.gif'
import img4 from './yoga-story/img4.gif'
import img5 from './yoga-story/img5.gif'
import img6 from './yoga-story/img6.gif'
import img7 from './yoga-story/img7.gif'
import img8 from './yoga-story/img8.gif'
import img9 from './yoga-story/img9.gif'

function Yoga() {
  return (
    <>
      <div className="yoga-text-images-container" style={{"background":"linear-gradient(60deg, #E23D28, #FFAA33)"}}>
        <div className="yoga-text">
          <h1>Yogas to boost your Productivity</h1>
          <p>Yoga is a holistic practice that originated in ancient India, encompassing physical, mental, and spiritual dimensions. Combining breath control, meditation, and physical postures, yoga promotes balance, flexibility, and inner harmony. It goes beyond a mere exercise routine, fostering a connection between mind and body. Regular yoga practice enhances strength, reduces stress, and improves overall well-being. With diverse styles such as Hatha, Vinyasa, and Kundalini, yoga caters to various preferences and skill levels. Emphasizing mindfulness and self-awareness, yoga is not just a physical discipline but a transformative journey towards inner peace and self-discovery, making it a widely embraced and timeless practice globally.</p>
        </div>
        <div className="yoga-images">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
        </div>
      </div>
    </>
  )
}

export default Yoga;
