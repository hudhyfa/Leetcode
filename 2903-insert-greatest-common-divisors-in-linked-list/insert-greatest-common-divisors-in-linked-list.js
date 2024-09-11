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
var insertGreatestCommonDivisors = function (head) {
    if (!head.next) return head;

    let curr = head;
    while (curr && curr.next) {
        let gcdVal = gcd(curr.val, curr.next.val);
        let gcdNode = new ListNode(gcdVal, curr.next);
        curr.next = gcdNode;
        curr = curr.next.next;
    }

    return head;

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
};