import { slotArray } from "./board.js";
import { PIECE_WIDTH } from "./constants/layout.js";
import {
  checkValidSlotArray,
  createTouchShadow,
  getIntersectingSlotNumber,
  placePuzzle,
  setShadowTouchPosition,
} from "./helper.js";
import { handleAnswer } from "./match.js";

const body = document.querySelector("body");
const app = document.querySelector("#app");
const main = document.querySelector("main");

let dragged = null;
let shadow = null;

const offsetX = app.offsetLeft;
const getScrollOffsetY = () => app.scrollTop;

const setUpPieceDrag = (e) => {
  dragged = e.target;
  body.style.overflow = "hidden";

  const { pageX: xPosition, pageY: yPosition } = e.targetTouches[0];

  shadow = createTouchShadow(dragged, {
    xPosition: xPosition - offsetX,
    yPosition: yPosition + getScrollOffsetY(),
  });
};

const movePiece = (e) => {
  const { pageX: xPosition, pageY: yPosition } = e.targetTouches[0];

  setShadowTouchPosition(
    shadow,
    xPosition - offsetX,
    yPosition + getScrollOffsetY()
  );
};

export const endPieceDrag = (e) => {
  app.removeChild(shadow);

  dragged = null;
  e.target.classList.remove("dragged");
  body.style.overflow = "scroll";

  shadow = null;
};

const dropPiece = (e) => {
  const currentTouchPosition = [
    parseInt(shadow.style.left, 10) + PIECE_WIDTH / 2 + offsetX,
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
  handleAnswer(slotArray);
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
main.addEventListener("touchcancel", handleDragEnd);
main.addEventListener("touchend", handleDragEnd);

// 긴 터치 시 메뉴 방지
app.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
