import './FormChoice.scss';
import React from 'react';
import ButtonComponent from '../button-component/ButtonComponent';
import FormGroup from '@material-ui/core/FormGroup'

function FormChoise({position, title, question, answer, coment, showTag}){
  const optionsInput = ['Discordo totalmente', 'Discordo', 'Nem concordo nem discordo', 'Concordo', 'Condordo Totalmente'];

    return (
      <>
        <div key={position}className ="text-form-container">
          <div className="text-form">
            <h1 className="title-form">{title}</h1>
              <p>{question}</p>

              <div className="button-order">
                <p>{answer}</p>
                <div className="inputQuestions">
                {optionsInput.map((choice, indice)=>(                 
                  <div key={indice} className="area-choice" >
                    <input type="radio" id='name'/>
                    <label for="name">{choice}</label>
                  </div>
                ))}
                </div>               
              </div>
          </div>           
        </div>
      </>
    );
  };
  export default FormChoise;