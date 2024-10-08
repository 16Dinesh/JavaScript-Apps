const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click",()=> {
    const word = document.querySelector(".input-text").value;
    let wordLength = word.length;

    let start = word.substring(0, Math.floor(wordLength/2)).toLowerCase();
    let end = word.substring(wordLength - Math.floor(wordLength/2)).toLowerCase();

    let flip = [...end].reverse().join("");
    if(start == flip) {
        result.innerHTML = `${word.toUpperCase()} is a Palindrome`;  
    } else {
        result.innerHTML = `${word.toUpperCase()} is NOT a Palindrome`;
    }
} )