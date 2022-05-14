import logo from './logo.svg';
import './App.css';
import Character from './components/Character';

function App() {

  fetch(`https://rickandmortyapi.com/api/character/1,183`)
    .then(r => r.json())
    .then(d => console.log(d))
    
  return (
    <>
    
      <Character></Character>
    </>
  );
}

export default App;
