const section = document.querySelector("section");
const content = document.querySelector(".content");

let counter = 0;
const maxValue = 100;
const clearTimer = setInterval(() => {
    if(counter === maxValue){
        clearInterval(clearTimer);
        section.style.backdropFilter = `blur(${maxValue - counter}px)`;
        return content.innerHTML = "";
    }
    counter += 1;
    content.innerHTML = counter + "%";
    content.style.opacity = Math.abs(maxValue - counter) / maxValue;
    section.style.backdropFilter = `blur(${maxValue - counter}px)`;
}, 10);
