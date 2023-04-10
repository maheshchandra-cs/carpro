import React from 'react';
import './HeaderMain.css';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h3>
          Your trusted <span className="primary__color">auto repair</span> shop
        </h3>
        <p>
        From routine maintenance to complex repairs, we've got you covered with our full-service car repair and maintenance offerings. Do you want to connect with us?
        </p>
        <Link className="btn button" to={'/admin/addService'}>Book an Appointment</Link>
        
    
        
        
 
      </div>
    </div>
  );
};

export default HeaderMain;
