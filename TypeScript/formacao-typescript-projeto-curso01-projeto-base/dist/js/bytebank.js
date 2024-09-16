let saldo = 1000;
const elementSaldo = document.querySelector(".saldo-valor .valor");
if (elementSaldo != null) {
    elementSaldo.textContent = saldo.toString();
}
const elementForm = document.querySelector(".block-nova-transacao form");
elementForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementForm.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação");
    }
    const inputTipoTransacao = elementForm.querySelector("#tipoTransacao");
    const inputValor = elementForm.querySelector("#valor");
    const inputData = elementForm.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de Transação é invalido");
        return;
    }
    elementSaldo.textContent = saldo.toString();
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementForm.reset();
});
