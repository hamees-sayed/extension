chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "clap") {
    let audio = new Audio("./clap.wav");
    audio.play();
  }
});