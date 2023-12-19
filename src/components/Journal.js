import React, { useState, useEffect } from 'react';
import './styles/journal.css';
import axios from 'axios';
import JournalCard from './JournalCard';
import ganesh from './images/ganesh.jpg'
import img from './images/profile.jpg'

function Journal({ toggleAlert,checkError}) {
  const [name, setName] = useState("Anonymous");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [users, setUsers] = useState([]);

  const displayAlert = () => {
    toggleAlert();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      heading: heading,
      description: description,
    };

    axios.post("https://samarpan-backend.onrender.com/userRoute/adduser", data)
      .then((res) => {
        if (res.status === 200) {
          checkError(false);
          displayAlert();
          fetchData();
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        checkError(true);
        displayAlert();
      });
  };

  const fetchData = () => {
    axios.get("https://samarpan-backend.onrender.com/userRoute/getusers")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [active, setActive] = useState(true);
  const [display, setDisplay] = useState("none");

  const displayOver = () => {
    if (active) {
      setDisplay("block");
      document.body.style.background = "rgba(0, 0, 0, 0.8)";
    } else {
      setDisplay("none");
      document.body.style.background = "none";
    }
    setActive(!active);
  };

  return (
    <>
      <div className="about-container">
        <div className='about-img'>
          <img src={ganesh} alt="" />
        </div>
        <div className="about-text">
          <h1>Gratitude Journal: </h1>
          <p>Welcome to the Gratitude Journal, a sanctuary where you're invited to unfold the chapters of your day and pen down moments that evoke gratitude. Here, within the pages of this public diary, we encourage you to share the goodness that graced your life today, the silver linings you discovered, and the warmth that illuminated your path. In the hustle of daily chaos, find a moment of serenity by reflecting on the positive aspects, both big and small, that made your day special. This isn't just a journal; it's a shared space where individuals from different walks of life come together to celebrate the beauty inherent in their experiences. Join us in cultivating a mindset of gratitude, for in acknowledging and appreciating the positives, we take transformative steps towards a more fulfilling and joyful life. Your entries not only illuminate your own path but also inspire others to cherish the goodness that surrounds them. Let this Gratitude Journal be a collective journey, a mosaic of shared joys, a testament to the uplifting power of gratitude. Dive into the depths of your experiences, and with each written word, witness the blossoming of a richer and more meaningful existence.</p>
          <button onClick={displayOver} className='journal-button1'>Try it out! <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </button>
        </div>
      </div>


      <div className="modal addjournal" style={{ display: display, zIndex: 3, background: "blur" }}>
        <form onSubmit={handleSubmit}>
          <input onChange={(event) => setName(event.target.value)} type="text" placeholder='Enter name: ' />
          <input onChange={(event) => setHeading(event.target.value)} type="heading" placeholder='Enter heading: ' />
          <textarea onChange={(event) => setDescription(event.target.value)} placeholder='Describe the event' cols="30" rows="5"></textarea>
          <div className="journal-but-container">
            <button type='submit' onClick={displayOver}>Add Journal</button>
          </div>
        </form>
        <button onClick={displayOver} className='close-but'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </button>
      </div>

      <div className="user-list">
        {users.map((user) => (
          <div key={user._id}>
            <JournalCard img={img} name={user.name || "Anonymous"} heading={user.heading} description={user.description} date={user.date}></JournalCard>
          </div>
        ))}
      </div>
    </>



  );
}

export default Journal;
