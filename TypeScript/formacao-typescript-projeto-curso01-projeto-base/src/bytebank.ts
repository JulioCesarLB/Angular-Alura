let saldo: number = 1000;

const elementSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if(elementSaldo != null){
    elementSaldo.textContent=saldo.toString();
}


const elementForm = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementForm.addEventListener("submit", function(event){
    event.preventDefault();
    if(!elementForm.checkValidity()){
        alert("Por favor, preencha todos os campos da transação");
    }
    const inputTipoTransacao = elementForm.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementForm.querySelector("#valor") as HTMLInputElement;
    const inputData = elementForm.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if(tipoTransacao=="Depósito"){
        saldo +=valor;
    }else if(tipoTransacao=="Transferência" || tipoTransacao== "Pagamento de Boleto"){
        saldo -= valor;
    }else{
        alert("Tipo de Transação é invalido");
        return;
    }

    elementSaldo.textContent=saldo.toString();

    const novaTransacao={
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    elementForm.reset();
});
