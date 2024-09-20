import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatter.js";
const elementSaldo = document.querySelector(".saldo-valor .valor");
const elementDataAcesso = document.querySelector(".block-saldo time");
if (elementDataAcesso != null) {
    elementDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
renderizar();
function renderizar() {
    if (elementSaldo != null) {
        elementSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        renderizar();
    }
};
export default SaldoComponent;
