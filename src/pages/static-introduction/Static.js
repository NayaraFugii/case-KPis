import './Static.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../components/button/Button.scss';
import '../../components/navbar/NavBar.scss';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/Navbar';
import Introduction from '../../components/Introduction/Introduction';

function Static() {

  const location = useLocation();
  const navigate = useNavigate();

  const nextPage=()=>{
    
    location.pathname === '/introduction'?  navigate('/search/part1') : navigate('/introduction')
  
  }

  return (
    <div className="static-container">
        <div className="navBar-percentage">
          <NavBar classNav="nav-container-percentage-bar"/>
        </div>
        
          <div className="introduction-container">
            <Introduction/>
          </div>      
        
      <div className="footer-container">
        <Footer nameBtn="Entendi" classFooter="footer-container-static1" buttonClick={nextPage}/>
      </div>

    </div>    
  );
}

export default Static;