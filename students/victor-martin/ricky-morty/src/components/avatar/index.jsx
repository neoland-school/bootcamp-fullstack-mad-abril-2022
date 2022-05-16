import './style.css'

export default function SecArriba({caracther}){



return(

    

<div id="wrap">

    <div className="card">
        <div id="foto"> <img src= {caracther.image} alt="otro" /> </div>
        <div id="descripcion">
        <h3>{ caracther.name }</h3>
        <div id="condicion">
         

        {/* <div id="situacion">{caracther.status} - {caracther.species}</div> */}
        <div className='container__status'>
            <div className={`situacion__${caracther.status.toLowerCase()}`}></div>

            <span>"{caracther.status} - {caracther.species}"</span>
        </div>
    </div>

<div id="lastLocation">
    Last Known location:
    <h4>{caracther.location.name}</h4>
</div>

<div id="firstSeen">
    First seen in:
    <h4>{caracther.origin.name}</h4>
</div>

    </div>

</div>



</div>



)

}

