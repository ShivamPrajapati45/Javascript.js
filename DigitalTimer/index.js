let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

const time = () => {
    let currentTime = new Date();
    // console.log(currentTime);
    let hours = currentTime.getHours();
    // console.log(hours);
    let text = 'AM';
    if(hours >= 12){
        text = "PM";
        if(hours > 12){
            hours -= 12;
        }
    }
    if(hours === 0){
        hours = 12;
    }
    // console.log(hours);
    hrs.textContent = (hours < 10 ? '0' : '')+hours + ":";
    min.textContent = (currentTime.getMinutes() < 10 ? '0' : '')+currentTime.getMinutes() + ":";
    sec.textContent = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds() + " " + text;
}

setInterval(time, 1000);
time();


//stop Timer

