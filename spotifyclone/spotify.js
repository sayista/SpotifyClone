 console.log("Welcome to spotify");
 let songIndex=0;
 let audioElement=new Audio('../spotifyclone/allNeeded/song0.mp3');
 let masterPlay=document.getElementById('masterPlay');
 let myProgressBar=document.getElementById('myProgressBar');
 let gif=document.getElementById('gif');
 let masterSongName=document.getElementById('masterSongName');
 let songs=[
         {songName:"Excuses", filePath:"../spotifyclone/allNeeded/song0.mp3",
         coverPath:"../spotifyclone/allNeeded/cover0.jpg"},
         {songName:"Salam-e-Ishq", filePath:"../spotifyclone/allNeeded/song1.mp3",coverPath:"../spotifyclone/allNeeded/cover1.jpg"},
         {songName:"Main Tera", filePath:"../spotifyclone/allNeeded/song2.mp3",coverPath:"../spotifyclone/allNeeded/cover2.jpg"},
         {songName:"Tuhi Meri Shab", filePath:"../spotifyclone/allNeeded/song3.mp3",coverPath:"../spotifyclone/allNeeded/cover3.jpg"},
         {songName:"Salam-e-Ishq", filePath:"../spotifyclone/allNeeded/song4.mp3",coverPath:"../spotifyclone/allNeeded/cover4.jpg"},
         {songName:"Salam-e-Ishq", filePath:"../spotifyclone/allNeeded/song5.mp3",coverPath:"../spotifyclone/allNeeded/cover5.jpg"},
         {songName:"Salam-e-Ishq", filePath:"../spotifyclone/allNeeded/song6.mp3",coverPath:"../spotifyclone/allNeeded/cover6.jpg"},
         {songName:"Salam-e-Ishq", filePath:"../spotifyclone/allNeeded/song7.mp3",coverPath:"../spotifyclone/allNeeded/cover7.jpg"},
         {songName:"Salam-e-Ishq", filePath:"../spotifyclone/allNeeded/song8.mp3",coverPath:"../spotifyclone/allNeeded/cover8.jpg"},
         {songName:"Salam-e-Ishq", filePath:"../spotifyclone/allNeeded/song9.mp3",coverPath:"../spotifyclone/allNeeded/cover9.jpg"},       
 ]
 let songItems=Array.from(document.getElementsByClassName('songItem'));
 songItems.forEach((element,i)=>{ 
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
 })
 masterPlay.addEventListener('click',()=>{
      if(audioElement.paused ||audioElement.currentTime<=0){
      audioElement.play();   
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle'); 
      gif.style.opacity=1;
      }  
      else{
audioElement.pause();
masterPlay.classList.remove('fa-pause-circle');
masterPlay.classList.add('fa-play-circle');
gif.style.opacity=0;
      }
})
 audioElement. addEventListener('timeupdate',()=>{
         //console.log('time update');
progress=parseInt(( audioElement.currentTime/audioElement.duration)*100)
console.log(progress); 
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
console.log(e.target);
makeAllPlays();

songIndex=parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src=`../spotifyclone/allNeeded/song${songIndex}.mp3`;masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
}) 
})
document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=9)
        {
                songIndex=0;
        }
        else
        songIndex+=1;
        audioElement.src=`../spotifyclone/allNeeded/song${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
 masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0)
        {
                songIndex=0;
        }
        else
        songIndex-=1;
        audioElement.src=`../spotifyclone/allNeeded/song${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
 masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
})

