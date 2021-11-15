import './Introduction.scss';
import React from 'react';

function Introduction(){
    return (
      <>
        <section className ="text-introducion-container">
          <div className="text-introduction">
            <h1 className="title-introduction">Pesquisa evento BLEND</h1>
              <p>Essa pesquisa tem como objetivo entender sua percepção em relação aos valores da PRB. Queremos entender se na sua visão os valores são vividos internamente
                por você e pelo seu time e de que forma que podemos fortalecer ainda mais a cultura em nossa empresa. Todas suas respostas serão tratadas de forma confidencial 
                e serão mostradas apenas de forma agrupadas.</p>
              <p>Contamos com sua participação!</p>
              <p>O prazo para preenchimento da pesquisa é até dia Dec 31, 2021</p>
          </div>           
        </section>
      </>
    );
  };
  export default Introduction;