import { showModal } from "./modal.js";

const description = document.querySelector(".description");

const { stage } = document.querySelector(".title")?.dataset;

const PUZZLE_ANSWER = ["130000024", "000214030", "432010000", "402000301"];
const RESULT_DATE = [
  "1294년 10월 1일",
  "1866년 8월 14일",
  "1919년 2월 20일",
  "1866년 10월 1일",
];
const resultContent = (resultDate) => `
  <div class="result-content">
    <h1>계산 결과</h1>
    <p>
      별자리 계산 결과는
      <br />
      <strong>${resultDate}</strong>
      <br />
      입니다.
    </p>
    <button class="controller" id="submit-button">완료</button>
  </div>
`;

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
