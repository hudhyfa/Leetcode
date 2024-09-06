/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let numSet = new Set(nums);
    
    while(head && numSet.has(head.val)) {
        head = head.next;
    }
    
    if(!head) return null;

    let curr = head;
    while(curr && curr.next) {
        if(numSet.has(curr.next.val)) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};