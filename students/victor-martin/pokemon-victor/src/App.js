
import './App.css';
import PokeList from './components/PokeList';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TodoPage from './pages/todo-page/components';

function App() {
  return (
    <>
    <BrowserRouter> {/* este componente indica que existe un router en mi app */}

      <Routes>
        {/*  componente que nos da la libreria para definir las rutas o paginas */}
        <Route path='/' element={<h1>Hola desde la home</h1>}></Route>
        <Route path='/todo' element={<TodoPage></TodoPage>}></Route>
        <Route path='/other' element={<h1>Hola desde /other</h1>}></Route>
          
      </Routes>
    
    </BrowserRouter>
      <PokeList></PokeList>
    </>
  );
}

export default App;
