import './style.css'

function UserCard (props){
    
    return (
        <>
        <div className='card__container'>
            <div className='card__photo'></div>
            <img src= {props.cards.image} alt=""/>
                {/* {props.zzz.firstName}
                {props.zzz.lastName}
                {props.zzz.phone}             */}
        </div>
       
        <section className="card__info">

            <h1>{props.cards.firstName} {props.cards.lastName}</h1>
                <article>
                    <p>Gender</p>
                    {props.cards.gender}
                    <section className='gender'>
                        <div className='male'> Male</div>
                        <div className='female'> Female</div>
                    </section>
                </article>
                

                <div className="footer__card">
                    <h4>Gender</h4>
                    <h4>Male Female</h4>
                    <h4>Mobile number</h4>
                        <p className="red">+91 9823456215</p>
                    <h4>Date of Birth</h4>
                        <p className="purple">21 March 1988</p>
                </div>
        </section>  
        </>        
    )
}

export default UserCard;

