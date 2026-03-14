function areIsomorphic(s1, s2) {
    if (s1.length !== s2.length) return false;
    
    const map1 = new Map();
    const map2 = new Map();
    
    for (let i = 0; i < s1.length; i++) {
        const c1 = s1[i];
        const c2 = s2[i];
        
        // If mapping already exists, check consistency
        if (map1.has(c1)) {
            if (map1.get(c1) !== c2) return false;
        } else {
            map1.set(c1, c2);
        }
        
        // Check reverse mapping
        if (map2.has(c2)) {
            if (map2.get(c2) !== c1) return false;
        } else {
            map2.set(c2, c1);
        }
    }
    
    return true;
}

const s1 = "aab", s2 = "xxy";

console.log(areIsomorphic(s1,s2));
