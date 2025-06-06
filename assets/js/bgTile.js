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
  });
  