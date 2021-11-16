import './Form.scss';
import React from 'react';
import Button from '../button/Button';

function Form({position, title, question, answer, coment, showTag}){

  const buttonNumber = [0,1,2,3,4,5,7,8,9,10];

    return (
      <>
        <form key={position}className ="text-form-container">
          <div className="text-form">
            <h1 className="title-form">{title}</h1>
              <p>{question}</p>

              <div className="button-order">
                <p>{answer}</p>
                {buttonNumber.map((number, indice)=>(
                  <Button key={indice} nameBtn={number} className="buttonWhite"/>
                ))}
              </div>
             
              <div className="area-coment" style={showTag}>
                <p>{coment}</p>
                <textarea placeholder="Digite sua resposta"></textarea>
              </div>

          </div>           
        </form>
      </>
    );
  };
  export default Form;