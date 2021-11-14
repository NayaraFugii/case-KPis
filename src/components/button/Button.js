import './Button.scss';
import vector from'../../pages/images/Vector.png'
import React from 'react';

function Button({nameBtn, classBtn}){

    return (
      <>
        <button className={classBtn}><img src={vector} alt="logo KPis"/>{nameBtn}</button>
      </>
    );
  };
  export default Button;