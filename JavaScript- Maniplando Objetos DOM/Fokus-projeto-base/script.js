const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');
const span = startPauseBt.querySelector('span');
const imgPlayPause = startPauseBt.querySelector('img');

const tempoNaTela = document.querySelector('#timer');

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica =  new Audio('./sons/luna-rise-part-one.mp3');
musica.loop=true;

const beep = new Audio('./sons/beep.mp3');
const play = new Audio('./sons/play.wav');
const pause = new Audio('./sons/pause.mp3');

let tempoDecorrido =1500;
let intervaloId=null;


musicaFocoInput.addEventListener('change',()=>{
    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
});

focoBt.addEventListener('click',()=>{
    tempoDecorrido =1500;
    alteraContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click',()=>{
    tempoDecorrido =300;
    alteraContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click',()=>{
    tempoDecorrido =900;
    alteraContexto('descanso-longo');
    longoBt.classList.add('active');
});

function alteraContexto(contexto){
    mostraTempo();
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
    if(contexto==='foco'){
        title.innerHTML= 'Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>';
    }else if(contexto==='descanso-curto'){
        title.innerHTML= 'Que tal dar uma respirada?<br> <strong class="app__title-strong">Faça uma pausa curta!</strong>'; 
    }else if(contexto==='descanso-longo'){
        title.innerHTML= 'Hora de voltar à superfície.<br> <strong class="app__title-strong">Faça uma pausa longa.</strong>';
        

    }
}

const contagemRegressiva = ()=> {
    if(tempoDecorrido<=0){
        beep.play();
        alert('tempo finalizado');
        zerar();
        span.textContent='Começar';
        return;
    }
        tempoDecorrido -=1;
        mostraTempo();
        
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar(){
    if(intervaloId){
        span.textContent='Retomar';
        zerar();
        pause.play();
        return;
    }
    span.textContent='Pausar';
    imgPlayPause.setAttribute('src', './imagens/pause.png')
    play.play();
    intervaloId = setInterval(contagemRegressiva,1000);
}
function zerar(){
    clearInterval(intervaloId);
    imgPlayPause.setAttribute('src', './imagens/play_arrow.png')
    intervaloId=null;
}
function mostraTempo(){
    const tempo = new Date(tempoDecorrido*1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br',{minute: '2-digit',second:'2-digit'});
    tempoNaTela.innerHTML=`${tempoFormatado}`;
}
mostraTempo();