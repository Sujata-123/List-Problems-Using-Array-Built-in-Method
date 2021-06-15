// Write a function that tests whether a string is a palindrome.
const Palindrome = () => {
  // convert string to an array
  const arrayValues = string.split('');

  // reverse the array values
  const reversed = arrayValues.reverse();

  // convert array to string
  const reverseString = reversed.join('');

  if (string == reverseString) {
    console.log('It is a palindrome');
  } else {
    console.log('It is not a palindrome');
  }
};

//take input
const string = 'madam';
// const string=123
Palindrome(string);
