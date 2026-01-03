// Given a linked list containing n head nodes where every node in the linked list contains two pointers:
// (i) next points to the next node in the list.
// (ii) bottom points to a sub-linked list where the current node is the head.
// Each of the sub-linked lists nodes and the head nodes are sorted in ascending order based on their data. Flatten the linked list such that all the nodes appear in a single level while maintaining the sorted order.

// Note:
// 1. ↓ represents the bottom pointer and → represents the next pointer.
// 2. The flattened list will be printed using the bottom pointer instead of the next pointer.

/*
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
    this.bottom = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {Node}
 */

class Solution {
     merge(a, b) {
        if (!a) return b;
        if (!b) return a;

        let result;

        if (a.data < b.data) {
            result = a;
            result.bottom = this.merge(a.bottom, b);
        } else {
            result = b;
            result.bottom = this.merge(a, b.bottom);
        }

        result.next = null;
        return result;
    }

    flatten(root) {
        // Base case
        if (!root || !root.next) {
            return root;
        }

        // Recursively flatten the list on right
        root.next = this.flatten(root.next);

        // Merge current list with flattened right list
        root = this.merge(root, root.next);

        return root;
    }
}

function printFlattenedList(head) {
    let res = [];
    while (head) {
        res.push(head.data);
        head = head.bottom;
    }
    console.log(res.join(" -> "));
}


function Node(x) {
    this.data = x;
    this.next = null;
    this.bottom = null;
}


let head = new Node(5);
head.bottom = new Node(7);
head.bottom.bottom = new Node(8);
head.bottom.bottom.bottom = new Node(30);

head.next = new Node(10);
head.next.bottom = new Node(20);

head.next.next = new Node(19);
head.next.next.bottom = new Node(22);
head.next.next.bottom.bottom = new Node(50);

head.next.next.next = new Node(28);
head.next.next.next.bottom = new Node(35);
head.next.next.next.bottom.bottom = new Node(40);
head.next.next.next.bottom.bottom.bottom = new Node(45);



let sol = new Solution();
let flatHead = sol.flatten(head);
printFlattenedList(flatHead);
