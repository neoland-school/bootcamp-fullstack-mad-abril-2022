import './style.css';
import Card from '../Card/info';
import Nav from '../Nav';
import Footer from '../Footer';
import SideBar from '../SideBar';


function Pages () {


    return (
        <section className='cards-page'>
            <Nav></Nav>
            <main className='main'>
            <div className='div-envelop-cards'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <SideBar></SideBar> 
            </main>
            <Footer></Footer>
        </section>
    )
}


export default Pages;