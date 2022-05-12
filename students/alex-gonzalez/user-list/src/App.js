import './App.css';
import Header from './components/header';
import AvatarList from './components/avatar-list';
import Parent from './components/ejemplo-hijo-padre/parent';

function App() {
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
      <Header></Header>
      <AvatarList userList={contacts}></AvatarList>
      {/* <Parent></Parent> */}
    </>
  );
}

export default App;

/**
 * 
  Vamos a crear una lista de contactos como en la siguiente imagen, 
  para eso nos vamos a crear un componente llamado Avatar que va a recibir por Props un objeto desde un componente AvatarList  
  y deberá pintar los avatares, el color verde nos indicara el online, al darle click sobre la imagen nos deberá cambiar el opacity de la imagen y el color a rojo offline, para esto debemos valernos de los eventos en react y del state.
  - Al darle click de nuevo a un usuario en offline deberá cambiar a  online de nuevo.
  - Modificar el componente  para que tenga un input que cuando se escriba, se filtren los contactos   cuyo nombre contenga lo que el usuario escribió.
  - Ahora haremos comunicación de hijo a padre, al darle click a la imagen para cambiar a offline, deberá aparecernos un mensaje desde nuestro componente padre que nos indique el nombre del usuario y que esta offline, el mensaje debe durar dos segundos y quitarse
 */
