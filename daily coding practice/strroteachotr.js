// You are given two strings s1 and s2, of equal lengths. The task is to check if s2 is a rotated version of the string s1.

// Note: A string is a rotation of another if it can be formed by moving characters from the start to the end (or vice versa) without rearranging them.

// Examples :

// Input: s1 = "abcd", s2 = "cdab"
// Output: true
// Explanation: After 2 right rotations, s1 will become equal to s2.
// Input: s1 = "aab", s2 = "aba"
// Output: true
// Explanation: After 1 left rotation, s1 will become equal to s2.
// Input: s1 = "abcd", s2 = "acbd"
// Output: false
// Explanation: Strings are not rotations of each other.
// Constraints:
// 1 ≤ s1.size(), s2.size() ≤ 105
// s1, s2 consists of lowercase English alphabets.

function areRotations(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }   
    const concatenated = s1 + s1;
    return concatenated.includes(s2);
}   
// Example usage:
console.log(areRotations("abcd", "cdab")); // Output: true
console.log(areRotations("aab", "aba"));    // Output: true
console.log(areRotations("abcd", "acbd")); // Output: false 