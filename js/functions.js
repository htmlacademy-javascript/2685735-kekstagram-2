// Task 1
const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('проверяемая строка', 20); // true
checkStringLength('проверяемая строка', 18); // true
checkStringLength('проверяемая строка', 10); // false

// Task 2
const getNormalizedString = (string) => string.toLowerCase().replaceAll(' ', '');

const isPalindrome = (string) => {
  let reversedString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string.at(i);
  }

  return string === reversedString;
};

const string1 = 'Лёша на полке клопа нашёл ';
const string2 = 'Лёша на пАлке клопа нашёл ';

isPalindrome(getNormalizedString(string1)); // true
isPalindrome(getNormalizedString(string2)); // false
