const clockTitle = document.querySelector(".js-clock");


function convertSeconds(ms) {
    return Math.floor(ms / (1000));
}

function convertMinutes(ms) {
    return Math.floor(ms / (1000 * 60));
}

function convertHours(ms) {
    return Math.floor(ms / (1000 * 60 * 60));
}

function convertDays(ms) {
    return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function clock() {
    const today = new Date();
    const christmasDate = new Date(
        today.getFullYear(),
        11,
        25,
        0,
        0,
        0
    );

    if (christmasDate.getTime() - today.getTime() < 0) {
        christmasDate.setFullYear(today.getFullYear() + 1);
    }

    let diff = christmasDate.getTime() - today.getTime();
    const days = convertDays(diff);
    diff -= days * 1000 * 60 * 60 * 24;
    let hours = convertHours(diff);
    diff -= hours * 1000 * 60 * 60;
    let minutes = convertMinutes(diff);
    diff -= minutes * 1000 * 60;
    let seconds = convertSeconds(diff);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    clockTitle.innerText = (`${days}d ${hours}h ${minutes}m ${seconds}s`);
}


clock();
setInterval(clock, 1000);