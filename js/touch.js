import { slotArray } from "./board.js";
import { PIECE_WIDTH } from "./constants.js";
import {
  checkValidSlotArray,
  createTouchShadow,
  getIntersectingSlotNumber,
  placePuzzle,
  setShadowTouchPosition,
} from "./helper.js";

const main = document.querySelector("main");

let dragged = null;
let shadow = null;

const setUpPieceDrag = (e) => {
  dragged = e.target;

  const { pageX: xPosition, pageY: yPosition } = e.targetTouches[0];

  shadow = createTouchShadow(dragged, { xPosition, yPosition });
};

const movePiece = (e) => {
  const { pageX: xPosition, pageY: yPosition } = e.targetTouches[0];
  setShadowTouchPosition(shadow, xPosition, yPosition);
};

export const endPieceDrag = (e) => {
  app.removeChild(shadow);

  dragged = null;
  e.target.classList.remove("dragged");

  shadow = null;
};

const dropPiece = (e) => {
  const currentTouchPosition = [
    parseInt(shadow.style.left, 10) + PIECE_WIDTH / 2,
    parseInt(shadow.style.top, 10) + PIECE_WIDTH / 2,
  ];

  const [slotXNumber, slotYNumber] = getIntersectingSlotNumber(
    ...currentTouchPosition
  );

  if (checkValidSlotArray(slotArray, slotXNumber, slotYNumber)) {
    const targetSlot = slotArray[slotYNumber][slotXNumber];
    placePuzzle(targetSlot, dragged);
  }

  endPieceDrag(e, shadow);
};

const handleDragStart = (e) => {
  if (!e.target.classList.contains("puzzle-piece")) return;

  setUpPieceDrag(e);
};

const handleDragMove = (e) => {
  if (!e.target.classList.contains("puzzle-piece")) return;

  movePiece(e);
};

const handleDragEnd = (e) => {
  if (!e.target.classList.contains("puzzle-piece")) return;

  dropPiece(e);
};

main.addEventListener("touchstart", handleDragStart);
main.addEventListener("touchmove", handleDragMove);
main.addEventListener("touchend", handleDragEnd);
