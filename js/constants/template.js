import { hintText } from "./quiz.js";
import { STARS } from "./stars.js";

export const pieceTemplate = ({ url, name, index }) => ` 
<div class="puzzle-container-slot">
  <img
    src=${url}
    alt=${name}
    class="puzzle-piece"
    data-index=${index + 1}
  />
</div>`;

export const hintTemplate = (stage) => `
  <div class="hint-content">
    <h1>편지의 내용</h1>
    <p>${hintText[stage]}</p>
    <details>
      <summary>정답 보기</summary>
      ${answerBoard[stage]}
    </details>
  </div>
`;

export const resultTemplate = (resultDate) => `
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

const starMenuPieces = Object.values(STARS).reduce(
  (template, { url, name }) => `${template}
    <div class="star-desc">
      <img src=${url} alt=${name} />
      <p>${name}</p>
    </div>`,
  ""
);

export const starMenu = `
  <div class="modal">
    <div class="modal-backdrop"></div>
    <div class="modal-content">
      <h1>별자리 도감</h1>
      <br />
      <div class="star-grid">
        ${starMenuPieces}
      </div>
      <button class="modal-close-button transparent-button">닫기</button>
    </div>
  </div>
`;

const answerBoard = [
  `<section class="puzzle-board">
    <div class="puzzle-slot">
      <img
        src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/y1xXCnpC2ZeOdvhqHqELBw-crab.svg"
        alt="crab"
        class="puzzle-piece-static"
        data-index="1"
      />
    </div>
    <div class="puzzle-slot">
      <img
        src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/kDF4FxhYbsJcP6TaaY8eXw-scorpion.svg"
        alt="scorpion"
        class="puzzle-piece-static"
        data-index="3"
      />
    </div>
    <div class="puzzle-slot"></div>
    <div class="puzzle-slot"></div>
    <div class="puzzle-slot"></div>
    <div class="puzzle-slot"></div>
    <div class="puzzle-slot"></div>
    <div class="puzzle-slot">
      <img
        src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/YDhxWcf2y4Yes6Whb5AZyQ-goat.svg"
        alt="goat"
        class="puzzle-piece-static"
        data-index="2"
      />
    </div>
    <div class="puzzle-slot">
      <img
        src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/RNT7wysdK5sT2rCmLuOTXg-sheep.svg"
        alt="sheep"
        class="puzzle-piece-static"
        data-index="4"
      />
    </div>
  </section>`,
  `
    <section class="puzzle-board">
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot">
        <img
          src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/UZe6IA6awmT1UIVi6mfK9g-lion.svg"
          alt="lion"
          class="puzzle-piece-static"
          data-index="2"
        />
      </div>
      <div class="puzzle-slot">
        <img
          src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/WXCL2ppJMzzrvkMEyHmUYQ-fish.svg"
          alt="fish"
          class="puzzle-piece-static"
          data-index="1"
        />
      </div>
      <div class="puzzle-slot">
        <img
          src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/sVnzyLl7DKf1kX_-KsopVQ-taurus.svg"
          alt="taurus"
          class="puzzle-piece-static"
          data-index="4"
        />
      </div>
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot">
        <img
          src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/kDF4FxhYbsJcP6TaaY8eXw-scorpion.svg"
          alt="scorpion"
          class="puzzle-piece-static"
          data-index="3"
        />
      </div>
      <div class="puzzle-slot"></div>
    </section>
  `,
  `
    <section class="puzzle-board">
      <div class="puzzle-slot">
        <img
          src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/UZe6IA6awmT1UIVi6mfK9g-lion.svg"
          alt="lion"
          class="puzzle-piece-static"
          data-index="4"
        />
      </div>
      <div class="puzzle-slot">
        <img
          src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/YDhxWcf2y4Yes6Whb5AZyQ-goat.svg"
          alt="goat"
          class="puzzle-piece-static"
          data-index="3"
        />
      </div>
      <div class="puzzle-slot">
        <img
          src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/RNT7wysdK5sT2rCmLuOTXg-sheep.svg"
          alt="sheep"
          class="puzzle-piece-static"
          data-index="2"
        />
      </div>
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot">
        <img
          src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/jntSLX1b0o5giR86ir20Bg-scale.svg"
          alt="scale"
          class="puzzle-piece-static"
          data-index="1"
        />
      </div>
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot"></div>
    </section>
  `,
  `
    <section class="puzzle-board">
      <div class="puzzle-slot">
        <img
          src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/y1xXCnpC2ZeOdvhqHqELBw-crab.svg"
          alt="crab"
          class="puzzle-piece-static"
          data-index="4"
        />
      </div>
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot">
        <img
          src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/WXCL2ppJMzzrvkMEyHmUYQ-fish.svg"
          alt="fish"
          class="puzzle-piece-static"
          data-index="2"
        />
      </div>
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot">
        <img
          src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/sVnzyLl7DKf1kX_-KsopVQ-taurus.svg"
          alt="taurus"
          class="puzzle-piece-static"
          data-index="3"
        />
      </div>
      <div class="puzzle-slot"></div>
      <div class="puzzle-slot">
        <img
          src="https://realworld.blob.core.windows.net/project-files/u4czzO3QWwtfaj06xZeGHw/RNT7wysdK5sT2rCmLuOTXg-sheep.svg"
          alt="sheep"
          class="puzzle-piece-static"
          data-index="1"
        />
      </div>
    </section>
  `,
];
