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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let minDistance: number | null = null;

    //to track and store the position of critical nodes.
    let firstCriticalNode: number | null = null;
    let lastCriticalNode: number | null = null;
    let followerOfLastCriticalNode: number | null = null;

    let prevVal: number | null = null; // maintains the previous node's value. 
    let cursor: ListNode = head;       // travel the whole linked-list.
    let nodeCount: number = 0;         // will maintain the count of nodes.

    while (cursor) {
        nodeCount += 1;
        if (prevVal && cursor.next) {
            if ((cursor.val > prevVal && cursor.val > cursor.next.val) ||
                (cursor.val < prevVal && cursor.val < cursor.next.val)) {

                if (!firstCriticalNode) {
                    firstCriticalNode = nodeCount;
                    lastCriticalNode = nodeCount;
                    followerOfLastCriticalNode = nodeCount;
                } else {
                    followerOfLastCriticalNode = lastCriticalNode;
                    lastCriticalNode = nodeCount;
                }

                if (lastCriticalNode !== firstCriticalNode) {
                    if (!minDistance) {
                        minDistance = lastCriticalNode - firstCriticalNode;
                    } else {
                        if ((lastCriticalNode - followerOfLastCriticalNode) < minDistance) {
                            minDistance = lastCriticalNode - followerOfLastCriticalNode;
                        }
                    }
                }
            }
        }
        prevVal = cursor.val;
        cursor = cursor.next;
    }
    if (nodeCount < 4) return [-1, -1];

    if (firstCriticalNode && lastCriticalNode) {
        if (firstCriticalNode !== lastCriticalNode) 
            return [minDistance, lastCriticalNode - firstCriticalNode]
    }

    return [-1, -1];
};