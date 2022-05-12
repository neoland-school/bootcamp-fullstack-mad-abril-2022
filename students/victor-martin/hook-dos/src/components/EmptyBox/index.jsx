import './style.css'
// import React, {useState} from 'react';


function EmptyBox ({handleOver}) {
    return (
        <>
        <div onMouseEnter={handleOver} className='container'></div>
        </>
    )
}
export default EmptyBox;