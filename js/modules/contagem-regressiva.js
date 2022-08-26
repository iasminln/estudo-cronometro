import Format from "../modules/format.js";

export default function ContagemRegressiva() {
  const inputSeg = document.querySelector(".contagem .input-seg");
  const inputMin = document.querySelector(".contagem .input-min");
  const inputHora = document.querySelector(".contagem .input-hora");
  const btnIniciarReg = document.querySelector(".contagem .btn-iniciar");
  const btnPararReg = document.querySelector(".contagem .btn-parar");
  const btnResetReg = document.querySelector(".contagem .btn-reset");
  const valorSeg = document.querySelector(".contagem .valor-seg");
  const valorMin = document.querySelector(".contagem .valor-min");
  const valorHora = document.querySelector(".contagem .valor-hora");

  let hora = 0;
  let min = 0;
  let seg = 0;
  let contagem;

  function iniciarContagem() {
    btnIniciarReg.setAttribute("disabled", "");
    hora = inputHora.value ? inputHora.value : 0;
    min = inputMin.value ? inputMin.value : 0;
    seg = inputSeg.value ? inputSeg.value : 0;

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
    }, 1000);
  }

  function pararContagem() {
    btnIniciarReg.removeAttribute("disabled", "");
    clearInterval(contagem);
  }

  function resetContagem(){
    btnIniciarReg.removeAttribute("disabled", "");
    clearInterval(contagem);

    inputHora.value = ''
    valorHora.innerText = Format(0);
    valorMin.innerText = Format(0);
    valorSeg.innerText = Format(0);
  }

  btnIniciarReg.addEventListener("click", iniciarContagem);
  btnPararReg.addEventListener("click", pararContagem);
  btnResetReg.addEventListener("click", resetContagem);
}
