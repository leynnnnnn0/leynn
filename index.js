gsap.fromTo(".introduction", {
    opacity: 0,
    duration: 7
}, {
    opacity: 1,
    duration: 5
});

gsap.fromTo(".ufo1", {
    duration: 4,
    x: 500,
    y: 300
}, {
    duration: 4,
    x: 0,
    y: 0,
});


let display = document.querySelector(".display-input");
let output = document.querySelector(".result");
let alignItem = document.querySelector(".align-item-input");
let justify = document.querySelector(".justify-content-input");
let button = document.querySelector(".run-btn");

button.addEventListener("click", () => {
    let displayInput = display.value;
    let alignItemInput = alignItem.value;
    let justifyInput = justify.value;
    if (displayInput === "flex" &&
        alignItemInput === "center" &&
        justifyInput === "space-around") {
        output.classList.toggle("correct");
        gsap.fromTo(
          ".correct",
          {
            duration: 10,
            x: 0,
            y: 0,
          },
          {
            duration: 4,
            x: 150,
            y: 170,
          }
        );
        }
});

