import './App.css';
import Header from './compartidos/header'
import Home from './pages/home'

// import {BrowserRouter, Route, Routes} from 'react-router-dom'



function App() {

  
  
  return (
    <>
     {/* <BrowserRouter> */}
     <Header></Header>
     {/* <Routes> */}
       <Home></Home>
     {/* </Routes> */}
     {/* </BrowserRouter> */}
    </>
  );
}

export default App;
