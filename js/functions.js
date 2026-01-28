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

// Task 3
const getDigitsFromString = (value) => {
  const string = value.toString();
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const number = parseInt(string[i], 10);
    if (!Number.isNaN(number)) {
      result += string[i];
    }
  }

  return parseInt(result, 10);
};

getDigitsFromString('2023 год'); // 2023
getDigitsFromString('ECMAScript 2022'); // 2022
getDigitsFromString('1 кефир, 0.5 батона'); // 105
getDigitsFromString('агент 007'); // 7
getDigitsFromString('а я томат'); // NaN
