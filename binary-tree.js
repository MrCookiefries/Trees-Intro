/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
	 * the length of the shortest path from the root to a leaf. */

	minDepth(layerStack = [this.root], depth = 0) {
		if (!this.root) return depth;
		const newLayer = [];
		depth++;
		while (layerStack.length) {
			const currentNode = layerStack.pop();
			if (currentNode.left) newLayer.push(currentNode.left);
			if (currentNode.right) newLayer.push(currentNode.right);
			if (!currentNode.left && !currentNode.right) return depth;
		}
		return this.minDepth(newLayer, depth);
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
	 * the length of the longest path from the root to a leaf. */

	maxDepth(layerStack = [this.root], depth = 0) {
		if (!this.root) return depth;
		const newLayer = [];
		depth++;
		while (layerStack.length) {
			const currentNode = layerStack.pop();
			if (currentNode.left) newLayer.push(currentNode.left);
			if (currentNode.right) newLayer.push(currentNode.right);
		}
		if (!newLayer.length) return depth;
		return this.maxDepth(newLayer, depth);
	}

	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
	 * The path doesn't need to start at the root, but you can't visit a node more than once. */

	// https://www.educative.io/edpresso/the-algorithm-for-the-maximum-sum-in-a-binary-tree
	// ^ December 3rd, 2021
	maxSum() {
		let sum = -Infinity;

		function findSum(startNode) {
			if (!startNode) return 0;
			const leftSum = findSum(startNode.left);
			const rightSum = findSum(startNode.right);
			const returnMax = Math.max(
				startNode.val, Math.max(leftSum, rightSum) + startNode.val
			);
			const max = Math.max(returnMax, startNode.val + leftSum + rightSum);

			if (max > sum) sum = max;

			return returnMax;
		}

		if (!this.root) return 0;
		findSum(this.root);
		return sum;
	}

	/** nextLarger(lowerBound): return the smallest value in the tree
	 * which is larger than lowerBound. Return null if no such value exists. */

	nextLarger(lowerBound, stack = [this.root], smallest = null) {
		if (!stack.length) return smallest;
		const node = stack.pop();
		if (!node) return null;
		if (node.val > lowerBound && (smallest === null || node.val < smallest)) {
			smallest = node.val;
		}
		if (node.left) stack.push(node.left);
		if (node.right) stack.push(node.right);
		return this.nextLarger(lowerBound, stack, smallest);
	}

	// Further study!

	/** areCousins(node1, node2): determine whether two nodes are cousins
	 * (i.e. are at the same level but have different parents. ) */

	areCousins(node1, node2) {

	}

	/** Further study!
	 * serialize(tree): serialize the BinaryTree object tree into a string. */

	static serialize() {

	}

	/** Further study!
	 * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

	static deserialize() {

	}

	/** Further study!
	 * lowestCommonAncestor(node1, node2): find the lowest common ancestor
	 * of two nodes in a binary tree. */

	lowestCommonAncestor(node1, node2) {

	}
}

module.exports = { BinaryTree, BinaryTreeNode };
