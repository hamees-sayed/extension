var submitButton = document.querySelector("#btn");

submitButton.addEventListener("click", function() {
  chrome.runtime.sendMessage({ action: "playSound" });
});
