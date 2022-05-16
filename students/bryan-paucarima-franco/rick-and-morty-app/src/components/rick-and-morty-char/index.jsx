import './styles.css'


function RickAndMortyChar ({character}) {

    return (
        <>
            <div className='container'>
                <img className='img-char' src={character.image} alt=''></img>
                <div className='div-text'>
                    <h3>{character.name}</h3>
                    <div className='status-species'>
                        <div className={`status status-${character.status.toLowerCase()}`}></div>
                                            status-alive status-dead status-uknown
                        <span> {character.status} - {character.species} </span>
                    </div>
                    <p>Last Know location</p>
                    <p>{character.location.name}</p>
                    <p>First seen in:</p>
                    <p>{character.origin.name}</p>
                </div>

            </div>
        </>
    )

}

export default RickAndMortyChar;


// {
//     "id": 2,
//     "name": "Morty Smith",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//       "name": "Earth",
//       "url": "https://rickandmortyapi.com/api/location/1"
//     },
//     "location": {
//       "name": "Earth",
//       "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
//     "episode": [
//       "https://rickandmortyapi.com/api/episode/1",
//       "https://rickandmortyapi.com/api/episode/2",
//       // ...
//     ],
//     "url": "https://rickandmortyapi.com/api/character/2",
//     "created": "2017-11-04T18:50:21.651Z"
//   }