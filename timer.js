function qrGenerator(){
    let imgQR = document.querySelector(".imgQR")
    let textCode = document.querySelector(".textCode")
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
        if(digitsCount !== 0){
            imgQR.src = stringQR + stringCode
            textCode.innerHTML = stringCode
        }
    }

    console.log("prova");
}

setInterval(qrGenerator,2500);

 /*
 
 
 
 */