/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function nodesBetweenCriticalPoints(head) {
    let firstIdx = -1;
    let prevIdx = -1;
    let minDistance = Infinity;
    let maxDistance = -1;

    let prevNode = head;
    let curr = head.next;
    let idx = 1;

    while (curr.next !== null) {
        const next = curr.next;
        const isMax = curr.val > prevNode.val && curr.val > next.val;
        const isMin = curr.val < prevNode.val && curr.val < next.val;

        if (isMax || isMin) {
            if (firstIdx === -1) {
                firstIdx = idx;
            } else {
                minDistance = Math.min(minDistance, idx - prevIdx);
                maxDistance = idx - firstIdx;
            }
            prevIdx = idx;
        }

        prevNode = curr;
        curr = next;
        idx++;
    }

    if (maxDistance === -1) return [-1, -1];
    return [minDistance, maxDistance];
}