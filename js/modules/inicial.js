import * as init from "./secoes.js";

export default function Inicial() {
  init.divInicial.setAttribute("data-visivel", "true");
  init.divCronometro.setAttribute("data-visivel", "false");
  init.divContagem.setAttribute("data-visivel", "false");

  init.tituloInicial[0].classList.add("ativo");
  init.imagesInicial[0].classList.add("ativo");

  function selecionarTipo(index) {
    init.tituloInicial.forEach((item) => {
      item.classList.remove("ativo");
    });

    init.imagesInicial.forEach((item) => {
      item.classList.remove("ativo");
    });

    init.imagesInicial[index].classList.add("ativo");
    init.tituloInicial[index].classList.add("ativo");
  }

  init.imagesInicial.forEach((item, index) => {
    item.addEventListener("click", () => {
      selecionarTipo(index);
    });
  });
}
