import { SLOT_COUNT } from "./constants/layout.js";

const board = document.querySelector(".puzzle-board");

const boardRect = board.getBoundingClientRect();
export const boardDimensions = {
  xStart: boardRect.left,
  yStart: boardRect.top,
  width: boardRect.width,
  height: boardRect.height,
};
export const slotArray = [...board.children].reduce((array, slot, index) => {
  const newArray = [...array];

  const columnNumber = index % SLOT_COUNT;

  if (columnNumber === 0) newArray.push([slot]);
  else newArray[newArray.length - 1].push(slot);

  return newArray;
}, []);
