import '../button/Button.scss';
import './Footer.scss'
import Button from '../../components/button/Button';
import ButtonComponent from '../../components/button-component/ButtonComponent';
import React from 'react';
import { TableFooter } from '@material-ui/core/TableFooter';

function Footer({classFooter, nameBtnWhite, nameBtnBlue, buttonNext, buttonbackPage, showButtonWhite, showButtonBlue}){
    return (
      <footer className={classFooter}>
        <div className="container-footer1">
        <p>Powered by</p>
         <Button classBtn ="buttonLogo" nameBtn="Key Peoples Insights"/>
        </div>
        <div className="container-footer2">
          <div style={showButtonWhite}>
            <ButtonComponent nameBtn={nameBtnWhite} variant="outlined" buttonClick={buttonbackPage}/>
          </div>
          <div style={showButtonBlue}>
            <ButtonComponent nameBtn={nameBtnBlue} variant="contained" buttonClick={buttonNext}/>
          </div>          
        </div>
      </footer>
    );
  };
  export default Footer;