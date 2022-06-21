import React from 'react';
import './UserCard.css'

function UserCard(props) {

    // const handleClick = () => {
    //     props.onClickUser(props.userObj.firstName);
    // };

    return (
        <React.Fragment>
            <div className='container'>
                <div className='image-fullname'>
                    <div className='image'>
                        <img className='figure' src={props.userObj.image} alt="" />
                    </div>
                    <h1 className='name'>{props.userObj.firstName} {props.userObj.lastName}</h1>
                </div>
                <div className='gender-choice'>
                    <h3>Gender</h3>
                    <div className='choice'>
                        <div className={`gender ${props.userObj.gender === 'male' ? 'active' : ''}`}>Male</div>
                        <div className={`gender ${props.userObj.gender === 'female' ? 'active' : ''}`}>Female</div>
                    </div>
                </div>
                <div className='mobile-number'>
                    <h3>Mobile Number</h3>
                    <h4 className='number'>{props.userObj.phone}</h4>
                </div>
                <div className='date-of-birth'>
                    <h3>Date of Birth</h3>
                    <h4 className='birth'>{props.userObj.birthDate}</h4>

                </div>

                {/* <button onClick={handleClick}>Click me</button> */}
            </div>

        </React.Fragment>
    )
}

export default UserCard;


// function UserCard({user='antonio', age=13 , img='URL'}){
//    }


// const defaulUser = {
//    firstName : 'Antonio'
//      age : 12
//      image : 'url'
//}




// function UserCard({user = defaulUser}) {
//  
//
//}