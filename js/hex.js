const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const colorCode = document.querySelector(".color");

function myHexFunction() {
    let hexColor = "#";

    for(let i = 0; i < 6; i++) {
        
        hexColor = hexColor + hex[getRandomNumber()];
    }
    colorCode.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    console.log(hexColor);
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length); 
}