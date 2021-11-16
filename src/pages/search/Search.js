import './Search.scss';
import '../../components/button/Button.scss';
import '../../components/navbar/NavBar.scss';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/Navbar';
import Section from '../../components/section/Section';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from '../../components/form /Form';
import Introduction from '../../components/Introduction/Introduction';

function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  const [section, setSection] = React.useState({
    title:'',
    text:'',
  })

  const style = {
    display: 'none'
  };

  const form = {
    title:'Questão',
    answer:'Comentário sobre a questão.',
    coment:'Comente porque você deu essa resposta'
  };

  const questionsNumberOnbording=[{
      title: form.title,
      question:'Em uma escala de 0 a 10, como você avaliaria sua experiência e processo de onboarding (entrada) na empresa?',
      answer: form.answer,
      coment: form.coment   
  }]

  const questionsNumberNPS=[{
    title: form.title,
    question:'Em uma escala de 0 a 10, qual a probabilidade de você recomendar a PRB como um bom local de trabalho?',
    answer: form.answer   
  }]    
  

  React.useEffect(() => {
    contentForm();
  }, [location])

  const contentForm=()=>{
    if(location.pathname === '/search/part1'){
      setSection({
        title:'NPS',
        text:'Aqui vai uma explicação sobre a Seção 1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      })
    }else if(location.pathname === '/search/part2'){
      setSection({
        title:'Onboarding',
        text:'Aqui vai uma explicação sobre a Seção 1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      })
    }
  } 

  const nextPage=()=>{
    if(location.pathname === '/introduction'){
      navigate('/search/part1')
    }else if(location.pathname === '/search/part1'){
      navigate('/search/part2')
    }else if(location.pathname === '/search/part2'){
      navigate('/finish')  
    }
  }



 
      
  return (
    <div className="search-container">

      <div className="navBar-search">
        <NavBar classNav="nav-container-percentage-bar"/>
      </div>

           {location.pathname === '/introduction' &&
            <div className = "container-content">
              <div className="section-container">
                <Introduction/>
              </div>
            </div>}
           
           {(location.pathname === '/search/part1'|| location.pathname === '/search/part2') &&
           <div className = "container-content">
              <div className="section-container">            
                <Section title ={section.title} text={section.text}/>                                   
              </div>

              <div className="form-container">
                {questionsNumberOnbording.map(({title, question, answer}, indice)=>(
                  <Form key={indice} title={title} question={question} answer={answer} showTag={style}/>
                ))} 
              </div>

           </div>
           }                   
        
      <div className="footer">
        <Footer nameBtn="Próximo" classFooter="footer-container-static2" buttonClick={nextPage}/>
      </div>

    </div>    
  );
}

export default Search;