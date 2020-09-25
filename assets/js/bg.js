const body = document.querySelector("body");

const IMG_NUM = 6;




function callImage(imgNumber){
    const image = new Image();
    image.src = `../assets/images/${imgNumber + 1 }.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}


function genRandom (){
    const number = Math.floor(Math.random()*IMG_NUM);
    return number;
    
}


function init(){
    const ranNum = genRandom();
    callImage(ranNum)

}
init();