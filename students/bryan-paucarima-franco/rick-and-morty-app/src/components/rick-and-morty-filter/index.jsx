import './styles.css'


function RickAndMortyFilter ({filterList,filterAliveChar, filterDeadChar, showAllChar} ) {

    return(

        <>  
            <div className='container-filters'>
                <p className='tittle'>The Rick And Morty API</p>
                <input className='input-filter' onInput={filterList} type='text' placeholder='Search Character'></input>
                <div className='buttons'>
                    <button onClick={filterAliveChar}>Filter Alive Characters</button>
                    <button onClick={filterDeadChar}>Filter Dead Characters</button>
                    <button onClick={showAllChar}>Show All Characters</button>
                </div>
            </div>
        </>

    )
    
}

export default RickAndMortyFilter;