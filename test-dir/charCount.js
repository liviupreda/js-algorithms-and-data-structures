// Write a function which takes in a string and returns counts of each character in a string

// "abcd"
function charCount(inputString) {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  const inputStringToArr = inputString.split("");
  console.log(inputStringToArr);
  for (let i = 0; i < validCharacters.length; i++) {
    for (let j = 0; j < inputStringToArr.length; j++) {
      if (inputStringToArr[j] === validCharacters[i])
        console.log(inputStringToArr[j]);
    }
  }
}

charCount("abcd");
