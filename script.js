const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


window.addEventListener("load", main)
setInterval(set_time, 1000)

function main() {
    set_time()
    set_date()
}

function set_time() {
    const d = new Date()
    // Ensure numbers are always two digits
    const hour = ("0" + d.getHours()).slice(-2)
    const minute = ("0" + d.getMinutes()).slice(-2)
    const seconds = ("0" + d.getSeconds()).slice(-2)

    const formatted_time = `${hour}:${minute}:${seconds}`
    document.getElementById("time").innerHTML = formatted_time
}

function set_date() {
    const d = new Date()
    const year = d.getFullYear()
    const month = months[d.getMonth()]
    const date = d.getDate()
    const weekday = weekdays[d.getDay()]

    const formatted_day = `${weekday} ${month} ${date}, ${year}`
    document.getElementById("date").innerHTML = formatted_day
}
