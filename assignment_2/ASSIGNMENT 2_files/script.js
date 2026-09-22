// get video element and store it in "video" variable

// 
const playPauseBtn = document.querySelector("#play-pause-btn");


const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");

// Volume control
const volume = document.querySelector("#volume");
volume.addEventListener("input", function () {
  video.volume = volume.value;
});

// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);

function togglePlayPause() {

  const video = document.getElementById("custom-video-player");
    const audio = document.getElementById("mode-audio");
    const playPauseImg = document.getElementById("play-pause-img");

    video.addEventListener("timeupdate", updateProgressBar);
  if (video.paused) {
        video.play();
        audio.play();
    playPauseImg.src = "ASSIGNMENT 2_files/images/play--v1.png";
  } else {
    video.pause();
    audio.pause();
    playPauseImg.src = "ASSIGNMENT 2_files/images/pause--v1.png";
  }
}
function updateProgressBar() {
  const video =document.getElementById("custom-video-player");
  const progressBar = document.getElementById("progress-bar-fill");

  if (video.duration) {
    const value = (video.currentTime / video.duration) * 100;
    progressBar.style.width = value + "%";
  }
}
// Add other functionalities here
function showPage(page) {

  const video =document.querySelector("#custom-video-player");
  const videoSource = document.querySelector("#video-source");
  const audio = document.querySelector("#mode-audio");
  const audioSource = document.querySelector("#audio-source");
   
  document.body.classList.remove(
  "nature-theme",
  "study-theme",
  "creative-theme",
  "home-theme"
  )

  if (page ==="nature") {
    document.body.classList.add("nature-theme");
     videoSource.src = "ASSIGNMENT 2_files/video/nature.mp4";
    audioSource.src = "ASSIGNMENT 2_files/audio/nature_music.mp3";
   
  
  }

  else if (page === "study") {
    document.body.classList.add("study-theme");
      videoSource.src = "ASSIGNMENT 2_files/video/study.mp4";
    audioSource.src = "ASSIGNMENT 2_files/audio/study_music.mp3";
  
  }

  else if (page === "creative"){
    document.body.classList.add("creative-theme");
    videoSource.src = "ASSIGNMENT 2_files/video/creative.mp4";
    audioSource.src = "ASSIGNMENT 2_files/audio/creative_music.mp3";
    

  }

  else if (page ==="home") {
    document.body.classList.add("home-theme");
    videoSource.src = "ASSIGNMENT 2_files/video/midnight.mp4";
    audioSource.src = "ASSIGNMENT 2_files/audio/midnight_music.mp3";
    
      
  }
  video.load();
    audio.load();
    video.currentTime = 0;
  document.getElementById("progress-bar-fill").style.width = "0%";
}
