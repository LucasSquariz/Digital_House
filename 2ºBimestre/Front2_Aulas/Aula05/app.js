function modoEscuro(){
    //Coloca o body em uma constante
    const body = document.querySelector('body'); 

    //Remove a classe "modoClaro" do body, caso ela exista   
    body.classList.remove("modoClaro");

    //Adiciona a classe "modoEscuro" ao elemento body
    body.classList.add("modoEscuro");

}

function modoClaro(){
    //Coloca o body em uma constante
    const body = document.querySelector('body');

    //Remove a classe "modoEscuro" do body, caso ela exista  
    body.classList.remove("modoEscuro");

    //Adiciona a classe "modoClaro" ao elemento body
    body.classList.add("modoClaro");
}

