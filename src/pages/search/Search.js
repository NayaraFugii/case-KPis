import './Search.scss';
import logo from '../images/last-image.png'
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/Navbar';
import Section from '../../components/section/Section';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from '../../components/form /Form';
import Introduction from '../../components/Introduction/Introduction';

function Search() {
  const value = Math.round(100/3);
  const location = useLocation();
  const navigate = useNavigate();
  const valuePorcentage = sessionStorage.getItem('percentage');
  const [percentage, setPercentage] = React.useState(0)
  const [styleButtonWhite, setStyleButtonWhite] = React.useState();
  const [styleButtonBlue, setStyleButtonBlue] = React.useState();
  const [section, setSection] = React.useState({
    title:'',
    text:'',
  })

  const form = {
    title:'Questão',
    answer:'Comentário sobre a questão.',
    coment:'Comente porque você deu essa resposta'
  };

  const nps ={
    title:'NPS',    
    text:'Aqui vai uma explicação sobre a Seção 1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: '/search/part1'
  }

  const onboarding = {
    title:'Onboarding',
    text:'Aqui vai uma explicação sobre a Seção 1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: '/search/part2'  
  }

  const questionsNumberOnbording=[{
    title: form.title,
    question:'Em uma escala de 0 a 10, como você avaliaria sua experiência e processo de onboarding (entrada) na empresa?',
    answer: form.answer,
    coment: form.coment   
  }];

  const questionsNumberNPS=[{
    title: form.title,
    question:'Em uma escala de 0 a 10, qual a probabilidade de você recomendar a PRB como um bom local de trabalho?',
    answer: form.answer   
  }];

  const urlIntroduction = '/introduction';
  const urlFinish = '/finish'; 
  
  
  const style={
    display: 'none'
  }; 

  React.useEffect(() => {
    contentForm();
  }, [location])

  const contentForm=()=>{
    if(location.pathname === nps.url ){
      setSection({
        title: nps.title,
        text: nps.text,
      });
    }else if(location.pathname === onboarding.url){
      setSection({
        title: onboarding.title,
        text: onboarding.text,
      })
    }
  } 

  const nextPage=()=>{    
    if(location.pathname === urlIntroduction){
      navigate(nps.url)
      setPercentage(percentage + value)    
      sessionStorage.setItem('percentage', percentage + value);
    }else if(location.pathname === nps.url){
      navigate(onboarding.url)
      setPercentage(percentage + value)
      sessionStorage.setItem('percentage', percentage + value);
    }else if(location.pathname === onboarding.url){
      navigate(urlFinish)
      setPercentage(percentage + (value + 1) )
      sessionStorage.setItem('percentage', percentage + value);
    }
  }
  console.log(typeof tvaluePorcentage) 

  const backPage=()=>{
    window.history.back();
  } 

  const teste={
    width: percentage.toString() + '%'
  }
      
  return (
    <div className="search-container">

      <div className="navBar-search">
        <NavBar classNav="nav-container-percentage-bar" percentage={percentage} size={teste}/>
      </div>

           {location.pathname === urlIntroduction &&  
            <div className = "container-content">
              <div className="section-container">
                <Introduction/>
              </div>
            </div>}
           
           {(location.pathname === nps.url|| location.pathname === onboarding.url) &&
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

           {location.pathname === urlFinish &&
           <div className="content-container">
           < img className="last-image" src={logo} alt="imagem de agradecimento"/>   
             
             <h1 className="tittle-end">
               Pronto! Muito obrigado por sua colaboração.
             </h1>
           </div>
           } 

          <div className="footer">
              <Footer nameBtnBlue="Próximo" nameBtnWhite="Anterior" classFooter="footer-container-static2" buttonNext={nextPage}
              buttonbackPage={backPage} showButtonBlue={styleButtonBlue} showButtonWhite={styleButtonWhite}/>
          </div>
            

    </div>    
  );
}

export default Search;