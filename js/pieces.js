import { STAGE_PIECES_TYPES } from "./constants/quiz.js";
import { STARS } from "./constants/stars.js";
import { pieceTemplate } from "./constants/template.js";

const { stage } = document.querySelector(".title")?.dataset;
const puzzlePieceContainer = document.querySelector(".puzzle-piece-container");

const createPuzzlePieces = (pieceDataArray) =>
  pieceDataArray.reduce(
    (template, { url, name }, index) =>
      `${template}${pieceTemplate({ url, name, index })}`,
    ""
  );

const PIECE_DATA = STAGE_PIECES_TYPES[stage].map((type) => STARS[type]);

puzzlePieceContainer.insertAdjacentHTML(
  "beforeend",
  createPuzzlePieces(PIECE_DATA)
);
