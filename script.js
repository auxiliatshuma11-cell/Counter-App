
let count = 0;

const number = document.getElementById("count");
const Increase = document.getElementById("Increase");
const Reset = document.getElementById("Reset");

Increase.addEventListener("click", function() {
    count = count + 1;
    number.textContent = count;
});

Reset.addEventListener("click", function() {
    count = 0;
    number.textContent = count;
});