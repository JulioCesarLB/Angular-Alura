document.querySelectorAll('.tecla').forEach(botao=>{
    botao.onclick = function(){
        document.querySelector(`#som_${botao.classList[1]}`)?document.querySelector(`#som_${botao.classList[1]}`).play():alert("elemento não encontrado");
    }
    
    botao.onkeydown = function(evento){
        if(evento.code==="Space" || evento.code==="Enter"){
            botao.classList.add('ativa');   
        }
    }

    botao.onkeyup = function(){
        botao.classList.remove('ativa');
    }
});

/*
document.querySelectorAll('input[type=button]').forEach(input=>{
  input.onclick = function(){
    document.querySelector('input[type=tel]').value= document.querySelector('input[type=tel]').value+ input.value;
  }
});
*/