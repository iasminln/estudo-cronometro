import Format from "./format.js";
import * as init from "./secoes.js";

export default function ContagemRegressiva() {
  const btnVoltar = document.querySelector(".contagem .btn-voltar");
  const btnIniciar = document.querySelector(".contagem .btn-iniciar");
  const btnParar = document.querySelector(".contagem .btn-parar");
  const btnReset = document.querySelector(".contagem .btn-reset");

  const inputSeg = document.querySelector(".contagem .input-seg");
  const inputMin = document.querySelector(".contagem .input-min");
  const inputHora = document.querySelector(".contagem .input-hora");
  const inputs = document.querySelectorAll(".contagem input");

  const valorSeg = document.querySelector(".contagem .valor-seg");
  const valorMin = document.querySelector(".contagem .valor-min");
  const valorHora = document.querySelector(".contagem .valor-hora");

  let hora = 0;
  let min = 0;
  let seg = 0;
  let contagem;

  function iniciarContagem() {
    if (!btnIniciar.hasAttribute("data-iniciou")) {
      hora = inputHora.value;
      min = inputMin.value;
      seg = inputSeg.value;
    }

    if (hora == 0 && min == 0 && seg == 0) {
      alert("Por favor, insira algum valor para a contagem regressiva.");
    } else if (hora > 0 || (min > 0 && min < 60) || (seg > 0 && seg < 60)) {
      contagem = setInterval(() => {
        --seg;

        if (hora === 0 && min === 0 && seg === 0) {
          clearInterval(contagem);
        } else {
          if (seg === -1) {
            if (min >= 0) {
              min--;
              seg = 59;
            }
          }

          if (min === -1) {
            if (hora >= 0) {
              --hora;
              min = 59;
            }
          }
        }

        valorHora.innerText = Format(hora);
        valorMin.innerText = Format(min);
        valorSeg.innerText = Format(seg);
        btnIniciar.setAttribute("disabled", "");
        btnIniciar.setAttribute("data-iniciou", "");

        inputs.forEach((item) => {
          item.setAttribute("disabled", "");
        });
      }, 1000);
    } else {
      alert("Por favor, insira valores entre 0 e 59.");
    }
  }

  function pararContagem() {
    btnIniciar.removeAttribute("disabled", "");
    clearInterval(contagem);
  }

  function resetContagem() {
    btnIniciar.removeAttribute("disabled", "");
    btnIniciar.removeAttribute("data-iniciou", "");
    inputs.forEach((item) => {
      item.removeAttribute("disabled");
    });
    clearInterval(contagem);

    inputHora.value = "0";
    inputMin.value = "0";
    inputSeg.value = "0";
    valorHora.innerText = Format(0);
    valorMin.innerText = Format(0);
    valorSeg.innerText = Format(0);
  }

  function voltarPagina() {
    init.divInicial.setAttribute("data-visivel", "true");
    init.divContagem.setAttribute("data-visivel", "false");
  }

  btnIniciar.addEventListener("click", iniciarContagem);
  btnParar.addEventListener("click", pararContagem);
  btnReset.addEventListener("click", resetContagem);
  btnVoltar.addEventListener("click", voltarPagina);

  inputs.forEach((item) => {
    item.addEventListener("click", () => {
      item.select();
    });
  });
}
