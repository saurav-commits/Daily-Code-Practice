// You are given the heads of two non-empty singly linked lists, head1 and head2, that intersect at a certain point. Return that Node where these two linked lists intersect.

// Note: It is guaranteed that the intersected node always exists.

// In the custom input you have to give input for CommonList which pointed at the end of both head1 and head2 to form a Y-shaped linked list.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    getIntersectionNode(head1, head2) {
        if (!head1 || !head2) return null;

        let p1 = head1;
        let p2 = head2;

        // When both pointers are equal, either intersection or null
        while (p1 !== p2) {
            p1 = p1 ? p1.next : head2;
            p2 = p2 ? p2.next : head1;
        }

        return p1; // intersection node
    }
}

function createList(arr) {
    let dummy = new Node(0);
    let curr = dummy;
    for (let val of arr) {
        curr.next = new Node(val);
        curr = curr.next;
    }
    return dummy.next;
}

// Common part
let common = createList([8, 10, 12]);

// List 1
let head1 = createList([3, 6]);
let temp = head1;
while (temp.next) temp = temp.next;
temp.next = common;

// List 2
let head2 = createList([4]);
temp = head2;
while (temp.next) temp = temp.next;
temp.next = common;

// Find intersection
let sol = new Solution();
let intersect = sol.getIntersectionNode(head1, head2);

console.log(intersect.data); // 8
