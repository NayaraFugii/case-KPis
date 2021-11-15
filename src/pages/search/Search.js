import './Search.scss';
import '../../components/button/Button.scss';
import '../../components/navbar/NavBar.scss';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/Navbar';
import Form from '../../components/form/Form';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    title:'',
    text:''
  })

  React.useEffect(() => {
    contentForm();
  }, [location])

  const contentForm=()=>{
    if(location.pathname === '/search/part1'){
      setForm({
        title:'NPS',
        text:'Aqui vai uma explicação sobre a Seção 1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      })
    }else if(location.pathname === '/search/part2'){
      setForm({
        title:'Onboarding',
        text:'Aqui vai uma explicação sobre a Seção 1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      })
    }
  } 

  const nextPage=()=>{
    
    location.pathname === '/search/part1'?  navigate('/search/part2') : navigate('/finish')
  
  }
  
  return (
    <div className="search-container">
        <div className="navBar-search">
          <NavBar classNav="nav-container-percentage-bar"/>
        </div>
        
          <div className="form-container">
            <Form title ={form.title} text={form.text}/>
          </div>      
        
      <div className="footer">
        <Footer nameBtn="Próximo" classFooter="footer-container-static2" buttonClick={nextPage}/>
      </div>

    </div>    
  );
}

export default Search;