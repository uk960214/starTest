import { showModal } from "./modal.js";

const header = document.querySelector("header");

const handleHintClick = ({ target: { classList: targetClass } }) => {
  if (targetClass.contains("star-sign-button")) {
    showModal(header, "별자리 도감");
  }

  if (targetClass.contains("clue-button")) {
    showModal(header, "단서");
  }

  if (
    targetClass.contains("modal-close-button") ||
    targetClass.contains("modal-backdrop")
  ) {
    const modal = header.querySelector(".modal");
    header.removeChild(modal);
  }
};

header.addEventListener("click", handleHintClick);
