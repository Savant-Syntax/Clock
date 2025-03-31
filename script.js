let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30 + day.getMinutes() * 0.5; // Hours hand movement
    let mm = day.getMinutes() * 6;  // Minutes hand movement
    let ss = day.getSeconds() * 6;  // Seconds hand movement

    hr.style.transform = `rotateZ(${hh}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000);
