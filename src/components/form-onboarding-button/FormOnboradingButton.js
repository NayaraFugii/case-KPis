import './FormOnboradingButton.scss';
import React from 'react';
import ButtonComponent from '../button-component/ButtonComponent';

function FormOnboradingButton({ title, question, answer,value, setValue }){
  const buttonNumber = [0,1,2,3,4,5,7,8,9,10];

  return (
    <>
      <div className ="text-form-container">
        <div className="text-form">
          <h1 className="title-question">{title}</h1>
            <p className="text-question">{question}</p>

            <div className="button-order">
              <p>{answer}</p>
              <div className="btnQuestions">
                {buttonNumber.map((number, indice)=>(
                  <div className='button-list'>
                    <ButtonComponent key={indice} nameBtn={number} variant="outlined" buttonClick={() => setValue({...value, onboarding:{...value.onboarding, question1:{...value.onboarding.question1, number}}})}/>
                  </div>
                ))}
              </div>               
            </div>
        </div>           
      </div>
    </>
  );
};
export default FormOnboradingButton;