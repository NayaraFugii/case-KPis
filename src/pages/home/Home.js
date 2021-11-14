import './Home.scss';
import logo from '../images/image-home.png'
import '../../components/button/Button.scss';
import Button from '../../components/button/Button';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/Navbar';

function Home() {
  return (
    <div className="home-container">
      <img className="image" src={logo} alt="imagem de inicio"/>
      <div className="navBar">
          <NavBar/>
        </div>

      <div className="text-container">
        <h1>
          Olá! Ajude-nos com nossa pesquisa de engajamento.
        </h1>
        <Button classBtn ="buttonBlue" nameBtn="Aceitar"/>          
      </div>
        
      <div className="btn-logo">
        <Footer/>
      </div>

    </div>    
  );
}

export default Home;