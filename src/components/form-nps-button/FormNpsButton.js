import './FormNpsButton.scss';
import ButtonComponent from '../button-component/ButtonComponent';

function FormNpsButton({ title, question, answer, coment, showTag, showButtons, id, value, setValue }){
  const buttonNumber = [0,1,2,3,4,5,7,8,9,10];

  return (
    <>
      <div className ="text-form-container">
        <div className="text-form">
          <h1 className="title-question">{title}</h1>
          <p className="text-question">{question}</p>

            <div className="button-order">
              <p>{answer}</p>
              <div className="btnQuestions" style={showButtons}>
                {buttonNumber.map((number, indice)=>(
                  <div className='button-list'>
                    <ButtonComponent key={indice} nameBtn={number} variant="outlined" buttonClick={() => setValue({...value, nps:{...value.nps, question1:{...value.nps.question1, number}}})}/>
                  </div>
                ))}
              </div>               
            </div>
            
            <div className="area-coment" style={showTag}>
              <p>{coment}</p>
              <textarea id={id} placeholder="Digite sua resposta" onChange={({ target }) => setValue({...value, nps:
                {...value.nps, question1:{...value.nps.question1, text: target.value}}})}></textarea>
            </div>
        </div>           
      </div>
    </>
  );
};
export default FormNpsButton;