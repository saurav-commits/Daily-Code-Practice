class Solution {
    maxCharGap(word) {
        // code here
        const firstIndex = new Map();
        const lastIndex = new Map();
        
        for(let i=0;i<word.length;i++){
            const ch = word[i];
            if(!firstIndex.has(ch)) firstIndex.set(ch,i);
            lastIndex.set(ch,i);
        }
        
        let maxGap =-1;
        let bestChar = null;
        
        for(const ch of firstIndex.keys()) {
            const first = firstIndex.get(ch);
            const last = lastIndex.get(ch);
            
            if(first === last) continue;
            const gap = last - first -1;
            if(gap >maxGap) {
                maxGap = gap;
                bestChar = ch;
            }
            
        }
        return maxGap;
    }
};