const userNumOE = prompt("Scegli, pari o dispari?");
console.log(userNumOE);

const userChoice = parseInt(prompt("Scegli un numero tra 1 e 5."))
console.log(userChoice);

let deepBlueNum = randomNumberOneFive(1 , 5)
console.log("DeepBlue ha fatto" + deepBlueNum);
alert("DeepBlue ha fatto" + deepBlueNum)

let somma = userChoice + deepBlueNum;
console.log(somma)

const risultato = result
console.log("Risultato:", risultato);


if (userChoice === risultato) {
    console.log("Ha vinto il giocatore");
} else {
    console.log("Ha vinto DeepBlue.");
}


function randomNumberOneFive(min, max) {

    let result = Math.floor( Math.random() * (max - min +1) ) + min;

    return result;
}


function result(num) {
    if (num % 2 === 0) {
        
        return "pari";
    }else{

    return "dispari";
  }
}
