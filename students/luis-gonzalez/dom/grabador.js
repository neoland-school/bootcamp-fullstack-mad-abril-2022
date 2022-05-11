let rec;

if (!("webkitSpeechRecognition" in window)){
    alert("disculpas, no puedes usar la API");
}else{

    rec = new webkitSpeechRecognition();
        rec.lang ="es-AR";
        rec.continuous= true;
        rec.interim = true;
        rec.addEventListener("result",cambiar);

        

    function cambiar(event) {
        let btnGrabar = document.getElementById("btnRec");
      console.log("excelente");
      btnGrabar.style =
        "background-color:red; box-shadow: 0px 3px 5px black,0px 2px 3px blue; font-size:2.5rem; text-shadow: 0px 2px 3px black;";
      let parar = document.getElementById("parar");
      parar.style = "display:block;";
      let grabar = document.getElementById("grabar");
      grabar.style = "display:none";

      for(i=event.resultIndex; i<event.results.length; i++){
        document.getElementById('parrafo').innerHTML = event.results[i][0].transcript;

    }

    
 }

}
rec.start();












//FRAGMENTO MIO
// function cambiar(e) {
//     let btnGrabar = document.getElementById("btnRec");
//   console.log("excelente");
//   btnGrabar.style =
//     "background-color:red; box-shadow: 0px 3px 5px black,0px 2px 3px blue; font-size:2.5rem; text-shadow: 0px 2px 3px black;";
//   let parar = document.getElementById("parar");
//   parar.style = "display:block;";
//   let grabar = document.getElementById("grabar");
//   grabar.style = "display:none";
// }







//DALTO
// let rec;

// if (!("webkitSpeechRecognition" in window)){
//     alert("disculpas, no puedes usar la API");
// }else{
//     rec = new webkitSpeechRecognition();
//     rec.lang ="es-AR";
//     rec.continuous= true;
//     rec.interim = true;
//     rec.addEventListener("result",iniciar);
// }
// function iniciar(event){
//     for(i=event.resultIndex; i<event.results.length; i++){
// document.getElementById('textoDalto').innerHTML = event.results[i][0].transcript;
//     }
// }
// rec.start();













