// let hr = document.querySelector('#hr');
// let mn = document.querySelector('#mn');
// let sc = document.querySelector('#sc');

// setInterval(() => {
//     let day = new Date();
//     let hh = day.getHours() * 30 + day.getMinutes() * 0.5; // Hours hand movement
//     let mm = day.getMinutes() * 6;  // Minutes hand movement
//     let ss = day.getSeconds() * 6;  // Seconds hand movement

//     hr.style.transform = `rotateZ(${hh}deg)`;
//     mn.style.transform = `rotateZ(${mm}deg)`;
//     sc.style.transform = `rotateZ(${ss}deg)`;
// }, 1000);

let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

// Variables to track cumulative angles to prevent backward jumps
let lastSecondAngle = 0;
let secondRotations = 0;

function updateClock() {
    let day = new Date();
    let ms = day.getMilliseconds();
    
    // Calculate angles
    let hh = day.getHours() * 30 + day.getMinutes() * 0.5 + (day.getSeconds() + ms / 1000) * (0.5 / 60); // Hours hand
    let mm = day.getMinutes() * 6 + (day.getSeconds() + ms / 1000) * (6 / 60); // Minutes hand
    let ss = (day.getSeconds() + ms / 1000) * 6; // Seconds hand

    // Handle second hand crossing 12 (0/360 degrees)
    if (lastSecondAngle > 300 && ss < 60) {
        // When crossing from 59s (354deg) to 0s (0deg), increment rotation count
        secondRotations++;
    }
    lastSecondAngle = ss;

    // Apply cumulative rotation for the second hand
    let cumulativeSecondAngle = (secondRotations * 360) + ss;

    // Update transformations
    hr.style.transform = `rotateZ(${hh}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${cumulativeSecondAngle}deg)`;

    // Request the next frame
    requestAnimationFrame(updateClock);
}

// Start the animation
updateClock();