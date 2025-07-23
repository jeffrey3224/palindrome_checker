let input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

let regex = /[\s\W_]/g;
result.style.display="none";

function getPalindrome () {
  let formattedPalindrome = input.value.replace(regex, '');
  let reversedString = formattedPalindrome.toLowerCase().split('').reverse('').join('');

if (formattedPalindrome=="") {
  alert("Please input a value");
  result.style.display="none";
}
else {
  if (reversedString == formattedPalindrome.toLowerCase()) {
    result.innerText = `${input.value} is a palindrome.`
    result.classList.replace("red-text", "black-text");
  }
  else {
    result.innerText = `${input.value} is not a palindrome.`
    result.classList.replace("black-text", "red-text");
  }
  result.style.display="block";
  console.log(reversedString);
  console.log(`formatted: ${formattedPalindrome.toLowerCase()}`);
}
}

checkButton.addEventListener('click', getPalindrome);