const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");

const pop1 = document.querySelector("#pop1");
const pop2 = document.querySelector("#pop2");
const pop3 = document.querySelector("#pop3");
const pop4 = document.querySelector("#pop4");
const pop5 = document.querySelector("#pop5");
const pop6 = document.querySelector("#pop6");


//toggle image visibility

img1.addEventListener("click", () => {
    pop1.classList.remove("hidden");
    img1.classList.add("hidden")
})

img2.addEventListener("click", () => {
    pop2.classList.remove("hidden");
    img2.classList.add("hidden")
})

img3.addEventListener("click", () => {
    pop3.classList.remove("hidden");
    img3.classList.add("hidden")
})

img4.addEventListener("click", () => {
    pop4.classList.remove("hidden");
})

img5.addEventListener("click", () => {
    pop5.classList.remove("hidden");
})

img6.addEventListener("click", () => {
    pop6.classList.remove("hidden");
    img6.classList.add("hidden")
})