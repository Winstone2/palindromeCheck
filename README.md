# palindromeCheck
To check if a given string is a palindrome, we can compare the characters from the beginning with the characters from the end of the string. If all the characters match, the string is a palindrome. We can handle both uppercase and lowercase characters by converting the input string to lowercase before performing the comparison.
Thought Process:

    The function isPalindrome takes a string str as input and checks if it is a palindrome.
    We convert the input string to lowercase using the toLowerCase() method to handle case insensitivity. This ensures that the function works for strings with different cases.
    We remove all non-alphanumeric characters from the string using a regular expression (/[^a-z0-9]/g). This step is optional but helps simplify the comparison by ignoring spaces, punctuation, and other non-alphanumeric characters.
    We use two pointers, i and j, to compare characters from the beginning and the end of the string. We increment i and decrement j in each iteration until they meet in the middle of the string.
    If any pair of characters don't match, we immediately return false, indicating that the string is not a palindrome.
    If all characters match, we return true, indicating that the string is a palindrome.

Edge Cases to Consider:

    Empty String: If the input string is empty, it is considered a palindrome, as it reads the same backward as forward.
    Single-Character String: A single character is considered a palindrome.
    Non-Alphanumeric Characters: The function should handle non-alphanumeric characters by ignoring them during the palindrome check.
    In this example, the isPalindrome function correctly identifies whether the given strings are palindromes or not, handling different cases and ignoring non-alphanumeric characters.
