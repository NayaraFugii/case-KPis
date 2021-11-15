import '../button/Button.scss';
import './Footer.scss'
import Button from '../../components/button/Button';
import React from 'react';

function Footer({classFooter, nameBtn, buttonClick}){

    return (
      <footer className={classFooter}>
        <div className="container-footer1">
        <p>Powered by</p>
         <Button classBtn ="buttonLogo" nameBtn="Key Peoples Insights"/>
        </div>
        <div className="container-footer2">
          <Button classBtn ="buttonWhite" nameBtn="Anterior"/>
          <Button classBtn ="buttonBlue" nameBtn={nameBtn} buttonClick={buttonClick}/>
        </div>
      </footer>
    );
  };
  export default Footer;