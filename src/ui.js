
function menu(){
    
    let elmento = document.querySelector('#menu2')
    elmento.style.display = "flex";
}

function home(){
    let elmento = document.querySelector('#menu2')
    elmento.style.display = "none";
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
    
    
    let text1 = `loading <span class="">.</span><span class="">.</span><span class="">.</span><span class="">.</span>`;
    let text2 = `Seja bem vindo<span class="">.</span><span class="">.</span><span class="">.</span><span class="">.</span>`;
    
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



///////////////////////////////////////////////////////////////////////////////////////////////
// verifica se a tela esta grande ou pequena para fazer o controle dos cards da seção sobre //
//////////////////////////////////////////////////////////////////////////////////////////////




const elements = document.querySelectorAll('.bloor');

if(document.body.clientWidth >= 950){
    elements.forEach((item)=>{
        item.addEventListener('mouseover',(e) =>{
            e.preventDefault;
    
            elements.forEach( (item)=>{
                (item.parentNode).classList.add('menior');
                }
            )
        })
        item.addEventListener('mouseout',(e) =>{
            e.preventDefault;
    
            elements.forEach( (item)=>{
                (item.parentNode).classList.remove('menior');
                }
            )
        })
    }
    
    )
}




///////////////////////////////////////////////////////////////////
// faz todo controle passar as paginas dos cards da seção sobre //
//////////////////////////////////////////////////////////////////


let buttonA = document.querySelector('.buttonA');
let buttonB = document.querySelector('.buttonB');
let espaço = 0;

buttonA.addEventListener('click',()=>{
    let containerS = document.querySelectorAll('.containerS')
    if(espaço < 300)
    espaço = espaço +300
    containerS.forEach((item)=>{
        
        item.style.left = `${espaço}px`;
    })
})

buttonB.addEventListener('click',()=>{
    let containerS = document.querySelectorAll('.containerS')
    if(espaço > -300){
        espaço = espaço -300
    }
    containerS.forEach((item)=>{
       
        item.style.left = `${espaço}px`;
    })
})




//////////////////////////////
//faz controle do audio /////
/////////////////////////////


const audiocontroler = document.querySelector('.audiocontroler');

audiocontroler.addEventListener('click', (e) =>{

    e.preventDefault();

    const audio = document.querySelector('audio');

    if(audiocontroler.dataset.status === 'on'){
        audiocontroler.dataset.status = 'off';      
        audiocontroler.style.backgroundImage = "url('../../public/images/volume_up_icon.svg')";
        audio.pause();
        
    }else if(audiocontroler.dataset.status === 'off'){
        audiocontroler.dataset.status = 'on';
        audiocontroler.style.backgroundImage = "url('../../public/images/volume_off_icon.svg')";
        audio.play();
    }
    
})



document.body.addEventListener('click',(e)=>{
    e.preventDefault;
    
   
})




///////////////////////////////////////////
//todo processo que inicia com a pagina //
//////////////////////////////////////////



window.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault;
     
    IniciarIntroduction();   
    let audio = document.querySelector('audio');
    audio.play()
})


