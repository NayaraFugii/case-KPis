import '../button/Button.scss';
import './Footer.scss'
import Button from '../../components/button/Button';
import React from 'react';

function Footer(){

    return (
      <div className="footer-container">
         <p>Powered by</p>
         <Button classBtn ="buttonWhite" nameBtn="Key Peoples Insights"/>
      </div>
    );
  };
  export default Footer;