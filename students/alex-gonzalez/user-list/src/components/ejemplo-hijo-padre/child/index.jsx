


function Child({onFilterChange, other}){ // props === { onFilterChange: ... , other: 66 }
    return (
        <>
            <p>From Parent Other prop: {other}</p>
            {/* <button onClick={() => helloFn('aklsfksjfbsdkljf')}>Comunicar con el padre</button> */}
            <input onChange={e => onFilterChange(e.target.value)} placeholder="Comunicar con el padre"></input>
        </>
    )
}


export default Child;