const Cal = ['<i class="fa fa-solid fa-user fa-group"></i> 16-32 Years',
             '<i class="fa fa-regular fa-globe"></i> 87 Countries',
             '<i class="fa fa-solid fa-check"></i> 99K Followers',
             '<i class="fa fa-solid fa-share"></i>  201K Reposts',
             '<i class="fa fa-solid fa-heart"></i> 1.2M Likes',
             '<i class="fa fa-solid fa-play"></i>  2.54M Listeners'];

const Songs = [ {AudioTitle: 'Out of this World',Thumbnail:`C:/Users/kumar/Downloads/universe.jpg`, Audio_file:'C:/Users/kumar/Downloads/Out-Of-My-Mind(PagalWorlld.Com).mp3', Artist: "Aperio, Loki", CurrentTime:'1:25', AudioDuration:'9:14', id:"IND6"},
                {AudioTitle: 'Up and Down',Thumbnail:`C:/Users/kumar/Downloads/newyorrk.jpg`, Audio_file:'C:/Users/kumar/Downloads/Out-Of-My-Mind(PagalWorlld.Com).mp3', Artist: "Aperio", CurrentTime:'3:20',AudioDuration:'5:54', id:"IND5"},
                {AudioTitle: 'Rise Them',Thumbnail:`C:/Users/kumar/Downloads/sunset.jpg`, Audio_file:'C:/Users/kumar/Downloads/Out-Of-My-Mind(PagalWorlld.Com).mp3', Artist: "Netsky, Aperio (ft. Emy Wax)", CurrentTime:'6:05', AudioDuration:'6:44', id:"IND4"},
                {AudioTitle: 'Raindrops',Thumbnail:`C:/Users/kumar/Downloads/raindrops-on-leaf.jpg`, Audio_file:'C:/Users/kumar/Downloads/Out-Of-My-Mind(PagalWorlld.Com).mp3', Artist: "Aperio", CurrentTime:'5:35', AudioDuration:'8:24', id:"IND3"},
                {AudioTitle: 'Out of My Mind - Aperio Mix',Thumbnail:`C:/Users/kumar/Downloads/SteelPlant.jpg`, Audio_file:'C:/Users/kumar/Downloads/Out-Of-My-Mind(PagalWorlld.Com).mp3', Artist: "London Electricity, Aperio", CurrentTime:'00:25', AudioDuration:'2:14', id:"IND2"},
                {AudioTitle: 'Like It - Original Mix', Thumbnail:`C:/Users/kumar/Downloads/WATERFALL.jpg`, Audio_file:'C:/Users/kumar/Downloads/Out-Of-My-Mind(PagalWorlld.Com).mp3', Artist: "Aperio, Urbandawn", CurrentTime:'3:52', AudioDuration:'3:54', id:"IND1"},
                ];

                
var dynamic = document.querySelector('.Stats');

for (var a = 0; a < Cal.length; a++)
{
  var fetch = document.querySelector('.Stats').innerHTML;
  
  dynamic.innerHTML = `<div id="count${a}" class="Stats">
                            <div class="Card-body">
                              <div class="Card-text">
                                            <p id="persons${a}"><span style="color:gray"><br>Total</span><br><br>${Cal[a]}</p>
                                    </div>
                                </div>
                      </div>` + fetch;
}

var Profiles = document.querySelector('.Bottomnav');

let cardId = '';
    
for (var b = 0; b < Songs.length; b++)
{
      var Take = document.querySelector('.Bottomnav').innerHTML;
      
      Profiles.innerHTML = `<div id="cards${b}" class="Card" onclick="myFunction(Songs[${b}].id)">
                                <div class="CardStructure">
                                    <div class="Card-Image">
                                    <img src=${Songs[b].Thumbnail} alt="Card image" style="width:100%; height:120px; border-radius:4px" >
                                        <div class="Card-content">
                                             <p id="audio${b}"><b>${Songs[b].AudioTitle}</b><br>${Songs[b].Artist}</p>
                                        </div>
                                    </div>
                                </div>
                          </div>` + Take;
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

var MusicContent = document.querySelector('.Bottom-player');

const myFunction = (value) => {
    console.log(value);
    cardId = value;

for( x = 0; x < Songs.length; x++)
{
    var Music = document.querySelector('.Bottom-player').innerHTML;

    if( cardId == Songs[x].id)
    {
      MusicContent.innerHTML = `<div id="cards${x}">
                                    <img src=${Songs[x].Thumbnail} style="width:45px; height:45px; margin:15px; border-radius:5px;">
                                             <p id="audio${x}" style="margin-top:-60px; margin-left:90px; color:white; font-family:Trebuchet MS; font-size:14px; overflow:hidden;"><b>${Songs[x].AudioTitle}</b><br>${Songs[x].Artist}</p>
                                                    <div class="Icons">
                                                    <i class="fa fa-solid fa-step-backward"></i>
                                                    <i class="fa fa-sharp fa-solid fa-pause" style="color:rgb(231, 114, 4)"></i>
                                                    <i class="fa fa-solid fa-step-forward"></i>
                                                    <span class="current-time">${Songs[x].CurrentTime}</span>&nbsp;&nbsp;&nbsp;
                                                    <input type="range" value="${100 * Songs[x].CurrentTime / Songs[x].AudioDuration}">
                                                    <span class="Total-time">${Songs[x].AudioDuration}</span>
                                                    <i class="fa fa-volume-off"></i>
                                                    <i class="fa fa-solid fa-rotate-left"></i>
                                                    </div>
                                             </div>          
                                    </div>
                          </div>`;
    }
}
}