var hour = 0
var min = 0
var sec = 0
var timerInterval
var time = 0

function startTimer(){
    timerInterval = setInterval(timer, 1000)
}

function pauseTimer(){
    clearInterval(timerInterval)
}

function resetTimer(){
    clearInterval(timerInterval)
    hour = 0
    min = 0
    sec = 0
    document.getElementById('timer').innerHTML = '00:00:00'
}

function timer(){
    sec++
    if (sec >= 60){
        min++
        sec = 0
    }

    if (min >= 60){
        hour++
        min = 0
    }
    console.log(zeroFormatation(hour) + ':' + zeroFormatation(min) + ':' + zeroFormatation(sec))
    document.getElementById('timer').innerHTML = zeroFormatation(hour) + ':' + zeroFormatation(min) + ':' + zeroFormatation(sec)
}

function zeroFormatation(number){
    if (number < 10){
        return '0' + number;
    }else{
        return number;
    }
}