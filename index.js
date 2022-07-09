import "./touch.js";

const pieces = document.querySelectorAll(".puzzle-piece");
const pieceContainer = document.querySelector(".puzzle-piece-container");
const board = document.querySelector(".puzzle-board");

let dragged = null;

const handleDrag = (e) => {
  dragged = e.target;
};

const handleDragOver = (e) => {
  e.preventDefault();
};

const handleDrop = (e) => {
  e.preventDefault();

  dragged.parentNode.removeChild(dragged);
  e.target.appendChild(dragged);
};

const handleBoardDragOver = (e) => {
  if (e.target.className !== "puzzle-slot") return;

  handleDragOver(e);
};

const handleBoardDrop = (e) => {
  if (e.target.className !== "puzzle-slot") return;

  handleDrop(e);
};

pieces.forEach((piece) => {
  piece.addEventListener("dragstart", handleDrag);
});

board.addEventListener("dragover", handleBoardDragOver);
board.addEventListener("drop", handleBoardDrop);

pieceContainer.addEventListener("dragover", handleDragOver);
pieceContainer.addEventListener("drop", handleDrop);
