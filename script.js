const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


function playPause(params) {
    if(video.paused){
        video.play();
    } else {
        video.pause
    }     
}

video.addEventListener('click', playPause);
play.addEventListener('click', playPause)
video.addEventListener('pause', updateIcon)

function updateIcon() {
    if (video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play,innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }    
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

stop.addEventListener('click', stopVideo)