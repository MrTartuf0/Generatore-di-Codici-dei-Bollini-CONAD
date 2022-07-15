let container = document.querySelector(".qr-container");
let stringQR = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.conad.it/carte-e-premi/collezione-mandarina/concorso/?aWorldCode=";
let characters = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ];

for(let j=0 ; j<1000 ; j++){
    let stringCode = "H00000";
    
    console.log(parseInt(stringCode, 36));



   /*
     for(let i=0 ; i<3 ; i++){
        for(let k=0 ; i<){

        }
    }
   */



    let element = document.createElement("div")
    element.className = "qr-element"
    
    let qrImage = document.createElement("img")
    qrImage.className = "qrImg"
    qrImage.src = stringQR + stringCode
    
    let textCode = document.createElement("p")
    textCode.innerHTML = stringCode
    
    element.appendChild(qrImage)
    element.appendChild(textCode)
    container.appendChild(element)
}

let element = document.querySelectorAll(".qr-element");

document.addEventListener('click', function (event) {
    if(event.target.classList.contains('qr-element')) {
        event.target.classList.toggle('clicked');
        event.target.classList.remove('right-clicked');
    }
});

window.addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener('contextmenu', function(ev) {
    if(event.target.classList.contains('qr-element')) {
        event.target.classList.toggle('right-clicked');
        event.target.classList.remove('clicked');
    }
}, false);