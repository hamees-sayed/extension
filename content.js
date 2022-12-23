let submitButton = document.querySelector("#btn");

submitButton.addEventListener("click", function() {
  chrome.runtime.sendMessage({ action: "clap" });
});
