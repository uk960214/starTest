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
    window.RealWorld.invoke("closePage");
  },
  submitAction(input) {
    window.RealWorld.invoke("submitAction", input);
  },
};

const submitButton = document.querySelector("#submit-button");
const closeButton = document.querySelector("#close-button");

submitButton.addEventListener("click", () => {
  window.RealWorld.submitAction("success");
});
closeButton.addEventListener("click", () => {
  window.RealWorld.closePage();
});
