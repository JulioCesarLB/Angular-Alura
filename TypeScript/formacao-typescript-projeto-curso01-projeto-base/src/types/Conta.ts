import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number=JSON.parse(localStorage.getItem('saldo')) || 0;
const transacoes: Transacao[]= JSON.parse(localStorage.getItem("transacoes"),(key:string, valor:string)=>{
    if(key=="data"){
        return new Date(valor);
    }
    return valor;
}) || [];

function debitar(valor: number): void{
    if(valor<=0){
        throw new Error("valor debitado deve ser maior que zero");
    }else if(saldo<valor){
        throw new Error("saldo insuficiente");
    }else{
        saldo-=valor;
        localStorage.setItem("saldo", saldo.toString());
    }


}
function depositar(valor: number): void{
    if(valor<=0){
        throw new Error("o valor a ser depositado deve ser maior que zero");
    }else{
        saldo+=valor;
        localStorage.setItem("saldo", saldo.toString());
    }
}

const Conta ={
    getSaldo(){
        return saldo;
    },

    getDataAcesso():Date{
        return new Date();
    },
    getGruposTransacoes():GrupoTransacao[]{
        const gruposTransacoes: GrupoTransacao[]=[];
        const listaTransacoes: Transacao[]= structuredClone(transacoes);
        const trancoesOrdernada:Transacao[] = listaTransacoes.sort((t1,t2) => t2.data.getTime()-t1.data.getTime());
        let labelAtualGrupoTransacao: string="";

        for(let transacao of trancoesOrdernada){
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-br", {month:"long", year:"numeric"});
            if(labelAtualGrupoTransacao!=labelGrupoTransacao){
                labelAtualGrupoTransacao=labelGrupoTransacao;
                gruposTransacoes.push({
                    label:labelGrupoTransacao,
                    transacoes:[]
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }
        return gruposTransacoes;
    },

    registrarTransacao(novaTransacao:Transacao): void{
        if(novaTransacao.tipoTransacao==TipoTransacao.DEPOSITO){
            depositar(novaTransacao.valor);
        }else if(novaTransacao.tipoTransacao== TipoTransacao.TRANFERENCIA|| novaTransacao.tipoTransacao== TipoTransacao.PAGAMENTO_BOLETO){
            debitar(novaTransacao.valor);
            novaTransacao.valor*=-1;
        }else{
            throw new Error("Tipo de Transação é invalido");
            
        }
        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
}

export default Conta;