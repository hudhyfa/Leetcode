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

    let firstCriticalNode: number | null = null;
    let lastCriticalNode: number | null = null;
    let followerOfLastCriticalNode: number | null = null;

    let prevVal: number | null = null;
    let cursor: ListNode = head;
    let nodeCount: number = 0;
    let result: number[] = [];

    while (cursor) {

        nodeCount += 1;

        if (prevVal && cursor.next) {

            if ((cursor.val > prevVal && cursor.val > cursor.next.val) ||
                (cursor.val < prevVal && cursor.val < cursor.next.val)
            ) {
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
    if(nodeCount < 4) return [-1, -1];

    if(firstCriticalNode && lastCriticalNode) {
        if(firstCriticalNode !== lastCriticalNode) {
            result.push(minDistance);
            result.push(lastCriticalNode - firstCriticalNode);
        }
    }

    return result.length > 0 ? result: [-1, -1];
};