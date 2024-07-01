// Строка короче 20 символов
checkTheLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkTheLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkTheLength('проверяемая строка', 10); // false

function checkTheLength(String, maxLength) {
  if(String.length <= maxLength) {
    return(true);
  }
  return(false);
}

// Строка является палиндромом
checkToPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checkToPalindrom('ДовОд'); // true
// Это не палиндром
checkToPalindrom('Кекс'); // false

function checkToPalindrom(string) {
  string = string.toLowerCase().replaceAll(' ', '');
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse = reverse + string[i];
  }

  return string === reverse;
}
