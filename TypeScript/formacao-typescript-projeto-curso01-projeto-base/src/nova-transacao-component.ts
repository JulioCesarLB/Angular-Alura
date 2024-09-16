const elementForm = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementForm.addEventListener("submit", function(event){
    event.preventDefault();
    if(!elementForm.checkValidity()){
        alert("Por favor, preencha todos os campos da transação");
    }
    const inputTipoTransacao = elementForm.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementForm.querySelector("#valor") as HTMLInputElement;
    const inputData = elementForm.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if(tipoTransacao==TipoTransacao.DEPOSITO){
        saldo +=valor;
    }else if(tipoTransacao== TipoTransacao.TRANFERENCIA|| tipoTransacao== TipoTransacao.PAGAMENTO_BOLETO){
        saldo -= valor;
    }else{
        alert("Tipo de Transação é invalido");
        return;
    }

    elementSaldo.textContent=formatarMoeda(saldo);

    const novaTransacao: Transacao={
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    elementForm.reset();
});
