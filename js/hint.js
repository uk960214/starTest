import { showModal } from "./modal.js";

const header = document.querySelector("header");
const { stage } = document.querySelector(".title")?.dataset;

const starMenu = `
  <div class="modal">
    <div class="modal-backdrop"></div>
    <div class="modal-content">
      <h1>별자리 도감</h1>
      <br />
      <div class="star-grid">
        <div class="star-desc">
          <img src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/y1xXCnpC2ZeOdvhqHqELBw-crab.svg" alt="star1" />
          <p>게자리</p>
        </div>
        <div class="star-desc">
          <img src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/WXCL2ppJMzzrvkMEyHmUYQ-fish.svg" alt="star1" />
          <p>물고기자리</p>
        </div>
        <div class="star-desc">
          <img src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/YDhxWcf2y4Yes6Whb5AZyQ-goat.svg" alt="star1" />
          <p>염소자리</p>
        </div>
        <div class="star-desc">
          <img src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/UZe6IA6awmT1UIVi6mfK9g-lion.svg" alt="star1" />
          <p>사자자리</p>
        </div>
        <div class="star-desc">
          <img src="./images/stars/scale.svg" alt="star1" />
          <p>천칭자리</p>
        </div>
        <div class="star-desc">
          <img src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/kDF4FxhYbsJcP6TaaY8eXw-scorpion.svg" alt="star1" />
          <p>전갈자리</p>
        </div>
        <div class="star-desc">
          <img src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/RNT7wysdK5sT2rCmLuOTXg-sheep.svg" alt="star1" />
          <p>양자리</p>
        </div>
        <div class="star-desc">
          <img src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/sVnzyLl7DKf1kX_-KsopVQ-taurus.svg" alt="star1" />
          <p>황소자리</p>
        </div>
      </div>
      <button class="modal-close-button transparent-button">닫기</button>
    </div>
  </div>
`;

const hintText = [
  "게와 전갈, 염소와 양이 끼리끼리 나란히 어울리는 모습. 물에 사는 것들은 왼쪽 위 높이, 땅에 사는 것들은 오른쪽 아래 낮게 있다.",
  "하늘 한 가운데에 물고기가 있는데 왼쪽에서는 사자가 탐하고 오른쪽에서는 황소가 탐하며 아래에서는 전갈이 한마리 유유히 지나간다",
  "하늘 한 가운데 천칭이 균형을 잡고 있다. 그 하늘의 가장 높은 곳에는 사자와 염소, 양이 순서대로 나란히 서서 이 천칭을 내려다보고 있다.",
  "게와 물고기는 하늘의 가장 높은 곳에 양 끝에, 황소와 양은 하늘의 가장 낮은 곳의 양 끝에",
];

const hintTemplate = (stage) => `
  <div class="hint-content">
    <h1>편지의 내용</h1>
    <p>${hintText[stage]}</p>
  </div>
`;

const handleHintClick = ({ target: { classList: targetClass } }) => {
  if (targetClass.contains("star-sign-button")) {
    showModal(starMenu);
  }

  if (targetClass.contains("clue-button")) {
    showModal(hintTemplate(stage));
  }

  if (
    targetClass.contains("modal-close-button") ||
    targetClass.contains("modal-backdrop")
  ) {
    const modalPlaceholder = document.querySelector(".modal-placeholder");
    const modal = modalPlaceholder.querySelector(".modal");
    modalPlaceholder.removeChild(modal);
  }
};

header.addEventListener("click", handleHintClick);
