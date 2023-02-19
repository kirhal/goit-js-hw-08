import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  width: 640,
  byline: false,
  controls: false,  
});

player.on('play', function () {
  console.log('played the video!');
});
