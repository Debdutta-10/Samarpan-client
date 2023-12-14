import React from 'react'
import Card2 from './Card2.js'
import bg1 from './images/bg5.png';
import myStoryData from './Story_data.js';
import './styles/story.css'

function Stories() {
  console.log("myStoryData:", myStoryData);
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "10px", marginTop: "10px", textDecoration: "underline" }} className='mob-home-head'>Buddhist Stories to enhance productivity</h1>
      <div className="mob-stories">
        {myStoryData.map((story, index) => (
          <Card2 key={index} image={story.image} heading={story.heading} paragraph={story.story} moral={story.moral}></Card2>
        ))}
      </div>
    </>
  )
}

export default Stories;
