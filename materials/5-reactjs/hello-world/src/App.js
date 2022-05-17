import React, { useState } from 'react';
import './App.css';
// paso 5. importar el componente donde queremos usarlo
import HelloWorld from './components/hello-world';
import Square from './components/square';
import Text from './components/text';
import Greeting from './components/greeting';
import Figure from './components/figure';
import UserCard from './components/user-card';
import UserList from './components/user-list';
import EventsExample from './components/events-example';
import StateExample from './components/state-example';
import DemoFetch from './components/demo-fetch';
import DemoUseEffect from './components/demo-use-effect';
import MultipleStates from './components/multiple-states';
import MultipleFilters from './components/demo-multiple-filters';
import DemoInterval from './components/demo-interval';
import InfinityScrollDemo from './components/demo-infinity-scroll';

import { user, users } from './data/user';

function App() {
  const arr = ['Judith', 'Alberto', 'Marco', 'Laura', 'Jetza', 'Victor', 'Irene', 'Luis', 'Bryan'];
  const [renderInterval, updateRenderInterval] = useState(true);
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
      {/* <DemoUseEffect></DemoUseEffect> */}
      {/* <MultipleStates></MultipleStates> */}
      {/* <MultipleStates status='Alive'></MultipleStates>
      <MultipleStates status='Death'></MultipleStates>
      <MultipleStates status='unknown'></MultipleStates> */}
      {/* <MultipleFilters></MultipleFilters> */}
      {/* { renderInterval ? <DemoInterval></DemoInterval> : ''}
      <button onClick={() => updateRenderInterval(false)}>Desmontar Interval</button> */}
      <InfinityScrollDemo></InfinityScrollDemo>
    </React.Fragment>
  );
}

export default App;
