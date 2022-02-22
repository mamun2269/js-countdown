

let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minutesItem = document.querySelector("#minutes");
let secondItem = document.querySelector("#second");


let countDown =()=>{
    let futureDate = new Date(" 1 Jan 2023 ");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;



    let days= Math.floor(myDate / 1000 /60/ 60/24 );
    let hours= Math.floor(myDate / 1000 /60/ 60) % 24;
    let minutes= Math.floor(myDate / 1000 /60) % 60;
    let second= Math.floor(myDate / 1000) % 60;


    daysItem.innerHTML=days;
    hoursItem.innerHTML=hours;
    minutesItem.innerHTML=minutes;
    secondItem.innerHTML=second;
}

countDown();
setInterval( countDown, 1000);