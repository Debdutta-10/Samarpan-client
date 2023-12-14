import React from 'react'
import './styles/card2.css'

function Card2(props) {
    return (
        <>
            <div className='card-2'>
                <img className='card2-img' src={props.image} alt="" />
                <div className='card2-text'>
                    <h2 style={{ color: "black" }} className='card-head2 mob-home-head'>{props.heading}</h2>
                    <p className='card-para2'>{props.paragraph}</p>
                    <p className='card-moral2'>Moral: {props.moral}</p>
                </div>
            </div>
        </>
    )
}

export default Card2;
