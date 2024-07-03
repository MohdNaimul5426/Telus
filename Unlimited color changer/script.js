const randomColor=() =>{
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let interValid;
const startChangingColor=() =>{
    if(!interValid){
        interValid=setInterval(changeColor,1000)
    }
}
let changeColor=() =>{
    document.body.style.backgroundColor=randomColor();
}
const stopChangingColor=() =>{
   clearInterval(interValid)
   interValid=null
}


document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)