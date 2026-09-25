class Solution {
    maxHeight(height, width, length) {
        const n = height.length;
        const boxes = [];

        // Generate 3 rotations for every box
        for (let i = 0; i < n; i++) {
            const h = height[i];
            const w = width[i];
            const l = length[i];

            // Rotation 1: h is height
            boxes.push([
                h,
                Math.max(w, l),
                Math.min(w, l)
            ]);

            // Rotation 2: w is height
            boxes.push([
                w,
                Math.max(h, l),
                Math.min(h, l)
            ]);

            // Rotation 3: l is height
            boxes.push([
                l,
                Math.max(h, w),
                Math.min(h, w)
            ]);
        }

        // Sort by base area in decreasing order
        boxes.sort((a, b) => {
            return (b[1] * b[2]) - (a[1] * a[2]);
        });

        const m = boxes.length;

        // dp[i] = maximum stack height with box i at the bottom
        const dp = new Array(m).fill(0);

        let answer = 0;

        // Process from smaller bases to larger bases
        for (let i = m - 1; i >= 0; i--) {
            dp[i] = boxes[i][0];

            for (let j = i + 1; j < m; j++) {
                // j goes on top of i
                if (
                    boxes[j][1] < boxes[i][1] &&
                    boxes[j][2] < boxes[i][2]
                ) {
                    dp[i] = Math.max(
                        dp[i],
                        boxes[i][0] + dp[j]
                    );
                }
            }

            answer = Math.max(answer, dp[i]);
        }

        return answer;
    }
}