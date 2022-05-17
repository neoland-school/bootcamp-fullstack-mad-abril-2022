import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


function InfinityScrollDemo() {
    const [items, updateItems] = useState([]);
    const [nextUrl, updateNextUrl] = useState('');
    console.log(items);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(r => r.json())
        .then(p => {
            updateNextUrl(p.next);
            p.results.forEach(e => {
                fetch(e.url)
                .then(r => r.json())
                .then(pokemon => updateItems(prevItems => [...prevItems,pokemon]))
            })
            
        });
    },[])

    const fetchMoreData = () => { 
        console.log('Cargando datos')
        fetch(nextUrl)
        .then(r => r.json())
        .then(p => {
            updateNextUrl(p.next);
            p.results.forEach(e => {
                fetch(e.url)
                .then(r => r.json())
                .then(pokemon => updateItems(prevItems => [...prevItems,pokemon]))
            })
            
        });
    }
    return <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        { 
            items.length === 0 
            ? <p>Cargando previo</p>
            : <InfiniteScroll
                style={{ display: 'flex', flexWrap: 'wrap' }}
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {items.map((p, index) => (
                    <div key={index}>
                       <img alt='' src={p.sprites.front_default}></img>
                       <p>{p.name}</p>
                    </div>
                ))}
            </InfiniteScroll>
        }
        
    </div>
}


export default InfinityScrollDemo;