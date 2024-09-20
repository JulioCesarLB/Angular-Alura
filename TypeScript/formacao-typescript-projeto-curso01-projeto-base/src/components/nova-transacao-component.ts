import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";

const elementForm = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementForm.addEventListener("submit", function(event){
    try{
    event.preventDefault();
    if(!elementForm.checkValidity()){
        alert("Por favor, preencha todos os campos da transação");
    }
    const inputTipoTransacao = elementForm.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementForm.querySelector("#valor") as HTMLInputElement;
    const inputData = elementForm.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value+" 00:00:00");


    const novaTransacao: Transacao={
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    ExtratoComponent.atualizar();
    elementForm.reset();
    }catch(erro){
        alert(erro.message);
    }
});
