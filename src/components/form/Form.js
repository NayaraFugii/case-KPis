import './Form.scss';
import React from 'react';

function Section({title, text}){
    return (
      <>
        <section className ="text-form-container">
          <div className="text-form">
            <h1 className="title-form">{title}</h1>
              <p>{text}</p>              
          </div>           
        </section>
      </>
    );
  };
  export default Section;