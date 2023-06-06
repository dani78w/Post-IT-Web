const video = document.getElementById('miVideo');
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollPosition / (documentHeight - window.innerHeight)) * 100;
    video.currentTime = (scrollPercentage / 100) * video.duration;

})

window.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    video.pause();
  });