const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const clr = document.querySelector(".color");


function randomNum(){
    return Math.floor(Math.random() * hex.length);
}


btn.addEventListener('click',function(){
    console.log(randomNum());
    let hexNum = '#';
    for(let i = 0; i<6; i++){
        hexNum += hex[randomNum()];
        
    }
    console.log(hexNum);
    clr.textContent = hexNum;
    document.body.style.backgroundColor = hexNum;
});