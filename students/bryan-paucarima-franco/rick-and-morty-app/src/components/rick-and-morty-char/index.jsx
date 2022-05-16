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


