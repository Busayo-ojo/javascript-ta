// complete the function
function palindrom(str) {
  // code goes here
  function palindrome(str) {
    var lowerCaseString = str.toLowerCase().replace(/[^A-Za-z0–9]/g, '');
    var reverseString = lowerCaseString.split('').reverse().join('');
    return reverseString === lowerCaseString;
  }

  const result = palindrome("racecar");
  console.log(result);
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
