import Cards from "../../componentes/cards";
import Header from "../../comunes/header";
import Footer from "../../comunes/footer";
import "./style.css";
import { useEffect, useState } from "react";
import UseCocktails from "../../data/cocktails.hooks";
import BarNav from "../../comunes/Nav";

export default function Home() {

  const [coctails]=UseCocktails()


  return (


    <div className="wrap-home">
      {/* <Header></Header> */}
      <BarNav></BarNav>
      {coctails.map(c=> <Cards key={c.idDrink} cocktail={c}></Cards>)}      
      <Footer></Footer>
    </div>
  );
}


