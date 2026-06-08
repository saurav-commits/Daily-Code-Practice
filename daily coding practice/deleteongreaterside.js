class Solution {
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

    compute(head) {
        if (!head || !head.next) return head;

        head = this.reverse(head);

        let maxVal = head.data;
        let curr = head;

        while (curr && curr.next) {
            if (curr.next.data < maxVal) {
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
                maxVal = curr.data;
            }
        }

        return this.reverse(head);
    }
}