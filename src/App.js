import './App.scss';
import Router from './Router';
import background from './images/background.png';

function App() {  
  return (    
    <div className="app-container">       
      <img className="background" src={background} alt="imagem de fundo"/>
   <Router/>
    </div>     
  );
}

export default App;
