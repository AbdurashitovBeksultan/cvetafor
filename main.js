const circles = document.querySelectorAll(".cricle");
console.log(circles);
let activeLight = 0;

setInterval(() => {
    changLight();
},1500)

function changLight() {
    circles[activeLight].className = 'cricle';
    activeLight++;

    if(activeLight > 2) {
        activeLight = 0;
    }

    const currentLight =  circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute
        ("color"))
}