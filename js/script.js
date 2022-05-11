

const musicContainer = document.querySelector(".container")
const playBtn = document.querySelector(".play")
const audio = document.querySelector("#main-audio")
const musicName = document.querySelector(".nome")
const musicArtista = document.querySelector(".artista")
const musicImg = document.querySelector('.img')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const progress = document.querySelector('.progress-bar')
const currentTime = document.querySelector('.corrertime');
const duracao = document.querySelector('.maxtime');



//------------------------------------------------------


// evento troca de musica

let MusicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;


window.addEventListener("load", ()=>{
    loadMusic(MusicIndex);
    playMusic()
})


function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].nome;
    musicArtista.innerText = allMusic[indexNumb - 1].artista;
    musicImg.src = allMusic[indexNumb - 1].src;
    audio.src = allMusic[indexNumb - 1].song;
    duracao.innerText = allMusic[indexNumb - 1].time;
}
 

//------------------------------------------------------


// play

function playMusic(){
    musicContainer.classList.add("paused");
    playBtn.querySelector("i").innerText= "pause";
    audio.play();
 

}
 // pause

 function pauseMusic(){
     musicContainer.classList.remove("paused");
     playBtn.querySelector("i").innerText= "play_arrow";
     audio.pause();

 }

 // evento play pause

playBtn.addEventListener("click", ()=> {
    const isMusicPaused = musicContainer.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();
    playingSong(); 
});



//------------------------------------------------------


 //next

 function nextMusic(){
     MusicIndex++; // acrescenta uma unidade 
     MusicIndex > allMusic.length ? MusicIndex = 1 : MusicIndex = MusicIndex;
     loadMusic(MusicIndex);
     playMusic();


 }

 //prev

 function prevMusic(){
    MusicIndex--; // acrescenta uma unidade 
    MusicIndex < 1 ? MusicIndex = allMusic.length : MusicIndex = MusicIndex;
    loadMusic(MusicIndex);
    playMusic();

}

 
// next event

nextBtn.addEventListener("click", ()=>{
    nextMusic()


});

// prev event
prevBtn.addEventListener("click", ()=>{
    prevMusic()


});



//------------------------------------------------------



// volume

var volIcon = document.querySelector('.volum')
var volBox = document.querySelector('.volume-box')
var volumeRange = document.querySelector('.volume-range')
var volumeDown = document.querySelector('.volume-down')
var volumeUp = document.querySelector('.volume-up')

function handleVolume() {
    volIcon.classList.toggle('active')
    volBox.classList.toggle('active')
}

volumeDown.addEventListener('click', handleVolumeDown);
volumeUp.addEventListener('click', handleVolumeUp);

function handleVolumeDown() {
    volumeRange.value = Number(volumeRange.value) - 20
    audio.volume = volumeRange.value / 100
}
function handleVolumeUp() {
    volumeRange.value = Number(volumeRange.value) + 20
    audio.volume = volumeRange.value / 100
}


//------------------------------------------------------


// repeat

var repIcon = document.querySelector('.repeat')
function handleRepeat() {
    if (audio.loop == true) {
        audio.loop = false
        repIcon.classList.toggle('active')
        nextBtn()
        
    }
    else {
        audio.loop = true
        repIcon.classList.toggle('active')

    }
}


//------------------------------------------------------


// timer

audio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime; 
    const duracao = e.target.duracao; 
  
    let musicCurrentTime = musicContainer.querySelector(".corrertime");

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){ 
      currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
  });


    

  
  


