import './Form.scss';
import React from 'react';
import ButtonComponent from '../../components/button-component/ButtonComponent';
import FormGroup from '@material-ui/core/FormGroup'

function Form({position, title, question, answer, coment, showTag, showButtons}){

  const buttonNumber = [0,1,2,3,4,5,7,8,9,10];

    return (
      <>
        <div key={position}className ="text-form-container">
          <div className="text-form">
            <h1 className="title-form">{title}</h1>
              <p>{question}</p>

              <div className="button-order">
                <p>{answer}</p>
                <div className="btnQuestions" style={showButtons}>
                {buttonNumber.map((number, indice)=>(
                  <ButtonComponent key={indice} nameBtn={number} variant="outlined"/>
                ))}
                </div>               
              </div>
             
              <div className="area-coment" style={showTag}>
                <p>{coment}</p>
                <textarea placeholder="Digite sua resposta"></textarea>
              </div>
          </div>           
        </div>
      </>
    );
  };
  export default Form;