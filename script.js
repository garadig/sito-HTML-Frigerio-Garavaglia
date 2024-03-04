document.addEventListener("DOMContentLoaded", function() {
    var whiteText = document.querySelector('.tw');
    var background = document.querySelector('.background');
  
    function checkOverlap() {
      var whiteTextRect = tw.getBoundingClientRect();
      var backgroundRect = background.getBoundingClientRect();
  
      if (
        whiteTextRect.left < backgroundRect.right &&
        whiteTextRect.right > backgroundRect.left &&
        whiteTextRect.top < backgroundRect.bottom &&
        whiteTextRect.bottom > backgroundRect.top
      ) {
        whiteText.classList.add('tb');
      } else {
        whiteText.classList.remove('tb');
      }
    }
  
    document.addEventListener('scroll', checkOverlap);
    window.addEventListener('resize', checkOverlap);
    checkOverlap();
  });