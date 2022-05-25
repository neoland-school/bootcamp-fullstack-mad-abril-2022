import './App.css';
import Greeting from './components/Greeting';
import Boolean from './components/Boolean';
import UseCard from './components/UseCard';
import UserList from './components/UserList';

//Este método de import es para variables en otros archivos que no son componentes. En este caso el primero objeto de userInfo y el super array de users, los he guardado en un archivo JS en la carpeta data, y de ahí es de donde importo tanto la varibale userInfo con un objeto y la variable users con un array de objetos.
import {userInfo, users} from './data/users'; 

function App() {

  return (
    <div className="App">
      {/* <Greeting name='Marco' age='34'></Greeting>
      <Boolean isCircle={false}></Boolean>
      <UseCard userInfo={userInfo}></UseCard> */}
      <UserList userList={users}></UserList>
    </div>
    
  );
}

export default App;
