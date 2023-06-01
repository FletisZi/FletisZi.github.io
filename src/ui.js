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
let ano2022 = document.getElementById('A2022');
let hoje = document.getElementById('hoje');

function mostar(index){
    console.log(index);
    switch (index){
        case 1: ano2017.style.display = "flex";

        break;
        case 2: ano2019.style.display = "flex";
        
        break;
        case 3: ano2022.style.display = "flex";
        break;
        case 4: hoje.style.display = "flex";
        break;
    }

}

function apagarAll(){
    ano2017.style.display = "none";
    ano2019.style.display = "none";
    ano2022.style.display = "none";
    hoje.style.display = "none";
}

class Introduction {

    createElements(el_Pai,text){

        let Elements = document.createElement('div');
        Elements.classList.add('written');
        Elements.innerHTML = text;
        el_Pai.appendChild(Elements);
    }

    moves(){
        let position = 0;
        let repeteco = 0
        
        const myInterval = setInterval(()=>{
            let elemento = document.querySelectorAll('div span');
            console.log(elemento[position])
            if(position<4){
                elemento[position].classList.toggle('move3'); 
                position++;
            }else{
        
                position = 0;   
                repeteco++;
            };
            if(repeteco > 2){
                console.log('foi');
                clearInterval(myInterval);
            }
        },500);
    }

    showElements(text){
        
        this.createElements(document.querySelector('.container_apresentacao'),text);
        this.moves();
    }

    removeElements(){
        document.querySelector('.written').parentNode.removeChild(document.querySelector('.written'));
    };

    destroyElements(){
        document.querySelector('.fundo_apresentacao').parentNode.removeChild(document.querySelector('.fundo_apresentacao'));
    };

    
}

function IniciarIntroduction(){
    let ShowIntroduction = new Introduction();
    
    
    let text1 = `Seja bem vindo <span class="">.</span><span class="">.</span><span class="">.</span><span class="">.</span>`;
    let text2 = `Meu nome é Rodrigo e este sou eu <span class="">.</span><span class="">.</span><span class="">.</span><span class="">.</span>`;
    
    setTimeout(()=>{
        ShowIntroduction.showElements(text1);     
    
        setTimeout(()=>{
            ShowIntroduction.removeElements()
            ShowIntroduction.showElements(text2);     
        },16000);
    
        setTimeout(()=>{
            ShowIntroduction.destroyElements();
        },34000);
    
    },2000);
}


window.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault;
    IniciarIntroduction();
    apagarAll();
})


