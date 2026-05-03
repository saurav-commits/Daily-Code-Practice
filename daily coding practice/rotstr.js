function rotateString(s, goal) {
    if (s.length !== goal.length) return false;
    return (s + s).includes(goal);
}

// Example usage:
console.log(rotateString("abcde", "cdeab")); // Output: true