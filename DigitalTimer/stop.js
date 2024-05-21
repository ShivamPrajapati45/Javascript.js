let time = document.getElementById('time');
let startBtn = document.getElementById('start');

let hrs = 0;
let min = 0;
let sec = 0;
let mil = 0;
let timer = false;

const val = (num) => (num < 10? "0" : "" )+num;

// val(1);
// console.log(val(3));

const start = () => {
    timer = true;
    // console.log(timer);
    timeFunction();
}

const stop = () => {
    timer = false;
    // console.log(timer);
}

const reset = () => {
    timer = false;
    // console.log(timer);
    hrs = 0;
    min = 0;
    sec = 0;
    mil = 0;
    time.innerHTML = `${val(hrs)} : ${val(min)} : ${val(sec)} : ${val(mil)}`;
    // console.log(hrs);
}

const timeFunction = () => {
    if(timer == true){
        startBtn.disabled = true;
        mil++;
        if(mil == 100){
            sec++;
            mil = 0;
        }

        if(sec == 60){
            min++;
            sec = 0;
        }

        if(min == 60){
            hrs++;
            min = 0;
        }

        time.innerHTML = `${val(hrs)} : ${val(min)} : ${val(sec)} : ${val(mil)}`;
        setTimeout("timeFunction()",10);
    }else{
        startBtn.disabled = false;
    }
    

}


