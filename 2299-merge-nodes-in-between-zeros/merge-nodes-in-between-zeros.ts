/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeNodes(head: ListNode | null): ListNode | null {
    let ronaldinho: ListNode | null = head;
    let messi: ListNode | null = head.next;
    let nonZeroSum: number = 0;
    while(messi) {
        if(messi.val === 0) {
            ronaldinho.val = nonZeroSum;
            ronaldinho.next = messi.next;
            ronaldinho = ronaldinho.next;
            nonZeroSum = 0;
        }
        nonZeroSum += messi.val;
        messi = messi.next;
    }
    return head;
};