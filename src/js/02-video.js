import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

setVideoTime() 

player.on('timeupdate', throttle(handleData,1000));
    
function handleData(data) {
    const {seconds} = data
    localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
}


function setVideoTime() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY)
   
    if (!savedData) {
    return;
    }
    
    player.setCurrentTime(savedData);    
}
