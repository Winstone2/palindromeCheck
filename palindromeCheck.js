function isPalindrome(str) {
    // Convert the input string to lowercase to handle case insensitivity
    str = str.toLowerCase();

    // Remove all non-alphanumeric characters using a regular expression
    str = str.replace(/[^a-z0-9]/g, '');

    // Compare characters from the beginning and the end of the string
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false; // If characters don't match, it's not a palindrome
        }
    }

    return true; // All characters match, it's a palindrome
}
console.log(isPalindrome("racecar")); // Output: true (racecar is a palindrome)
console.log(isPalindrome("Hello, World!")); // Output: false (Hello, World! is not a palindrome)
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true (A man, a plan, a canal, Panama is a palindrome)
