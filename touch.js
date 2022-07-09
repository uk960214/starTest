const app = document.querySelector("#app");
const pieces = document.querySelectorAll(".puzzle-piece");
const pieceContainer = document.querySelector(".puzzle-piece-container");
const board = document.querySelector(".puzzle-board");

const boardRect = board.getBoundingClientRect();
const slots = [...board.children];
const slotArray = [slots.slice(0, 3), slots.slice(3, 6), slots.slice(6)];

const boardDimensions = {
  x: [boardRect.left, boardRect.right],
  y: [boardRect.top, boardRect.bottom],
  width: boardRect.width,
  height: boardRect.height,
};

const countSlot = (value) => {
  if (value < 0 || value > 1) return 0;
  if (value < 1 / 3) return 1;
  if (value < 2 / 3) return 2;
  return 3;
};

const getIntersectingSlot = (x, y) => {
  const [xStart] = boardDimensions.x;
  const [yStart] = boardDimensions.y;
  const xPosition = parseInt(x, 10) + 50;
  const yPosition = parseInt(y, 10) + 50;

  const slotX = countSlot((xPosition - xStart) / boardRect.width);
  const slotY = countSlot((yPosition - yStart) / boardRect.height);

  return [slotX, slotY];
};

let dragged = null;
let shadow = null;

const handleDragStart = (e) => {
  dragged = e.target;
  shadow = dragged.cloneNode(true);
  shadow.style.left = e.targetTouches[0].pageX - 50 + "px";
  shadow.style.top = e.targetTouches[0].pageY - 50 + "px";

  app.appendChild(shadow);

  e.target.classList.add("dragged");
};

const handleDragEnd = (e) => {
  const slot = getIntersectingSlot(shadow.style.left, shadow.style.top);

  if (slot[0] !== 0 && slot[1] !== 0) {
    slotArray[slot[1] - 1][slot[0] - 1].appendChild(shadow);
    shadow.style.left = 0;
    shadow.style.top = 0;
    shadow = null;
    dragged.parentNode.removeChild(dragged);
    dragged = null;
    return;
  }

  app.removeChild(shadow);
  shadow = null;
  e.target.classList.remove("dragged");
};

const handleDrag = (e) => {
  shadow.style.left = e.targetTouches[0].pageX - 50 + "px";
  shadow.style.top = e.targetTouches[0].pageY - 50 + "px";
};

pieces.forEach((piece) => {
  piece.addEventListener("touchstart", handleDragStart);
  piece.addEventListener("touchmove", handleDrag);
  piece.addEventListener("touchend", handleDragEnd);
});
