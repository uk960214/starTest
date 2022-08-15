window.RealWorld = {
  invoke(name, ...params) {
    let callName = name;
    if (window.webkit && window.webkit.messageHandlers) {
      if (params.length === 0) {
        window.webkit.messageHandlers[callName].postMessage("");
      } else {
        window.webkit.messageHandlers[callName].postMessage(...params);
      }
    } else if (window.Android) {
      if (params.length === 0) {
        window.Android[callName]();
      } else {
        window.Android[callName](...params);
      }
    }
  },
  closePage() {
    console.log("page-closed");
    window.RealWorld.invoke("closePage");
  },
  submitAction(input) {
    console.log("submit", input);
    window.RealWorld.invoke("submitAction", input);
  },
};

const app = document.querySelector("#app");

const handleRealWorldButtonClick = ({ target: { id: targetId } }) => {
  if (targetId === "submit-button") {
    window.RealWorld.submitAction("success");
  }
  if (targetId === "close-button") {
    window.RealWorld.closePage();
  }
};

app.addEventListener("click", handleRealWorldButtonClick);

if (window.webkit) {
  const closeButton = document.querySelector("#close-button");
  closeButton.style.marginBottom = "6rem";
}
