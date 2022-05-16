import PrintCard from './components/Avatar';
import './App.css';
import PrintListCards from './components/AvatarList';
import Parents from './components/example-hijo-padre/parent';

function App() {

  const contact = 
    {
      img: `https://randomuser.me/api/portraits/men/1.jpg`,
      name: "pepe"
    }
  

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
    <>
    {/* <PrintCard contact ={contact}></PrintCard>  */}
     {/* <PrintListCards listContacts = {contacts}></PrintListCards> */}
    <Parents></Parents>
    </>
  );
}

export default App;
