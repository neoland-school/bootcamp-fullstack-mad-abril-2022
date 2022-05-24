import './style.css'
import Header from '../../comunes/header'
import Footer from '../../comunes/footer';

export default function Info(){
    return(
<div className="wrap-info">
<Header></Header>
<div className="wrap-info">
    <div className="foto-info"></div>
    <div className="descipcion-info"></div>
</div>
<Footer></Footer>
</div>
    )
}