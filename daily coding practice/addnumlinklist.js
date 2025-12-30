// You are given the head of two singly linked lists head1 and head2 representing two non-negative integers. You have to return the head of the linked list representing the sum of these two numbers.

// Note: There can be leading zeros in the input lists, but there should not be any leading zeros in the output list.

// Examples:

// Input: 
    
// Output:  1 -> 1 -> 2 -> 2
// Explanation: Given numbers are 123 and 999. There sum is 1122.
    
// Input: 
    
// Output: 7 -> 0 
// Explanation: Given numbers are 63 and 7. There sum is 70.
    
// Constraints:
// 1 ≤ Number of nodes in head1, head2 ≤ 105
// 0 ≤ node->data ≤ 9

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class Solution {
    addTwoLists(head1, head2) {
        // code here
        head1 = this.reverse(head1);
        head2 = this.reverse(head2);

        let carry = 0;
        let dummy = new Node(0);
        let curr = dummy;

        while (head1 || head2 || carry) {
            let sum = carry;

            if (head1) {
                sum += head1.data;
                head1 = head1.next;
            }

            if (head2) {
                sum += head2.data;
                head2 = head2.next;
            }

            carry = Math.floor(sum / 10);
            curr.next = new Node(sum % 10);
            curr = curr.next;
        }

        let result = this.reverse(dummy.next);

        // remove leading zeros
        while (result && result.data === 0 && result.next) {
            result = result.next;
        }

        return result;
    }

    reverse(head) {
        let prev = null, curr = head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}

function createLinkedList(arr) {
    let dummy = new Node(0);
    let curr = dummy;

    for (let val of arr) {
        curr.next = new Node(val);
        curr = curr.next;
    }

    return dummy.next;
}

function printLinkedList(head) {
    let res = [];
    while (head) {
        res.push(head.data);
        head = head.next;
    }
    console.log(res.join(" -> "));
}

// ---------- TEST ----------
let head1 = createLinkedList([1, 2, 3]); // 123
let head2 = createLinkedList([9, 9, 9]); // 999

let sol = new Solution();
let result = sol.addTwoLists(head1, head2);

printLinkedList(result);