import './NavBar.scss';
import CompanyLogo from '../../pages/images/Company Logo.png';
import Gear from '../../pages/images/Subtract.png';
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});

function Navbar({classNav}){
  const [percentage, setpercentage] = React.useState('0')

    return (      
      <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }} color="primary">
          <AppBar position="static">
            <Toolbar>
              <div className={classNav}>
              <p><img src={Gear} alt="image de engrenagem"/><img src={CompanyLogo} alt="logo companhia"/></p>
                <div className="percentage-container">              
                    <div className="percentage-bar">                
                    </div>
                    <span>{percentage}%</span>
                </div> 
              </div>                
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
      </>
    );
  };
  export default Navbar