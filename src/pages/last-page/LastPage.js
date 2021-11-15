import './LastPage.scss';
import logo from '../images/last-image.png'
import '../../components/button/Button.scss';
import '../../components/navbar/NavBar.scss';
import '../../components/footer/Footer.scss';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/Navbar';

function LastPage() {


  return (
    <div className="last-page-container">
      <div className="navBar-complete">
        <NavBar classNav="nav-container-percentage-bar"/>
      </div>
        <div className="content-container">
        < img className="last-image" src={logo} alt="imagem de agradecimento"/>   
          
          <h1 className="title">
            Pronto! Muito obrigado por sua colaboração.
          </h1>
        </div>        
    
      <div className="footer">
        <Footer nameBtn="Próximo" classFooter="footer-container-static3"/>
      </div>

    </div>     
  );
}

export default LastPage;