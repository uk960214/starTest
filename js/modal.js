const modalPlaceholder = document.querySelector(".modal-placeholder");

const ModalTemplate = (content) => `
  <div class="modal">
    <div class="modal-backdrop"></div>
    <div class="modal-content">
      <button class="modal-close-button transparent-button">닫기</button>
      ${content}
    </div>
  </div>
`;

const createModal = (content) => {
  const modal = document.createElement("template");
  modal.innerHTML = ModalTemplate(content);
  return modal.content;
};

export const showModal = (content) => {
  const modal = createModal(content);
  modalPlaceholder.append(modal);
};
