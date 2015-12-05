//Initializes the music player (buzz) and plays the music
var music = new buzz.sound("./sounds/unicycleman.mp3"); //TODO Jungle soundtrack?

//Change the radio image(while hovered) to the one with the mute icon
//$(".music_controller").css('background-image', 'url(img/radio.png)');
//Function to stop music
function toggleMusic(){
  //is music already paused?
  if(!music.isPaused()){
    //pauses the music
    music.pause();
    //changes the background image
    $(this).css("background", "url(img/radio-selected.png)");
    //change the hover css background image next time the radio is hovered
    $(".music_controller").mouseenter(function() {
        $(this).css("background", "url(img/radio-selected.png)");
    }).mouseleave(function() {
         $(this).css("background", "url(img/radio.png)");
    });
  }else{
    music.play().fadeIn().loop();
    //changes the background image
    $(this).css("background", "url(img/radio-selected-mute.png)");
    //change the hover css background image next time the radio is hovered
    $(".music_controller").mouseenter(function() {
        $(this).css("background", "url(img/radio-selected-mute.png)");
    }).mouseleave(function() {
         $(this).css("background", "url(img/radio.png)");
    });
  }
}

function startMusic(){
toggleMusic();
}

//Handles radio onClick to play/pause music
$( ".music_controller" ).click(function() {
toggleMusic();
});


//Handles colorbox calls to show team member bio on page load
$(document).ready(function(){
  $(".inline").colorbox({inline:true, width:"50%",height:"80%"});
  $(document).bind('cbox_open', function() {
    $('html').css({ overflow: 'hidden' });
}).bind('cbox_closed', function() {
    $('html').css({ overflow: '' });
});
  $(".galleryPic").colorbox({rel:'galleryPic'});
  /*
  if($.cookie('the_cookie')=='false'){
    //pauses the music
    music.pause();
    //changes the background image
    $(this).css("background", "url(img/radio-selected.png)");
    //change the hover css background image next time the radio is hovered
    $(".music_controller").mouseenter(function() {
        $(this).css("background", "url(img/radio-selected.png)");
    }).mouseleave(function() {
         $(this).css("background", "url(img/radio.png)");
 //   $.cookie('music_enabled', 'false', { path: '/' });
  }); */

});
