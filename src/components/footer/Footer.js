import './Footer.scss'
import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../../components/button/Button';
import ButtonComponent from '../../components/button-component/ButtonComponent';

function Footer({nameBtnWhite, nameBtnBlue, buttonNext, buttonbackPage, showButtonWhite, showButtonBlue, btnDisabled}){ 

  return (

    <footer>
        <Box>
          <Container maxWidth="lg">
            <Grid container spacing ={2}>
              <Grid item xs={12} sm={6} >
                <Box >
                  <div className="logo-btn-container">                  
                    <Button classBtn ="buttonLogo" nameBtn="Key Peoples Insights"/>
                  </div>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box> 
                  <div className="container-button">
                    <div style={showButtonWhite}>
                      <ButtonComponent nameBtn={nameBtnWhite} variant="outlined" buttonClick={buttonbackPage} />
                    </div>
                    <div style={showButtonBlue}>
                      <ButtonComponent nameBtn={nameBtnBlue} variant="contained" buttonClick={buttonNext} buttonType="submit" disabled={btnDisabled}/>
                    </div>          
                  </div>
                </Box>
              </Grid>

            </Grid>
          </Container>
        </Box>
    </footer>

  );
};
export default Footer;