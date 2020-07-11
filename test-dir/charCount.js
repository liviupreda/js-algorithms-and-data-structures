// Write a function which takes in a string and returns counts of each character in a string

// "abcd"
function charCount(inputString) {
  if (typeof inputString !== "string") {
    console.log("Please enter a valid string containing letters");
    return;
  } else {
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputStringToArr = inputString.split("");
    const charCounter = [];
    for (let i = 0; i < validCharacters.length; i++) {
      charCounter.push(0);
    }
    for (let i = 0; i < validCharacters.length; i++) {
      for (let j = 0; j < inputStringToArr.length; j++) {
        if (inputStringToArr[j].toLowerCase() === validCharacters[i]) {
          charCounter[i]++;
        }
      }
    }
    for (let i = 0; i < charCounter.length; i++) {
      if (charCounter[i] > 0)
        console.log(
          `Character ${validCharacters[i]} appears ${charCounter[i]} times`
        );
    }
  }
}

charCount(1);
charCount("Hello wohhrlddd!");
