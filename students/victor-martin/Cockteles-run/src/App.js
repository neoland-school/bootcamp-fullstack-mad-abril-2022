import "./App.css";
import Home from "./pages/home";
import Info from "./pages/info";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BarNav from "./comunes/Nav";
import Header from "./comunes/header";
// import { Link } from "react-router-dom";


function App() {
  return (
    <div className="wrap">
      {/* <UserProvider> */}
      <BrowserRouter>
       <Header></Header>
          <Routes>
            {/* <Route path='/' element={<Nav></Nav>}></Route> */}
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/info' element={<Info></Info>}></Route>          
          </Routes>
       
      </BrowserRouter>
      {/* </UserProvider> */}

      
    </div>
  );
}

export default App;
