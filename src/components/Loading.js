import React from 'react'
import loading from './images/loading.gif';
import './styles/loading.css'

function Loading() {
  return (
    <div className='loading'>
      <img src={loading} alt="" srcset="" />
    </div>
  )
}

export default Loading
