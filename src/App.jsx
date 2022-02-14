import './App.css';
import  {Navup, Foot, Bod, Bright, Bleft} from './Fer';
import Formulario from './components/formulario';

function App() {
  return (
    <div className="App">
        
        <div className="Navup">
          <Navup />
        </div>
        
        <div className="Bleft">
          <Bleft />
        </div>
        
        <div className="Bod">
          <Bod />
          <Formulario />
        </div>
        
        <div className="Bright">
          <Bright />
        </div>

        <div className="Foot">
          <Foot />
        </div>
        
        {/* <Fer /> */}
      
    </div>
    
  );
}

export default App;

