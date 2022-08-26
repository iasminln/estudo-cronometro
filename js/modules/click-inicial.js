import * as init from "./secoes.js";

export default function ClickInicial() {
  const button = document.querySelector(".inicial button");

  function handleClick() {
    init.divInicial.setAttribute("data-visivel", "false");

    init.imagesInicial.forEach((item, index) => {
      if (item.classList.contains("ativo")) {
        index === 0
          ? init.divContagem.setAttribute("data-visivel", "true")
          : init.divCronometro.setAttribute("data-visivel", "true");
      }
    });
  }

  button.addEventListener("click", handleClick);
}
