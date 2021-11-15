import './Home.scss';
import logo from '../images/image-home.png'
import '../../components/button/Button.scss';
import '../../components/navbar/NavBar.scss';
import '../../components/footer/Footer.scss';
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  const routerButton = () =>{
      navigate('/introduction');    
  };

  return (
    <div className="home-container">
      <img className="image" src={logo} alt="imagem de inicio"/>
      <div className="navBar">
          <NavBar classNav="nav-container"/>
        </div>

      <div className="text-container">
        <h1 className="title">
          Olá! Ajude-nos com nossa pesquisa de engajamento.
        </h1>
        <Button classBtn ="buttonBlue" nameBtn="Aceitar" buttonClick={routerButton}/>          
      </div>
        
      <div className="btn-logo">
        <Footer classFooter="footer-container-initial"/>
      </div>

    </div>    
  );
}

export default Home;