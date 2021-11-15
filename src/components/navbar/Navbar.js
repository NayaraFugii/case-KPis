import './NavBar.scss';
import CompanyLogo from '../../pages/images/Company Logo.png';
import Gear from '../../pages/images/Subtract.png';
import React from 'react';

function Navbar({classNav}){
  const [percentage, setpercentage] = React.useState('0')

    return (
      <>
        <nav className={classNav}>
            <p><img src={Gear} alt="image de engrenagem"/><img src={CompanyLogo} alt="logo companhia"/></p>
            <div className="percentage-container">              
                <div className="percentage-bar">                
                </div>
                <span>{percentage}%</span>
            </div>
        </nav>
      </>
    );
  };
  export default Navbar