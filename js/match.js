const date = document.querySelector(".date");

const { stage } = document.querySelector(".title")?.dataset;

const PUZZLE_ANSWER = ["123450000", "123450000", "123450000", "123450000"];
const RESULT_DATE = [
  "1294년 10월 1일",
  "1866년 8월 14일",
  "1919년 2월 20일",
  "1866년 10월 1일",
];

const getCurrentBoardStatus = (slotArray) =>
  slotArray
    .flat()
    .map((ele) => Number(ele.firstChild?.dataset.index) || 0)
    .join("");

const checkAnswer = (slotArray) =>
  getCurrentBoardStatus(slotArray) === PUZZLE_ANSWER[stage];

export const handleAnswer = (slotArray) => {
  if (checkAnswer(slotArray)) {
    date.textContent = RESULT_DATE[stage];

    const submitButton = document.querySelector("#submit-button");
    submitButton.disabled = false;
    submitButton.textContent = "날짜를 찾았다!";
    return;
  }
  date.textContent = "????년 ??월 ??일";
};
