import React from 'react';
import './styles/alert.css';

function Alert(props) {
  return (
    <div className={`alert ${props.error ? 'alert-danger' : 'alert-primary'}`} role="alert">
      {props.error ? <p>Please enter title & description</p> : <p>Journal Added Successfully</p>}
    </div>
  );
}

export default Alert;
