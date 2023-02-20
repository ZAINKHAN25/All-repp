function displaytime(){
    var datetime = new Date()
    var hrs = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    var mon = datetime.getMonth();
    var mon = mon + mon;
    var day = datetime.getDay();
    var day = day + day;
    var year = datetime.getFullYear();

    var session = document.getElementById(`session`)

    if (hrs >= 12){
        session.innerHTML = `PM`
    }else {
        session.innerHTML = "AM"
    }

    if (hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById(`hours`).innerHTML = hrs
    document.getElementById(`minutes`).innerHTML = min
    document.getElementById(`seconds`).innerHTML = sec
    document.getElementById(`month`).innerHTML = mon
    document.getElementById(`day`).innerHTML = day
    document.getElementById(`year`).innerHTML = year
}

setInterval(displaytime, 100)