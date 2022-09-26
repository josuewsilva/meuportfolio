//Clock Function

function displayTime(){
    //setting up the variables
    let Time = new Date()
    let hrs = Time.getHours();
    let min = Time.getMinutes();
    let sec = Time.getSeconds();

    //putting a zero in front of the seconds
    if (sec > 9){
        var xsec = Time.getSeconds();
    }else{
        var xsec = "0" + Time.getSeconds();
    }

    //putting a zero in front of the minutes
    if (min > 9){
        var xmin = Time.getMinutes();
    }else{
        var xmin = "0" + Time.getMinutes();
    }

    //putting a zero in front of the hours
    if (hrs > 9){
        var xhrs = Time.getHours();
    }else{
        var xhrs = "0" + Time.getHours();
    }

    let currentTime = `${xhrs}:${xmin}:${xsec}`;

    //interacting with the html
    document.getElementById("clock").innerHTML = currentTime;
}

//setting up the interval
setInterval(displayTime, 500)