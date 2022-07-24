const date = document.querySelector(".date");

const ANSWER_PUZZLE_STRING = "123450000";
const ANSWER_DATE = "1294년 10월 1일";

const getCurrentBoardStatus = (slotArray) =>
  slotArray
    .flat()
    .map((ele) => Number(ele.firstChild?.dataset.index) || 0)
    .join("");

const checkAnswer = (slotArray) =>
  getCurrentBoardStatus(slotArray) === ANSWER_PUZZLE_STRING;

export const handleAnswer = (slotArray) => {
  if (checkAnswer(slotArray)) {
    date.textContent = ANSWER_DATE;

    const submitButton = document.querySelector("#submit-button");
    submitButton.disabled = false;
    submitButton.textContent = "날짜를 찾았다!";
    return;
  }
  date.textContent = "????년 ??월 ??일";
};
