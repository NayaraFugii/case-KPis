import './Button.scss';
import vector from'../../pages/images/Vector.png'

import React from 'react';



function Button({nameBtn, buttonClick, showButton}){    

    return (
      <>
        <p>Powered by</p>
        <a href='https://www.kpis.tech/' className='buttonLogo' onClick={buttonClick} style={showButton}><img src={vector} alt="logo KPis"/>{nameBtn}</a>
      </>
    );
  };
  export default Button;