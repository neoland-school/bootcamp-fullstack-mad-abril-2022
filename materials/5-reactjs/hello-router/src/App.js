import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoPage from './pages/todo-page';
import Quotes from './pages/quotes';
import Pokemons from './pages/pokemons';
import PokemonDetail from './pages/pokemon-detail';
import DemoContext from './pages/demo-context';
import Counter from './pages/counter';
import NotFound from './pages/not-found';

import Header from './shared-components/header';
import Footer from './shared-components/footer';

import UserProvider from './shared-components/user/user.provider';
import CounterProvider from './shared-components/counter/counter.provider';

function App() {
  return (
    <UserProvider>
      <CounterProvider>
        <BrowserRouter>
          {/* Este componente BrowserRouter indica que existe un router en mi app. 
              Solo se pone una vez y solemos ponerlo en el app.js*/}
              <Header></Header>
              <Routes>
                {/* Este componente Routes, nos permite definir las diferentes páginas o rutas de nuestra app */}
                <Route path='/' element={<h1>Hola Desde la home</h1>}></Route>
                <Route path='/todo' element={<TodoPage></TodoPage>}></Route>
                <Route path='/quotes' element={<Quotes></Quotes>}></Route>
                <Route path='/pokemons' element={<Pokemons></Pokemons>}></Route>
                <Route path='/pokemons/:name' element={<PokemonDetail></PokemonDetail>}></Route>
                <Route path='/context' element={<DemoContext></DemoContext>}></Route>
                <Route path='/counter' element={<Counter></Counter>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
              </Routes>
              <Footer></Footer>
        </BrowserRouter>
      </CounterProvider>
    </UserProvider>
  );
}

export default App;
