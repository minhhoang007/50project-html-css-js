const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const musicContainer = $(".music-container");
const playBtn = $("#play");
const nextBtn = $("#next");
const prevBtn = $("#prev");
const audio = $("#audio");
const progress = $(".progress");
const progressContainer = $(".progress-container");
const title = $("#title");
const cover = $("#cover");

// Songs title
const songs = ["hey", "ukulele", "summer"];

// Keep track of songs
let songIndex = 0;

//  Initial load song from dom
loadSong(songs[songIndex]);

// update song detail
function loadSong(song) {
  title.innerText = song;

  audio.src = `sounds/${song}.mp3`;
  cover.src = `images/${song}.png`;
}
// function
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector(" i.fas").classList.remove("fa-play");
  playBtn.querySelector(" i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector(" i.fas").classList.add("fa-play");
  playBtn.querySelector(" i.fas").classList.remove("fa-pause");

  audio.pause();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgess(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
// event listening
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song event
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgess);
audio.addEventListener("ended", nextSong)
