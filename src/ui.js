function menu(){
    
    let elmento = document.querySelector('#menu2')
    elmento.style.display = "flex";
}

function home(){
    let elmento = document.querySelector('#menu2')
    elmento.style.display = "none";
}

let ano2017 = document.getElementById('A2017');
let ano2019 = document.getElementById('A2019');
let ano2021 = document.getElementById('A2021');
let hoje = document.getElementById('hoje');

function mostar(index){
    console.log(index);
    switch (index){
        case 1: ano2017.style.display = "flex";

        break;
        case 2: ano2019.style.display = "flex";
        
        break;
        case 3: ano20210.style.display = "flex";
        break;
        case 4: hoje.style.display = "flex";
        break;
    }

}

function apagarAll(){
    ano2017.style.display = "none";
    ano2019.style.display = "none";
    ano2021.style.display = "none";
    hoje.style.display = "none";
}

window.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault;
    apagarAll();
})