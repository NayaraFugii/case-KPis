import './FormChoice.scss';

function FormChoise({title, question, answer, value, setValue, id, nameInputActive}){

  const optionsInput = ['Discordo totalmente', 'Discordo', 'Nem concordo nem discordo', 'Concordo', 'Condordo Totalmente'];

    return (
        <div className ="text-formOnboarding-container">
          <div className="text-formOnboarding">
            <h1 className="title-formOnboarding">{title}</h1>
              <p className="text-question">{question}</p>

              <div className="button-order">
                <p>{answer}</p>
                  <div className="inputQuestions">
                    {optionsInput.map((choice, indice)=>(                 
                      <div key={indice} className="area-choice" >  
                        <input type="radio" id={question} name={nameInputActive} value={choice} onChange={({ target }) => setValue({...value, onboarding:
                          {...value.onboarding, [id]: target.value}})}/>                  
                        <label htmlFor={question}>{choice}</label>
                      </div>
                    ))}
                  </div>               
              </div>
          </div>           
        </div>      
    );
};
export default FormChoise;