// You are given the head of a singly linked list of positive integers. You have to check if the given linked list is palindrome or not


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    isPalindrome(head) {
        if (!head || !head.next) return true;

        // 1️⃣ Find middle using slow & fast pointers
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // 2️⃣ Reverse second half
        let secondHalf = this.reverse(slow);
        let firstHalf = head;

        // 3️⃣ Compare both halves
        while (secondHalf) {
            if (firstHalf.data !== secondHalf.data) {
                return false;
            }
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }

        return true;
    }

    reverse(head) {
        let prev = null;
        let curr = head;

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

let head = createLinkedList([1, 2, 3, 2, 1]);
let sol = new Solution();

console.log(sol.isPalindrome(head)); // true
