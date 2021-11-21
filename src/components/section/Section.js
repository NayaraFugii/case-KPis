import './Section.scss';
import React from 'react';

function Section({title, text}){
  return(
    <>
      <section className ="text-section-container">
        <div className="text-section">
          <h1 className="title-section">{title}</h1>
          <p>{text}</p>              
        </div>           
      </section>
    </>
  );
};
export default Section;