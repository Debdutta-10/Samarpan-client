import React from 'react'
import './styles/card.css'
import { Link } from 'react-router-dom';
function Card(props) {
    return (
        <>
            <div className='card'>
                <img className='card-img' src={props.image} alt="" />
                <h2 style={{ color: "black" }} className='card-head mob-home-head'>{props.heading}</h2>
                <p className='card-para'>{props.paragraph}</p>
                <Link to={props.myPath} className='btn'>
                    <span>
                        {props.pathName}
                    </span>
                </Link>
            </div>
        </>
    )
}

export default Card;
