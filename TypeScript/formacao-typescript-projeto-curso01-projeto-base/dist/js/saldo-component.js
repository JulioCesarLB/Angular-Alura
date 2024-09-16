let saldo = 1000;
const elementSaldo = document.querySelector(".saldo-valor .valor");
const elementDataAcesso = document.querySelector(".block-saldo time");
if (elementSaldo != null) {
    elementSaldo.textContent = formatarMoeda(saldo);
}
if (elementDataAcesso != null) {
    const dataAcesso = new Date();
    elementDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
