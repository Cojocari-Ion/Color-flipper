const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById('btn');
const colorCode = document.querySelector(".color");


function myFunction() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    colorCode.style.color = colors[randomNumber];
    
    colorCode.textContent = colors[randomNumber]

    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
    }
}

