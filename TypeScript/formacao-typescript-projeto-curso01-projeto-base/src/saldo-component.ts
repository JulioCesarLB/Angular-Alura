let saldo: number = 1000;

const elementSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

const elementDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if(elementSaldo != null){
    elementSaldo.textContent=formatarMoeda(saldo);
}

if(elementDataAcesso!=null){
    const dataAcesso: Date = new Date();
    elementDataAcesso.textContent= formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
