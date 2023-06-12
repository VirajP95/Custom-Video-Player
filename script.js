const video = document.getElementById("video");
const play = document.getElementById("play");
const stop1 = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play & Pause Video

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Chnage play and pause icon
function updatePlayicon() {
  if (video.paused) {
    play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
  }
}

// Change Playback progress
function updateProgress() {
  return true;
}

//Set video time to progress
function setVideoProgress() {
  return true;
}

// Stop Video using stop button
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//event listners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayicon);
video.addEventListener("play", updatePlayicon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop1.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
