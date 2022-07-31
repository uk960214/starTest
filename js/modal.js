const modalPlaceholder = document.querySelector(".modal-placeholder");

const ModalTemplate = (content, noClose) => `
  <div class="modal">
    <div class=${noClose ? "modal-backdrop-style" : "modal-backdrop"}></div>
    <div class="modal-content">
      ${content}
    </div>
  </div>
`;

const createModal = (content, noClose) => {
  const modal = document.createElement("template");
  modal.innerHTML = ModalTemplate(content, noClose);
  return modal.content;
};

export const showModal = (content, noClose) => {
  const modal = createModal(content, noClose);
  modalPlaceholder.append(modal);
};
