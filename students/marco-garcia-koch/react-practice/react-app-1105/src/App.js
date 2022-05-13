import logo from './logo.svg';
import './App.css';
import Text from './components/Text';
import { useState } from 'react';
import Button from './components/Button';
import InputText from './components/InputText';
import AvatarList from './components/AvatarList';

function App() {

  const [greeting, updateGreeting] = useState('Hello World');

  const contacts = [
    {
      img: `https://randomuser.me/api/portraits/men/1.jpg`,
      name: "pepe"
    },
    {
      img: `https://randomuser.me/api/portraits/women/2.jpg`,
      name: "carla"
    },
    {
      img: `https://randomuser.me/api/portraits/men/3.jpg`,
      name: "andres"
    },
    {
      img: `https://randomuser.me/api/portraits/women/4.jpg`,
      name: "andrea"
    },
    {
      img: `https://randomuser.me/api/portraits/men/5.jpg`,
      name: "victor"
    },
    {
      img: `https://randomuser.me/api/portraits/men/6.jpg`,
      name: "jose"
    },
  ];

  return (
    <div className="App">
      <Text text={greeting}></Text>
      <Button></Button>
      <InputText></InputText>
      <AvatarList avatarList={contacts}></AvatarList>
    </div>
  );
}

export default App;
