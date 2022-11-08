

//codice buono ma no
//const splitWord = testWord.split("");
//console.log(splitWord);

//let reverseWord = splitWord.reverse();
//console.log(reverseWord);

//const assemble = reverseWord.join("")
//console.log(assemble)


const word = prompt("Inserisci una parola");
console.log(word)
const revertedWord = wordReverse(word);
console.log(revertedWord)

if (word == revertedWord) {
    console.log(word + ": la parola è palindroma!");
    alert( word + ": la parola è palindroma!")
} else {
    console.log( word + ": la parola non è palindroma.");
    alert( word + " diventa " + revertedWord + ": la parola non è palindroma.");
}

function wordReverse(word) {

    let reverse = "";

    for (let i = word.length - 1; i >= 0; i-- ) {

        reverse += word[i];

    }

    return reverse;
}














