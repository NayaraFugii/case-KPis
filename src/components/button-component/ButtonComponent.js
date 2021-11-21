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

function ButtonComponent({nameBtn, buttonClick, variant, buttonType,disabled}){   

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant={variant} color="primary" onClick={buttonClick} size="medium" type={buttonType} className="button-tag" disabled={disabled}>
          {nameBtn}
        </Button>
      </ThemeProvider>       
    </>
  );
};
export default ButtonComponent;