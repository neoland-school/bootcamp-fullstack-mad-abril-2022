import './styles.css'
import RickAndMortyChar from '../rick-and-morty-char';
import {useEffect,useState} from 'react'


function RickAndMortyList (){
    const [rickAndMortyListOriginal, setRickAndMortyListOriginal] = useState ([])
    const [rickAndMortyFiltered, setRickAndMortyFiltered] = useState([])


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(d => {
                        setRickAndMortyListOriginal(d.results)
                        setRickAndMortyFiltered(d.results)
                    })
    }, [])

    const filterList = e => {
        const val = e.target.value.toLowerCase()
        if (val) {
            const arrFiltered = rickAndMortyListOriginal.filter(c => c.name.toLowerCase().includes(val))
            setRickAndMortyFiltered(arrFiltered)
        } else {
            setRickAndMortyFiltered(rickAndMortyListOriginal)
        }
    }
    
    const filterAliveChar = () => {
        const aliveCharFiltered = rickAndMortyListOriginal.filter(c => c.status.toLowerCase() === 'alive');
        setRickAndMortyFiltered(aliveCharFiltered)
    }

    const filterDeadChar = () => {
        const deadCharFiltered = rickAndMortyListOriginal.filter(c => c.status.toLowerCase() === 'dead');
        setRickAndMortyFiltered(deadCharFiltered)
    }

    const showAllChar = () => {
        const allCharacters = rickAndMortyListOriginal
        setRickAndMortyFiltered(allCharacters)

    }
    
    return (
        
            <>  
                <input onInput={filterList} type='text' placeholder='Introduce el nombre'></input>
                <button onClick={filterAliveChar}>Filter Alive Characters</button>
                <button onClick={filterDeadChar}>Filter Dead Characters</button>
                <button onClick={showAllChar}>Show All Characters</button>
                

                <section className='list-chars'>
                    {rickAndMortyFiltered.map(e => <RickAndMortyChar key={e.id}  character={e} ></RickAndMortyChar> )}  
                </section>
            </>
        
    )

}

export default RickAndMortyList;