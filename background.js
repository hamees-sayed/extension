chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "clap") {
    const audio = new Audio("./clap.wav");
    audio.play();
  }
});