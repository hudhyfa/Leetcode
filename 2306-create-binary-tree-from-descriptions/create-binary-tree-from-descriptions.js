/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
  let nodes = {};  
  let rootNodeVal = null;
  let childNodes = new Set();

  for (let desc of descriptions) {
    const parent = desc[0];
    const child = desc[1];
    const isLeft = desc[2];

    
    if (!nodes[parent]) {
      nodes[parent] = new TreeNode(parent);
    }
    if (!nodes[child]) {
      nodes[child] = new TreeNode(child);
    }

    
    if (isLeft) {
      nodes[parent].left = nodes[child];
    } else {
      nodes[parent].right = nodes[child];
    }

    childNodes.add(child);
  }

  for(let node in nodes) {
     if (!childNodes.has(parseInt(node))) {
      rootNodeVal = parseInt(node);
    }
  }
  return nodes[rootNodeVal]; 
};
