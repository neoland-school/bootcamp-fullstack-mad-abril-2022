import logo from './logo.svg';
import './App.css';
import PrintH1 from './components/Helloworld'
import PrintText from './components/Texto';
import PrintDiv from './components/Cuadro';
import PrintCard from './components/Card';

function App() {
  return (
    <div>
        <PrintH1></PrintH1>
        <PrintDiv></PrintDiv>
        <PrintCard></PrintCard>  
    </div>
  );
}

export default App;
