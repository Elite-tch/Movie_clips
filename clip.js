const swiper = new Swiper('.swiper', {
    autoplay: {
        display: 3000,
        disableOnInteraction: false,

    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


function closeVideo() {
      var videoContainer = document.getElementById('videoContainer');
      var myVideo = document.getElementById('myVideo');

      // Hide the video container
      videoContainer.style.display = 'none';

      // Pause the video
      myVideo.src = '';
    }

    document.getElementById('playButton').addEventListener('click', function() {
      var videoContainer = document.getElementById('videoContainer');
      var myVideo = document.getElementById('myVideo');

      // Show the video container
      videoContainer.style.display = 'block';
myVideo.play();
    });