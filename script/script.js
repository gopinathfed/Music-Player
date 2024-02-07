const main1 = document.querySelector('main');
const scrollTop = document.querySelector('.top');
const allTracks = document.querySelector('.all_tracks');
const song1 = document.querySelector('.song-1');
const song2 = document.querySelector('.song-2');
const song3 = document.querySelector('.song-3');
const song4 = document.querySelector('.song-4');
const song5 = document.querySelector('.song-5');

const songHeading = document.querySelector('.song__name');


const back = document.querySelector('.back')

song1.addEventListener('click',()=>{
    main1.scrollTo({top:0,behavior:"smooth"});
    pauseAudio();
    currentSong = 0;
    playAudio();
    songTitle();
})
song2.addEventListener('click',()=>{
    main1.scrollTo({top:0,behavior:"smooth"});
    pauseAudio();
    currentSong = 1;
    playAudio();
    songTitle();
})
song3.addEventListener('click',()=>{
    main1.scrollTo({top:0,behavior:"smooth"});
    pauseAudio();
    currentSong = 2;
    playAudio();
    songTitle();
})
song4.addEventListener('click',()=>{
    main1.scrollTo({top:0,behavior:"smooth"});
    pauseAudio();
    currentSong = 3;
    playAudio();
    songTitle();
})
song5.addEventListener('click',()=>{
    main1.scrollTo({top:0,behavior:"smooth"});
    pauseAudio();
    currentSong = 4;
    playAudio();
    songTitle();
})

allTracks.addEventListener('click',()=> {
    main1.scrollTo({top:750, behavior:"smooth"});
})


let scrollPosition = 0;

scrollTop.addEventListener('click', ()=> {
    main1.scrollTo({top:0,behavior:"smooth"});
})

/* 
main1.addEventListener('click',()=> {
    if(scrollPosition == 0) {
       
    }
    else if(scrollPosition == 1)
    {
        main1.scrollTo({top:0, behavior:"smooth"});
        scrollPosition = 0;
    }
    console.log(scrollPosition)
}) */


const centerButton = document.querySelector('.center__button')
const leftButton = document.querySelector('.left__button')
const rightButton = document.querySelector('.right__button')


const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");


let songs = [];

songs[0] = audio1;
songs[1] = audio2;
songs[2] = audio3;
songs[3] = audio4;
songs[4] = audio5;

let currentSong = 0;

leftButton.addEventListener('click',()=>{
    pauseAudio();
    currentSong--;

    if(currentSong == -1) {
        currentSong = 4;
    }

    playAudio();
    songTitle();

})

rightButton.addEventListener('click',()=>{
    pauseAudio();
    currentSong++;
    if(currentSong == 5) {
        currentSong = 0;
    }

    playAudio();
    songTitle();
})



function playAudio() { 
    songs[currentSong].play();
    songTitle();
}

function pauseAudio() {
    songs[currentSong].pause();
}

function songTitle() {
    switch(currentSong){

        case 0:
            songHeading.textContent = "Oo-Solriya-Oo-Oo-Solriya";
            break;

        case 1:
            songHeading.textContent = "Kodana kodi";
            break;
        case 2:
            songHeading.textContent = "Mascara Pottu";
            break;
        case 3:
            songHeading.textContent = "Meow Meow";
            break;
        case 4:
            songHeading.textContent = "Naan Alana Thamarai";
            break;

    }
}
songTitle();

let play = false;
centerButton.addEventListener('click',()=> {
    if(play){
        playAudio();
        back.style.background = "url('../IMG/icons8-pause-100.png')";
        back.style.backgroundSize = "cover";
    }
    else {
        pauseAudio();
        back.style.background = "url('../IMG/icons8-play-64.png')";
    }

    play = !play;
});


const seekBar = document.getElementById('seekBar');
let duration;



    songs[currentSong].addEventListener('timeupdate', ()=> {

        var percentage = (songs[currentSong].currentTime / songs[currentSong].duration) * 100;
        seekBar.value = percentage;
        console.log(songs[currentSong].currentTime)
    });

    seekBar.addEventListener('change', ()=> {
        var newTime = audio1.duration * (seekBar.value / 100);

        songs[currentSong].currentTime = newTime;
    })
   


