import { boardDimensions } from "./board.js";
import { PIECE_WIDTH, SLOT_COUNT } from "./constants.js";

const app = document.querySelector("#app");

export const setShadowTouchPosition = (shadow, xPosition, yPosition) => {
  if (!shadow) return;
  shadow.style.left = `${xPosition - PIECE_WIDTH / 2}px`;
  shadow.style.top = `${yPosition - PIECE_WIDTH / 2}px`;
};

export const createTouchShadow = (target, { xPosition, yPosition }) => {
  const shadow = target.cloneNode(true);
  setShadowTouchPosition(shadow, xPosition, yPosition);
  app.appendChild(shadow);

  target.classList.add("dragged");

  return shadow;
};

const countSlotNumber = (value) => {
  if (value < 0 || value > 1) return -1;

  return Math.floor(value * SLOT_COUNT);
};

export const getIntersectingSlotNumber = (xCurrent, yCurrent) => {
  const { xStart, yStart, width, height } = boardDimensions;

  const slotXNumber = countSlotNumber((xCurrent - xStart) / width);
  const slotYNumber = countSlotNumber((yCurrent - yStart) / height);

  return [slotXNumber, slotYNumber];
};

export const checkValidSlotArray = (slotArray, slotXNumber, slotYNumber) => {
  return (
    slotXNumber >= 0 &&
    slotXNumber < slotArray[0].length &&
    slotYNumber >= 0 &&
    slotYNumber < slotArray.length
  );
};

export const placePuzzle = (slot, piece) => {
  if (slot.childNodes.length !== 0) return;

  slot.appendChild(piece);
};
