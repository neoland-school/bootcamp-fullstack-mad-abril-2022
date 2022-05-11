import './style.css';


function UseCard ({user}) {
    let birthDay = new Date (user?.birthDate).getDate();
    let birthMonth = new Date (user?.birthDate).toLocaleString('EN-en', { month: 'long' });
    let birthYear = new Date (user?.birthDate).getFullYear();
    let birthDate = `${birthDay} ${birthMonth} ${birthYear}`;
    //Mirar Intl.DateTimeFormat --> Para formatear las fechas como queramos.
    
    return (
        <main className='card-container'>
            <section className='image-container'>
                <img src={user?.image} alt='card-picture' className='user-img'></img>
            </section>
            <section className='name-container'>
                <p className='user-name'>{user?.firstName} {user?.maidenName} {user?.lastName}</p>
            </section>
            <section className='gender-container'>
                <p className='gender-title'>Gender</p>
                <div className='pink-gender'>
                    {user?.gender === 'male' ? 'female' : ''}
                    {user?.gender === 'female' ? 'male' : ''}
                    <div className='purple-gender'>{user?.gender}</div>
                </div>
            </section>
            <section className='phone-container'>
                <p className='phone-title'>Mobile Number</p>
                <p className='phone-number'>{user?.phone}</p>
            </section>
            <section className='birth-container'>
                <p className='birth-title'>Mobile Number</p>
                <p className='birth-date'>{birthDate}</p>
            </section>
        </main>
    )
}


export default UseCard;