/* Given two non-empty strings s1 and s2, consisting only of lowercase English letters, determine whether they are anagrams of each other or not.
Two strings are considered anagrams if they contain the same characters with exactly the same frequencies, regardless of their order.

Examples:

Input: s1 = "geeks" s2 = "kseeg"
Output: true 
Explanation: Both the string have same characters with same frequency. So, they are anagrams.
Input: s1 = "allergy", s2 = "allergyy" 
Output: false 
Explanation: Although the characters are mostly the same, s2 contains an extra 'y' character. Since the frequency of characters differs, the strings are not anagrams. 
Input: s1 = "listen", s2 = "lists" 
Output: false 
Explanation: The characters in the two strings are not the same — some are missing or extra. So, they are not anagrams. */



class Solution {
    areAnagrams(s1, s2) {
        // code here
        let char = {};
        
        if(s1.length !== s2.length){
            return false;
        }
        
        for(let ch of s1){
            char[ch] = (char[ch] || 0) + 1;
        }
        
        for(let ch of s2){
            char[ch] = (char[ch] || 0 ) -1;
        }
        
        for(let value in char){
            if(char[value] !== 0){
                return false;
            }
        }
        return true;
    }
}