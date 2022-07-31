import { hintTemplate, starMenu } from "./constants/template.js";
import { showModal } from "./modal.js";

const header = document.querySelector("header");
const { stage } = document.querySelector(".title")?.dataset;

const handleHintClick = ({ target: { classList: targetClass } }) => {
  if (targetClass.contains("star-sign-button")) {
    showModal(starMenu);
  }

  if (targetClass.contains("clue-button")) {
    showModal(hintTemplate(stage));
  }

  if (
    targetClass.contains("modal-close-button") ||
    targetClass.contains("modal-backdrop")
  ) {
    const modalPlaceholder = document.querySelector(".modal-placeholder");
    const modal = modalPlaceholder.querySelector(".modal");
    modalPlaceholder.removeChild(modal);
  }
};

header.addEventListener("click", handleHintClick);
