
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
    
}
function decrement() {
    count -= 1;
    countEl.innerText = count;
}
function reset() {
    count = 0;
    countEl.innerText = count;
}


