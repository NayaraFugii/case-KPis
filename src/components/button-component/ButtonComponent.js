import './ButtonComponent.scss';
import React from 'react';
import Button from '@material-ui/core/Button';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E455A',
    },
  },
});

function ButtonComponent({nameBtn, buttonClick, variant}){   

  console.log(theme)

    return (
      <>
      <ThemeProvider theme={theme}>
        <Button variant={variant} color="primary" onClick={buttonClick} size="large">
          {nameBtn}
        </Button>
      </ThemeProvider>       
      </>
    );
  };
  export default ButtonComponent;