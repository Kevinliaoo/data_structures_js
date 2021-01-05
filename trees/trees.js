class Node {
    constructor(value) {
        this.left = null; 
        this.right = null; 
        this.value = value; 
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.nodes = 0;
    }
    insert(value) {
        const newNode = new Node(value); 

        if (this.root === null) {
            this.root = newNode; 
            this.nodes ++; 
        } else {
            let currentNode = this.root; 
            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        this.nodes ++;
                        currentNode.left = newNode; 
                        return this; 
                    }
                    currentNode = currentNode.left;
                } else if (value === currentNode.value) {
                    return; 
                } else {
                    if(!currentNode.right) {
                        this.nodes ++;
                        currentNode.right = newNode; 
                        return this; 
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    search(value, returnParent=false) {
        let currentNode = this.root; 
        let parent = null;

        while(currentNode != null) {
            if (currentNode.value === value) {
                if (returnParent) {
                    return [parent, currentNode];
                }
                return currentNode
            } 
            parent = currentNode;
            if (value < currentNode.value) {
                currentNode = currentNode.left; 
            }
            else {
                currentNode = currentNode.right; 
            }
        }
        return null; 
    }
    delete(value) {
        const [parent, node] = this.search(value, true); 
        if(node === null) return; 
        else if(node === tree.root) return;
        else if(node.left === null && node.right === null) {
            if(parent.left === node) parent.left = null; 
            else parent.right = null;
        }
        else if(node.right != null && node.left === null) {
            if(parent.right === node) parent.right = node.right;
            else parent.left = node.right;
        }
        else if(node.right === null && node.left != null) {
            if(parent.right === node) parent.right = node.left; 
            else parent.left = node.left;
        }
        else if(node.right != null && node.left != null) {
            const lowestRightNode = this.searchLowest(node.right).value; 
            this.delete(lowestRightNode);
            node.value = lowestRightNode; 
        }
        this.nodes --;
        return this;
    }
    searchLowest(rootNode) {
        if(rootNode.left === null) return rootNode;
        else return this.searchLowest(rootNode.left);
    }
    inOrder(root=this.root) {
        if(root.left != null) {
            var left = this.inOrder(root.left);
        }
        if(root.right != null) {
            var right = this.inOrder(root.right);
        }
        if(root.right === null && root.left === null) {
            return root;
        }

        let res = [];
        if(left) res = res.concat(left); 
        res.push(root); 
        if(right) res = res.concat(right); 

        return res;
    }
    convertToLeafNode(node) {
        node.right = null; 
        node.left = null;
    }
    balance(nodesList=this.inOrder(this.root)) {

        if (nodesList.length === 1) {
            this.convertToLeafNode(nodesList[0]);
            return nodesList[0];
        }
        else if(nodesList.length === 2) {
            nodesList[0].right = nodesList[1]; 
            this.convertToLeafNode(nodesList[1]);
            return nodesList[0];
        }
        else if(nodesList.length === 3) {
            nodesList[1].left = nodesList[0]; 
            nodesList[1].right = nodesList[2];
            this.convertToLeafNode(nodesList[0]);
            this.convertToLeafNode(nodesList[2]);
            return nodesList[1];
        }
        else {
            const midPoint = Math.floor(nodesList.length / 2);
            // Update root
            if (nodesList.length === this.nodes) this.root = nodesList[midPoint];
            const leftSubtree = this.balance(nodesList.slice(0, midPoint)); 
            const rightSubtree = this.balance(nodesList.slice(midPoint+1));
            nodesList[midPoint].left = leftSubtree; 
            nodesList[midPoint].right = rightSubtree; 
            return nodesList[midPoint];
        }
    }
}