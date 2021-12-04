/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues(searchStack = [this.root], sum = 0) {
		if (!searchStack.length) return sum;
		const currentNode = searchStack.pop();
		if (!currentNode) return sum;
		sum += currentNode.val;
		searchStack.push(...currentNode.children);
		return this.sumValues(searchStack, sum);
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens(searchStack = [this.root], count = 0) {
		if (!searchStack.length) return count;
		const currentNode = searchStack.pop();
		if (!currentNode) return count;
		if (currentNode.val % 2 === 0) count++;
		searchStack.push(...currentNode.children);
		return this.countEvens(searchStack, count);
	}

	/** numGreater(lowerBound): return a count of the number of nodes
	 * whose value is greater than lowerBound. */

	numGreater(lowerBound, searchStack = [this.root], count = 0) {
		if (!searchStack.length) return count;
		const currentNode = searchStack.pop();
		if (!currentNode) return count;
		if (currentNode.val > lowerBound) count++;
		searchStack.push(...currentNode.children);
		return this.numGreater(lowerBound, searchStack, count);
	}
}

module.exports = { Tree, TreeNode };
