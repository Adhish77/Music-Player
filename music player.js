const Songs = [ {AudioTitle: 'Out of this World',
                 Thumbnail:`C:/Users/kumar/Downloads/universe.jpg`, 
                 Audio_file:'C:/Users/kumar/Downloads/Faded_192(PaglaSongs).mp3', 
                 Artist: "Aperio, Loki", 
                 CurrentTime:'1:25', 
                 AudioDuration:'9:14', 
                 id:"IND6",
                 AgeGroup:'<i class="fa fa-solid fa-user fa-group"></i> 16-32 Years',
                 Reached: '<i class="fa fa-regular fa-globe"></i> 87 Countries',
                 Following: '<i class="fa fa-solid fa-check"></i> 99K Followers',
                 Reposts: '<i class="fa fa-solid fa-share"></i>  201K Reposts',
                 Likes: '<i class="fa fa-solid fa-heart"></i> 1.2M Likes',
                 Listeners: '<i class="fa fa-solid fa-play"></i>  2.54M Listeners'},
                
                {AudioTitle: 'Up and Down',
                 Thumbnail:`C:/Users/kumar/Downloads/newyorrk.jpg`, 
                 Audio_file:'C:/Users/kumar/Downloads/Love Me Like You Do - Fifty Shades Of Grey-(DJMaza).mp3', 
                 Artist: "Aperio", 
                 CurrentTime:'3:20', 
                 AudioDuration:'5:54', 
                 id:"IND5",
                 AgeGroup: '<i class="fa fa-solid fa-user fa-group"></i> 10-34 Years',
                 Reached: '<i class="fa fa-regular fa-globe"></i> 67 Countries',
                 Following: '<i class="fa fa-solid fa-check"></i> 119K Followers',
                 Reposts: '<i class="fa fa-solid fa-share"></i>  21K Reposts',
                 Likes: '<i class="fa fa-solid fa-heart"></i> 12.6M Likes',
                 Listeners: '<i class="fa fa-solid fa-play"></i>  8.54M Listeners'},

                { AudioTitle: 'Rise Them',
                 Thumbnail:`C:/Users/kumar/Downloads/sunset.jpg`, 
                 Audio_file:'C:/Users/kumar/Downloads/Closer - The Chainsmokers-(DJMaza).mp3', 
                 Artist: "Netsky, Aperio (ft. Emy Wax)", 
                 CurrentTime:'6:05', 
                 AudioDuration:'6:44', 
                 id:"IND4",
                 AgeGroup: '<i class="fa fa-solid fa-user fa-group"></i> 8-32 Years',
                 Reached: '<i class="fa fa-regular fa-globe"></i> 166 Countries',
                 Following: '<i class="fa fa-solid fa-check"></i> 221K Followers',
                 Reposts: '<i class="fa fa-solid fa-share"></i>  21K Reposts',
                 Likes: '<i class="fa fa-solid fa-heart"></i> 9.18M Likes',
                 Listeners: '<i class="fa fa-solid fa-play"></i>  2.9M Listeners'},

                {AudioTitle: 'Raindrops',
                Thumbnail:`C:/Users/kumar/Downloads/raindrops-on-leaf.jpg`, 
                Audio_file:'C:/Users/kumar/Downloads/pagalworld.com.mx-Six Days Remix.mp3', 
                Artist: "Aperio", 
                CurrentTime:'5:35', 
                AudioDuration:'8:24', 
                id:"IND3",
                AgeGroup: '<i class="fa fa-solid fa-user fa-group"></i> 16-22 Years',
                Reached: '<i class="fa fa-regular fa-globe"></i> 17 Countries',
                Following: '<i class="fa fa-solid fa-check"></i> 95K Followers',
                Reposts: '<i class="fa fa-solid fa-share"></i>  501K Reposts',
                Likes: '<i class="fa fa-solid fa-heart"></i> 16.2M Likes',
                Listeners: '<i class="fa fa-solid fa-play"></i>  7.54M Listeners'},

                {AudioTitle: 'Out of My Mind - Aperio Mix',
                Thumbnail:`C:/Users/kumar/Downloads/SteelPlant.jpg`, 
                Audio_file:'C:/Users/kumar/Downloads/295_320(PagalWorld).mp3', 
                Artist: "London Electricity, Aperio", 
                CurrentTime:'00:25', 
                AudioDuration:'2:14', 
                id:"IND2",
                AgeGroup: '<i class="fa fa-solid fa-user fa-group"></i> 36-32 Years',
                Reached: '<i class="fa fa-regular fa-globe"></i> 77 Countries',
                Following: '<i class="fa fa-solid fa-check"></i> 399K Followers',
                Reposts: '<i class="fa fa-solid fa-share"></i>  60K Reposts',
                Likes: '<i class="fa fa-solid fa-heart"></i> 2.2M Likes',
                Listeners: '<i class="fa fa-solid fa-play"></i>  1.4M Listeners'},

                {AudioTitle: 'Like It - Original Mix', 
                Thumbnail:`C:/Users/kumar/Downloads/WATERFALL.jpg`, 
                Audio_file:'C:/Users/kumar/Downloads/Out-Of-My-Mind(PagalWorlld.Com).mp3', 
                Artist: "Aperio, Urbandawn", 
                CurrentTime:'3:52', 
                AudioDuration:'3:54', 
                id:"IND1",
                AgeGroup: '<i class="fa fa-solid fa-user fa-group"></i> 16-38 Years',
                Reached: '<i class="fa fa-regular fa-globe"></i> 24 Countries',
                Following: '<i class="fa fa-solid fa-check"></i> 18K Followers',
                Reposts: '<i class="fa fa-solid fa-share"></i>  201K Reposts',
                Likes: '<i class="fa fa-solid fa-heart"></i> 3.2M Likes',
                Listeners: '<i class="fa fa-solid fa-play"></i>  1.54M Listeners'},
                ];


var Profiles = document.querySelector('.Bottomnav');

let cardId = '';
                    
    for (var b = 0; b < Songs.length; b++)
    {
            var Take = document.querySelector('.Bottomnav').innerHTML;
                      
                Profiles.innerHTML = `<div id="cards${b}" class="Card" onclick="myFunction(Songs[${b}].id)">
                                                <div class="CardStructure">
                                                    <div class="Card-Image">
                                                    <img src=${Songs[b].Thumbnail} alt="Card image" style="width:100%; height:120px; border-radius:4px">
                                                        <div class="Card-content">
                                                             <p id="audio${b}"><b>${Songs[b].AudioTitle}</b><br>${Songs[b].Artist}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                          </div>` + Take;

    } 

const myFunction = (value) => {
    console.log(value);
    cardId = value;
   
var MusicContent = document.querySelector('.Bottom-player');

for( x = 0; x < Songs.length; x++ )
{
    if( cardId == Songs[x].id)
    {
        const parts1 = Songs[x].CurrentTime.split(':');
        
        const mins1 = parts1[0];
        const secs1 = parts1[1];

        console.log(mins1);
        console.log(secs1);
      

        var min1 = mins1*60;
        var sec1 = secs1*1;

        var Add = min1+sec1;
        console.log(Add);

        const parts2 = Songs[x].AudioDuration.split(':');

        const mins2 = parts2[0];
        const secs2 = parts2[1];

        console.log(mins2);
        console.log(secs2);

        var min2 = mins2*60;
        var sec2 = secs2*1;

        var Add1 = min2+sec2;
        console.log(Add1);
     
     
        MusicContent.innerHTML = `<div id="cards${x}">
                                    <img src=${Songs[x].Thumbnail} style="width:45px; height:45px; margin:15px; border-radius:5px;">
                                             <p id="audio${x}" style="margin-top:-60px; margin-left:90px; color:white; font-family:Trebuchet MS; font-size:14px; overflow:hidden;"><b>${Songs[x].AudioTitle}</b><br>${Songs[x].Artist}</p>
                                                    <div class="Icons">
                                                    <i class="fa fa-solid fa-step-backward"></i>
                                                    <i class="fa fa-sharp fa-solid fa-pause" style="color:rgb(231, 114, 4)")></i>
                                                    <i class="fa fa-solid fa-step-forward"></i>
                                                    <span class="current-time"></span>&nbsp;&nbsp;&nbsp;
                                                    <audio id="audio" src="${Songs[x].Audio_file}"></audio>
                                                    <div class="progress_bar" id="progress_bar">
                                                    <div class="progressive" id="progressed">
                                                    </div>
                                                    </div>
                                                    <span class="Total-time"></span>
                                                    <i class="fa fa-volume-off"></i>
                                                    <i class="fa fa-solid fa-rotate-left"></i>
                                                    </div>
                                             </div>          
                                    </div>
                                </div>`;

                          
var audio = document.getElementById("audio");
    audio.play();


// Get the play/pause button element
const playPauseButton = document.querySelector('.fa-pause');

// Get the audio element
const audioElement = document.getElementById('audio');

// Add event listener to the play/pause button
playPauseButton.addEventListener('click', () => {
  if (audioElement.paused) {
    audioElement.play(); // Start playing the audio
    playPauseButton.classList.remove('fa-play');
    playPauseButton.classList.add('fa-pause'); // Update the icon to a pause button
  } else {
    audioElement.pause(); // Pause the audio
    // audioElement.currentTime = 0; // Set the current time to 0 to stop the audio
    playPauseButton.classList.remove('fa-pause');
    playPauseButton.classList.add('fa-play'); // Update the icon to a play button
  }
});


// var audio = document.getElementById('audio');
// var progressBar = document.getElementById('progress_bar');
// var progress = document.getElementById('progressed');

// // Update the current time of the song
// function updateCurrentTime() {
//   var currentTimeElement = document.querySelector('.current-time');
//   currentTimeElement.textContent = formatTime(audio.currentTime);
// }

// // Update the progress bar
// function updateProgressBar() {
//   var progressPercentage = (audio.currentTime / audio.duration) * 100;
//   progress.style.width = progressPercentage + '%';
// }

// // Format the time in MM:SS format
// function formatTime(time) {
//   var minutes = Math.floor(time / 60);
//   var seconds = Math.floor(time % 60);
//   seconds = seconds < 10 ? '0' + seconds : seconds;
//   return minutes + ':' + seconds;
// }

// // Update the current time and progress bar on time update
// audio.addEventListener('timeupdate', function() {
//   updateCurrentTime();
//   updateProgressBar();
// });

// // Set the current time of the song when the progress bar is clicked
// progressBar.addEventListener('click', function(event) {
//   var progressBarWidth = progressBar.offsetWidth;
//   var clickX = event.clientX - progressBar.getBoundingClientRect().left;
//   var currentTime = (clickX / progressBarWidth) * audio.duration;
//   audio.currentTime = currentTime;
// });

var audio = document.getElementById('audio');
var currentTimeElement = document.querySelector('.current-time');
var totalTimeElement = document.querySelector('.Total-time');
var progress = document.getElementById('progressed');

// Update the current time and total time of the song
function updateTimes() {
  currentTimeElement.textContent = formatTime(audio.currentTime);
  totalTimeElement.textContent = formatTime(audio.duration);
}

// Update the progress bar
function updateProgressBar() {
  var progressPercentage = (audio.currentTime / audio.duration) * 100;
  progress.style.width = progressPercentage + '%';
}

// Format the time in MM:SS format
function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return minutes + ':' + seconds;
}

// Update the current time, total time, and progress bar on time update
audio.addEventListener('timeupdate', function() {
  updateTimes();
  updateProgressBar();
});


                        var progressed = document.getElementById("progressed");
                        audio.ontimeupdate = function (e) 
                        {
                            
                            progressed.style.width = Math.floor(audio.currentTime * 100 /audio.duration)+"%";
                        
                        }

                        progress_bar.onclick = function (e) {

                            audio.currentTime = ((e.offsetX/progress_bar.offsetWidth) * audio.duration);    
                        }

}

var dynamic = document.querySelector('.Stats');

for (var a = 0; a < Songs.length; a++)
{                                 
        if(cardId == Songs[a].id)
                dynamic.innerHTML = `<div id="count${a}" class="Stats">
                                        <div class="Card-body">
                                            <div class="Card-text">
                                                 <span id="persons${a}"><span style="color:gray"><br>Listeners</span><br><br>${Songs[a].Listeners}</span>
                                            </div>
                                        </div>
                                        <div class="Card-body">
                                            <div class="Card-text">
                                                 <span id="persons${a}"><span style="color:gray"><br>Likes</span><br><br>${Songs[a].Likes}</span>
                                            </div>
                                        </div>
                                        <div class="Card-body">
                                            <div class="Card-text">
                                                 <span id="persons${a}"><span style="color:gray"><br>Reposts</span><br><br>${Songs[a].Reposts}</span>
                                            </div>
                                        </div>
                                        <div class="Card-body">
                                            <div class="Card-text">
                                                 <span id="persons${a}"><span style="color:gray"><br>Following</span><br><br>${Songs[a].Following}</span>
                                            </div>
                                        </div>
                                        <div class="Card-body">
                                            <div class="Card-text">
                                                 <span id="persons${a}"><span style="color:gray"><br>Reached</span><br><br>${Songs[a].Reached}</span>
                                            </div>
                                        </div>        
                                        <div class="Card-body">
                                            <div class="Card-text">
                                                 <span id="persons${a}"><span style="color:gray"><br>Age Group</span><br><br>${Songs[a].AgeGroup}</span>
                                            </div>
                                        </div> 
                                  </div>`;
}
}
}


let cards = document.querySelectorAll('.Bottomnav');
    
function SearchUsers() 
{
     
    let search_query = document.getElementById("searchbox").value;
      
    for (let i = 0; i < Songs.length; i++) 
    {
        if (Songs[i].AudioTitle.toLowerCase().includes(search_query.toLowerCase())) 
        {
            document.getElementById(`cards${i}`).style.display = "block"
        }   
        else if(Songs[i].Artist.toLowerCase().includes(search_query.toLowerCase()))
        {
            document.getElementById(`cards${i}`).style.display = "block"
        }
        else
        {
            document.getElementById(`cards${i}`).style.display = "none"
        }
    }
}