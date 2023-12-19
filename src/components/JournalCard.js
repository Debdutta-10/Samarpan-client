import React from 'react'
import './styles/journal.css';

function JournalCard(props) {
  const formatDate = (myDate) => {
    const dateString = myDate;
    const dateObject = new Date(dateString);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);

    return formattedDate;
  }
  return (
    <>
      <div className='journal-card'>
        <img className='card-img' src={props.img} alt="" />
        <div className="journal-text">
          <h3 >{props.name}</h3>
          <h2 style={{ color: "black" }}>Title: {props.heading}</h2>
          <h3>Grateful For:</h3>
          <p>{props.description}</p>
          <h3>Posted on: {formatDate(props.date)}</h3>
        </div>
      </div>
    </>
  )
}

export default JournalCard;
