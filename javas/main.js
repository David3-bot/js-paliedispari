const testWord = prompt("Inserisci una parola:");
console.log(testWord)


const splitWord = testWord.split("");
console.log(splitWord);

let reverseWord = splitWord.reverse();
console.log(reverseWord);

const assemble = reverseWord.join("")
console.log(assemble)


if(testWord == assemble){
    console.log("La parola è palindroma.");
    alert( assemble + ": la parola è palindroma!")
  } else {
    console.log("La parola non è palindroma.");
    alert( testWord + ": la parola non è palindroma.")
}











  
