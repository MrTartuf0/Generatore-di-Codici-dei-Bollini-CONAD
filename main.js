let container = document.querySelector(".qr-container");
let stringQR = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.conad.it/carte-e-premi/collezione-mandarina/concorso/?aWorldCode=";
let characters = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ];
let digits = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" ];

for(let j=0 ; j<100 ; j++){
    let stringCode = "";
    for(let i=0 ; i<6 ; i++){
        let singleChar = characters[Math.floor(Math.random() * 36)];
        stringCode += singleChar;
    }

    let digitsCount = 0;

    for(let i=0 ; i<5 ; i++){
        for(let k=0 ; k<10 ; k++){
            if(stringCode[i] === digits[k]){
                digitsCount += 1;
            }
        }
    }

    console.log(`Numero di numeri nella stringa: ${stringCode} = ${digitsCount}`);

    if(digitsCount !== 0){
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
    else{
        console.log(`${stringCode} è stato IGNORATO`)
    }
}

// H6P7B4
// HSP9D7
// H62Z9U
// HTY4EB
// H7F8NS
// HAJ54V
// HT2NSH
// HT7E6U
// H7Z9UH
