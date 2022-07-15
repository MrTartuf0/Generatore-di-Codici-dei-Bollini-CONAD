let container = document.querySelector(".qr-container")
let stringQR = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.conad.it/carte-e-premi/collezione-mandarina/concorso/?aWorldCode="
let characters = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ] 

for(let j=0 ; j<100 ; j++){
    let stringCode = ""
    for(let i=0 ; i<6 ; i++){
        let singleChar = characters[Math.floor(Math.random() * 36)]
        stringCode += singleChar
    }
    
    let element = document.createElement("div")
    element.className = "qr-element"
    
    let qrImage = document.createElement("img")
    qrImage.src = stringQR + stringCode
    
    let textCode = document.createElement("p")
    textCode.innerHTML = stringCode
    
    element.appendChild(qrImage)
    element.appendChild(textCode)
    container.appendChild(element)
    
}