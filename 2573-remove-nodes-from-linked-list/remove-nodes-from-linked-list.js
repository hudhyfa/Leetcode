/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
    let curr = head;
    let prev = null;
    while(curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    let currPrev = prev;
    while(prev && prev.next) {
        if(prev.next.val < prev.val) {
            let nextGreaterNode = prev.next;
            while(nextGreaterNode && nextGreaterNode.val < prev.val) {
                nextGreaterNode = nextGreaterNode.next;
            }
            prev.next = nextGreaterNode;
            prev = prev.next;
        } else {
            prev = prev.next;
        }
    }
    
    curr = currPrev;
    prev = null;
    while(curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    head = prev;
    return head;
};