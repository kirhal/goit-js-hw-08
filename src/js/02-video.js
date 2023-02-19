import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayer = new Player('vimeo-player');

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime !== null) {
  videoPlayer.setCurrentTime(currentTime);
}

videoPlayer.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
