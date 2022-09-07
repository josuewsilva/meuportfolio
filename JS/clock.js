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

    let currentTime = `${hrs}:${min}:${xsec}`;

    //interacting with the html
    document.getElementById("clock").innerHTML = currentTime;
}

//setting up the interval
setInterval(displayTime, 500)