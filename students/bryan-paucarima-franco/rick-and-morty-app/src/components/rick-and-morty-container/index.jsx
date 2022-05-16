import './styles.css'
import RickAndMortyChar from '../rick-and-morty-char';
import {useEffect,useState} from 'react'
import RickAndMortyFilter from '../rick-and-morty-filter';


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
                <RickAndMortyFilter filterList={filterList} 
                                    filterAliveChar={filterAliveChar} 
                                    filterDeadChar={filterDeadChar}
                                    showAllChar={showAllChar}></RickAndMortyFilter>
                <section className='list-chars'>
                    {rickAndMortyFiltered.map(e => <RickAndMortyChar key={e.id}  character={e} ></RickAndMortyChar> )}  
                </section>
            </>
        
    )

}

export default RickAndMortyList;