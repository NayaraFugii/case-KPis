import './Home.scss';
import { useNavigate } from 'react-router-dom';

import Gear from '../images/Subtract.png';
import logo from '../images/image-home.png';
import CompanyLogo from '../images/Company Logo.png';

import Button from '../../components/button/Button';
import ButtonComponent from '../../components/button-component/ButtonComponent';


function Home() {
  const style = {
    display: 'none'
  }; 

  const navigate = useNavigate();

  const routerButton = () =>{
    localStorage.clear();
    navigate('/introduction');    
  };

  return (
    <div className="home-container">
      
      <img className="image" src={logo} alt="imagem de inicio"/>
        <div className="navBar">
          <p><img src={Gear} alt="image de engrenagem"/><img src={CompanyLogo} alt="logo companhia"/></p>
        </div>

          <div className="text-container">
            <h1 className="title">
              Olá! Ajude-nos com nossa pesquisa de engajamento.
            </h1>
              <div>
                <ButtonComponent nameBtn="Aceitar" buttonClick={routerButton} variant="contained"/>
              </div>                  
          </div>        
      <div className="btn-logo">
        <Button nameBtn="Key Peoples Insights"/>
      </div>

    </div>    
  );
}

export default Home;