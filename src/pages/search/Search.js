import './Search.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../images/last-image.png'
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/Navbar';
import Section from '../../components/section/Section';

import FormNpsButton from '../../components/form-nps-button/FormNpsButton';
import FormNpsText from '../../components/form-nps-textarea/FormNpsText';
import Introduction from '../../components/Introduction/Introduction';
import FormChoise from '../../components/form-onboarding-choice/FormChoice';
import FormOnboradingButton from '../../components/form-onboarding-button/FormOnboradingButton';



function Search() {
  const urlIntroduction = '/introduction';
  const urlFinish = '/finish'; 
  const value = Math.round(100/3);
  const location = useLocation();
  const navigate = useNavigate();
  const valuePorcentage = localStorage.getItem('percentage');  
  const [percentage, setPercentage] = useState(0)
  const [styleButtonWhite, setStyleButtonWhite] = useState();
  const [styleButtonBlue, setStyleButtonBlue] = useState();
  const [section, setSection] = useState({
    title:'',
    text:'',
  })
  const [btnDisabled, setBtnDisabled] = useState(false)

  const [isFormNPSValid, setIsFormNPSValid] = useState({
    nps: {
      question1:{
        number: 0,
        text: ''
      },
      question2:{
        text: ''
      }
    },

    
  })

  const [isFormOnboardingValid, setIsFormOnboardingValid] = useState({
    onboarding:{

      question1:{
        number:''
      },
      question2:{
        text:''
      },
      question3:{
        text:''
      },
      question4:{
        text:''
      }
    }    
  })
  const style={
    display: 'none'
  };  

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
  };
  
  const widthBar={
    width: percentage.toString() + '%'
  }

  useEffect(() => {
    contentForm();
  }, [location])

  useEffect(() => {
    disabledBtn()
  }, [isFormNPSValid, isFormOnboardingValid])

 

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
  }; 

  const backPage=()=>{
    window.history.back();
  }; 

  const nextPage=()=>{    
    if(location.pathname === urlIntroduction){
      setBtnDisabled(true)      
      const newPercentage = percentage + value;
      navigate(nps.url)
      setPercentage(newPercentage)    
      localStorage.setItem('percentage', newPercentage);
    }else if(location.pathname === nps.url){
      setBtnDisabled(true)
      const newPercentage = percentage + value;
      navigate(onboarding.url)
      setPercentage(newPercentage)
      localStorage.setItem('percentage', newPercentage);
    }else if(location.pathname === onboarding.url){
      const newPercentage = 100;
      navigate(urlFinish)
      setPercentage(newPercentage)
      localStorage.setItem('percentage', newPercentage);
      setStyleButtonWhite(style)
      setStyleButtonBlue(style)
    }
  };

  const disabledBtn=()=>{
    if(location.pathname === nps.url && isFormNPSValid.nps.question2.text !== '' && isFormNPSValid.nps.question1.number !==''
     && isFormNPSValid.nps.question1.text !== ''){
      setBtnDisabled(false)
    }else if(location.pathname === onboarding.url && isFormOnboardingValid.onboarding.question2.text !== ''
     && isFormOnboardingValid.onboarding.question3.text !=='' && isFormOnboardingValid.onboarding.question4.text !== ''){
     setBtnDisabled(false)
    }  
  };
     
  return (
    <div className="search-container">
      <div className="navBar-search">
        <NavBar classNav="nav-container-percentage-bar" percentage={percentage} size={widthBar}/>
      </div>

        {(location.pathname === nps.url|| location.pathname === onboarding.url ||location.pathname === urlIntroduction)&&
          <form className="container-scroll">

            {location.pathname === urlIntroduction &&              
              <div className="section-container">
                <Introduction/>
              </div>
            }

            {(location.pathname === nps.url|| location.pathname === onboarding.url) &&
              <div className="section-container">            
                <Section title ={section.title} text={section.text}/>                                   
              </div>
            }

              <div className="form-container">

                {location.pathname === nps.url &&                  
                  <div className="containerForm">                    
                    <FormNpsButton
                      title='Questão 1'
                      question='Em uma escala de 0 a 10, qual a probabilidade de você recomendar a PRB como um bom local de trabalho?'
                      coment={form.coment}
                      value={isFormNPSValid}
                      setValue={setIsFormNPSValid}  
                    />                    
                  </div>                                               
                }

                {location.pathname === nps.url &&
                  <div className="containerForm">                    
                    <FormNpsText 
                      title='Questão 2'                    
                      question='Em uma escala de 0 a 10, qual a probabilidade de você recomendar a PRB como um bom local de trabalho?'
                      value={isFormNPSValid}
                      setValue={setIsFormNPSValid}                                         
                      />                    
                  </div>                               
                }

                {location.pathname === onboarding.url &&
                  <div className="containerForm">                    
                    <FormOnboradingButton 
                      title='Questão 1'
                      question='Em uma escala de 0 a 10, como você avaliaria sua experiência e processo de onboarding (entrada) na empresa?'
                      answer={form.coment}
                      value={isFormOnboardingValid}
                      setValue={setIsFormOnboardingValid}                   
                      />                    
                  </div>               
                }

                {location.pathname === onboarding.url &&
                  <div className="containerForm">
                    <FormChoise
                    title='Questão 2'
                    question='Eu me sinto bem recebido(a) na empresa.' 
                    answer={form.answer} 
                    id='question2'
                    value={isFormOnboardingValid}
                    setValue={setIsFormOnboardingValid}
                    nameInputActive='question2'
                    />
                  </div>              
                }

                {location.pathname === onboarding.url &&
                  <div className="containerForm">
                      <FormChoise
                      title='Questão 3'
                      question='Eu me sinto orgulhoso(a) de começar a trabalhar na empresa.' 
                      id='question3'
                      answer={form.answer} 
                      value={isFormOnboardingValid}
                      setValue={setIsFormOnboardingValid}
                      nameInputActive='question3'
                      />
                  </div>              
                }

                {location.pathname === onboarding.url &&
                  <div className="containerForm">
                      <FormChoise
                      title='Questão 4'
                      question='Eu me sinto orgulhoso(a) de começar a trabalhar na empresa.' 
                      id='question4'
                      answer={form.answer} 
                      value={isFormOnboardingValid}
                      setValue={setIsFormOnboardingValid}
                      nameInputActive='question4'
                      />
                  </div>              
                }        

              </div>              
          </form>
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
            buttonbackPage={backPage} showButtonBlue={styleButtonBlue} showButtonWhite={styleButtonWhite} btnDisabled={btnDisabled}/>
          </div>
    </div>    
  );
}

export default Search;