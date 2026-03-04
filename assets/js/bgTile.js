console.log('Script loaded');
document.addEventListener('DOMContentLoaded', function () {
    const bgTiles = [
      'sevenOverlappingCircles',
      'rhombitrihexagonal',
      'tilings',
      'ibnTulun',
      'star-and-rhombus'
    ];
    
    const randomIndex = Math.floor(Math.random() * bgTiles.length);
    const chosenTile = bgTiles[randomIndex];
    const background = `url('/assets/media/${chosenTile}.svg')`;
  
    document.querySelectorAll('.project-tab, .project-nav').forEach(function (el) {
      el.style.backgroundImage = background;
      el.style.backgroundRepeat = 'repeat';

    });
    document.querySelectorAll('.bottom-panel').forEach(function (el) {
      el.style.maskImage = background;
      el.style.maskRepeat = 'repeat';
      el.style.maskSize = 'clamp(30px, 8vw, 60px)';
      el.style.webkitMaskImage = background;
      el.style.webkitMaskRepeat = 'repeat';
      el.style.webkitMaskSize = 'clamp(60px, 9vw, 100px)';

    });
    
  });  