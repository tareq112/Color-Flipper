const color = ['red', 'blue',  "rgba(133,122,200)", "#f15025", '#BADA55','AliceBlue', 'Aquamarine',
               'Azure', 'Cyan', 'Turquoise', 'SlateGrey', 'SkyBlue' ];

const clr = document.querySelector('.color');
const btn = document.getElementById('btn');

function randomNumber(){
    return Math.floor(Math.random() * color.length);
}
btn.addEventListener('click',function(){
    const rnd = randomNumber();
    console.log(rnd);
    clr.textContent = color[rnd];
    document.body.style.backgroundColor  = color[rnd];

})