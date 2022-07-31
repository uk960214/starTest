import { PUZZLE_ANSWER, RESULT_DATE } from "./constants/quiz.js";
import { resultContent } from "./constants/template.js";
import { showModal } from "./modal.js";

const description = document.querySelector(".description");

const { stage } = document.querySelector(".title")?.dataset;

const getCurrentBoardStatus = (slotArray) =>
  slotArray
    .flat()
    .map((ele) => Number(ele.firstChild?.dataset.index) || 0)
    .join("");

const checkAnswer = (slotArray) =>
  getCurrentBoardStatus(slotArray) === PUZZLE_ANSWER[stage];

export const handleAnswer = (slotArray) => {
  if (checkAnswer(slotArray)) {
    description.textContent = RESULT_DATE[stage];

    showModal(resultContent(RESULT_DATE[stage]));
    return;
  }
  description.textContent = "별자리와 일치하는 날짜를 찾지 못했습니다";
};
