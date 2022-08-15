import { SLOT_COUNT } from "./constants/layout.js";

const board = document.querySelector(".puzzle-board");

export const boardDimensions = () => ({
  xStart: board.getBoundingClientRect().left,
  yStart: board.getBoundingClientRect().top,
  width: board.getBoundingClientRect().width,
  height: board.getBoundingClientRect().height,
});
export const slotArray = [...board.children].reduce((array, slot, index) => {
  const newArray = [...array];

  const columnNumber = index % SLOT_COUNT;

  if (columnNumber === 0) newArray.push([slot]);
  else newArray[newArray.length - 1].push(slot);

  return newArray;
}, []);
