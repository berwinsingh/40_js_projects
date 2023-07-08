const video = document.getElementById("bg-video");
const playPause = document.getElementById("play");
const ionIcon = document.querySelector("ion-icon");

playPause.addEventListener("click",()=>{
    if(video.paused){
        video.play();
        ionIcon.setAttribute("name", "play-outline");
    }
    else{
        video.pause();
        ionIcon.setAttribute("name", "pause-outline");
    }
})