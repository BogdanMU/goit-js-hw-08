import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALE_STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

setVideoTime(player, localStorage.getItem(LOCALE_STORAGE_KEY))

player.on('timeupdate', throttle(handleData,1000));
    
function handleData(data) {
    const {seconds} = data
    localStorage.setItem(LOCALE_STORAGE_KEY, seconds);
}


function setVideoTime(player, seconds) {

    player.setCurrentTime(seconds);
    
}
