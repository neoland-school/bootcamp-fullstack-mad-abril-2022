import './style.css'
function Nav ({handleChange, filterAlive, filterDead}) {
    return (
    <>
        <header className=''>
            <h1>The Rick and Morty API</h1>
            <input onChange={handleChange} type="text" placeholder='Seach Character' />
        <section className='buttons__container'>
            <button onClick={filterAlive}>Filter Alive Characters</button>
            <button onClick={filterDead}>Filter Dead Characters</button>
            <button>Show all characters</button>
        </section>
        </header>
    </>   
    )
}
export default Nav;

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }