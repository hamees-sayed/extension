chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "playSound") {
    var audio = new Audio("./cheer.wav");
    audio.play();
  }
});