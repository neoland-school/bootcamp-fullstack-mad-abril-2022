

function Child ({onFilterChange,other}){ // {onFilterChange:... , other:66}
    return(
        <>
        <p>From parent other prop: {other} </p>
        {/* <button onClick={() => helloFn('Bootcamp')}>Comunicar con el padre</button> */}
        <input onChange={e => onFilterChange(e.target.value)} placeholder='Comunicar con el padre'></input>
        </>
    )


}
export default Child