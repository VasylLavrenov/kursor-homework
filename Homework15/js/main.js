'use strict';

console.log('test');


window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
  }, 500);
  }
  
  $(document).ready(function () {
      $('.carousel-inner').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '.bg-arrow_left',
          nextArrow: '.bg-arrow_right'
      })
  })

  $('.carousel-item').slick();
          

 
 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
     player = new YT.Player('video', {
         height: '390',
         width: '640',
         videoId: 'M7lc1UVf-VE',
         events: {
             'onReady': onPlayerReady,
             'onStateChange': onPlayerStateChange
         }
     });
 }

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
     event.target.playVideo();
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
 var done = false;
 function onPlayerStateChange(event) {
     if (event.data == YT.PlayerState.PLAYING && !done) {
         setTimeout(stopVideo, 6000);
         done = true;
     }
 }
 function stopVideo() {
     player.stopVideo();
 }