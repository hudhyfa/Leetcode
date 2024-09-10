/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    let results = [];
    let curr = head;
    let length = 1;
    while (curr && curr.next) {
        length += 1;
        curr = curr.next;
    }

    let extras = Math.round(length % k);
    let partLength = Math.floor(length / k);

    let prev = head;
    let temp = null;
    curr = head;
    for(let i = 0; i < k; i++) {
        let len = 1;
        while(len < partLength) {
            if(curr) curr = curr.next;
            len += 1;
        }

        if(extras > 0 && partLength !== 0) {
            if(curr) curr = curr.next;
            extras -= 1;
        }

        let temp = null;
        if(curr) {
            temp = curr.next;
            curr.next = null;
        }

        results.push(prev);
        
        prev = temp;
        curr = temp;
    }

    return results;
};