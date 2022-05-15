import React from 'react';
import './App.css';
// paso 5. importar el componente donde queremos usarlo
// import HelloWorld from './components/hello-world';
// import Square from './components/square';
import Text from './components/text';
// import Greeting from './components/greeting';
// import Figure from './components/figure';
// import UserCard from './components/user-card';
// import UserList from './components/user-list';
// import EventsExample from './components/events-example';
// import StateExample from './components/state-example';
// import DemoFetch from './components/demo-fetch';

// import { user, users } from './data/user';

function App() {
  // const arr = ['Judith', 'Alberto', 'Marco', 'Laura', 'Jetza', 'Victor', 'Irene', 'Luis', 'Bryan'];
  
  return (
    <React.Fragment>
      {/* <HelloWorld></HelloWorld>
      <Square></Square>
      <Text></Text> */}
      {/* <Greeting name="Alex" nationality="Español"></Greeting>
      <Greeting name="Bootcamp"></Greeting>
      <Greeting></Greeting>
      { arr.map((n,i) => <Greeting key={i} name={n}></Greeting>) } */}
      {/* <Figure isCircle={false}></Figure>
      <Figure isCircle={true}></Figure> */}
      {/* <UserCard user={user}></UserCard> */}
      {/* <UserList users={users.pepito}></UserList> */}
      {/* <EventsExample></EventsExample> */}
      {/* <StateExample></StateExample> */}
      {/* <DemoFetch></DemoFetch> */}
    </React.Fragment>
  );
}

export default App;
