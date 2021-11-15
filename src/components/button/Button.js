import './Button.scss';
import vector from'../../pages/images/Vector.png'

import React from 'react';

function Button({nameBtn, classBtn, buttonClick}){    

    return (
      <>
        <button className={classBtn} onClick={buttonClick}><img src={vector} alt="logo KPis"/>{nameBtn}</button>
      </>
    );
  };
  export default Button;