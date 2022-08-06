    function Start_bar(){
        let barra = document.createElement('div');
        barra.className = "barra";
        let valor = document.createElement('div');
        valor.className = "valor";
        let Sobra = document.createElement('div');
        Sobra.className = "Sobra";


        barra.appendChild(valor);
        barra.appendChild(Sobra);

        var classBar = document.querySelector("#classBarra");
        classBar.appendChild(barra);

    }
    
    
    document.addEventListener("DOMContentLoaded",Start_bar)