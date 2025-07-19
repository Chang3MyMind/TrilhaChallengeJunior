// 1. Lógica para o botão do ITEM 1 (controla a visibilidade da resposta 1 E todos os itens 2 a 6)
const btnCollapseItem1 = document.getElementById("btn-collapse");
const divCollapseContent = document.getElementById("collapse");

if (btnCollapseItem1 && divCollapseContent) {
  btnCollapseItem1.addEventListener("click", function () {
    const arrowIcon = this.querySelector(".arrow-icon");

    if (divCollapseContent.classList.contains("hidden")) {
      divCollapseContent.classList.remove("hidden");
      divCollapseContent.classList.add("show");
      if (arrowIcon) {
        arrowIcon.style.transform = "rotate(180deg)";
      }
    } else {
      divCollapseContent.classList.remove("show");
      divCollapseContent.classList.add("hidden");
      if (arrowIcon) {
        arrowIcon.style.transform = "rotate(0deg)";
      }
    }
  });
}

// 2. Lógica para os botões dos ITENS 2 a 6

const rotationButtons = document.querySelectorAll(
  ".btn-collapse-content[data-rotate='true']"
);

rotationButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const arrowIcon = this.querySelector(".arrow-icon");
    if (arrowIcon) {
      const currentRotation = getComputedStyle(arrowIcon).transform;

      if (currentRotation !== "none" && currentRotation.includes("-1")) {
        arrowIcon.style.transform = "rotate(0deg)";
      } else {
        arrowIcon.style.transform = "rotate(180deg)";
      }
    }
  });
});
