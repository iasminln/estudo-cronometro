import Format from "./format.js";
import * as init from "./secoes.js";

export default function Cronometro() {
  const btnVoltar = document.querySelector(".cronometro .btn-voltar");
  const btnIniciar = document.querySelector(".cronometro .btn-iniciar");
  const btnParar = document.querySelector(".cronometro .btn-parar");
  const btnReset = document.querySelector(".cronometro .btn-reset");
  const timerCronSeg = document.querySelector(".cronometro .timerSeg");
  const timerCronMin = document.querySelector(".cronometro .timerMin");
  const timerCronHora = document.querySelector(".cronometro .timerHora");

  let seg = 0;
  let min = 0;
  let hora = 0;
  let contagem;

  function iniciarCronometro() {
    btnIniciar.setAttribute("disabled", "");
    contagem = setInterval(() => {
      seg++;

      if (seg === 60) {
        ++min;
        seg = 0;
      }

      if (min === 60) {
        ++hora;
        min = 0;
      }

      timerCronSeg.innerText = Format(seg);
      timerCronMin.innerText = Format(min);
      timerCronHora.innerText = Format(hora);
    }, 1000);
  }

  function pararCronometro() {
    btnIniciar.removeAttribute("disabled", "");
    clearInterval(contagem);
  }

  function resetCronometro() {
    btnIniciar.removeAttribute("disabled", "");
    clearInterval(contagem);
    seg = 0;
    min = 0;
    hora = 0;
    timerCronSeg.innerText = Format(seg);
    timerCronMin.innerText = Format(min);
    timerCronHora.innerText = Format(hora);
  }

  function voltarPagina() {
    init.divInicial.setAttribute("data-visivel", "true");
    init.divCronometro.setAttribute("data-visivel", "false");
  }

  btnIniciar.addEventListener("click", iniciarCronometro);
  btnParar.addEventListener("click", pararCronometro);
  btnReset.addEventListener("click", resetCronometro);
  btnVoltar.addEventListener("click", voltarPagina);
}
