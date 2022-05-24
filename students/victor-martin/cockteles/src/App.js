import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Info from './pages/info';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/info' element={<Info></Info>}></Route> 
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
