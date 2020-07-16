/*
Write a function called isSubsequence which takes in two strings
and checks wether the characters in the first string form a subsequence
of the characters in the second string. In other words, the function
should check whether the characters in the first string appear somewhere
in the second string, without their order changing

Examples:
isSubsequence('hello', 'hello world'); //true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); //false (order matters)
*/

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;

  for (let char1 of str1) {
    for (let char2 of str2) {
      if (char1 === char2) console.log(char1);
    }
  }
}

// console.log(isSubsequence("hello", "hello world"));
isSubsequence("hello", "helloworld"); //true
