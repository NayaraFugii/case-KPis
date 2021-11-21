import './FormNpsText.scss';

function FormNpsText({ title, question, answer, coment, showTag,id, value, setValue }){

  return (
    <>
      <div className ="text-form-container">
        <div className="text-form">
          <h1 className="title-question">{title}</h1>
          <p className="text-question">{question}</p>

            <div className="button-order">
              <p>{answer}</p>              
            </div>
            
            <div className="area-coment" style={showTag}>
              <p>{coment}</p>
              <textarea id={id} placeholder="Digite sua resposta" onChange={({ target }) => setValue({...value, nps: {...value.nps, question2:{...value.nps.question2, text: target.value}}})}></textarea>
            </div>
        </div>           
      </div>
    </>
  );
};
export default FormNpsText;