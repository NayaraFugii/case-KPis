import './NavBar.scss';
import CompanyLogo from '../../pages/images/Company Logo.png';
import Gear from '../../pages/images/Subtract.png';
import React from 'react';

function Navbar(){

    return (
      <>
        <nav className="nav-container">
            <p><img src={Gear} alt="image de engrenagem"/><img src={CompanyLogo} alt="logo companhia"/></p>
        </nav>
      </>
    );
  };
  export default Navbar