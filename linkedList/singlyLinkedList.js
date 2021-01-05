class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = new Node(value); 
        this.tail = this.head; 
        this.length = 1; 
    }
    append(value) {
        const newNode = new Node(value); 
        this.tail.next = newNode; 
        this.tail = newNode; 
        this.length ++; 
        return this; 
    }
    pop() {
        if (this.length === 1) return;

        let [lastNode, node] = this.getNodeAt(this.length-1); 

        lastNode.next = null; 
        this.tail = lastNode;
        this.length --; 
        return this;
    }
    prepend(value) {
        const newNode = new Node(value); 
        newNode.next = this.head; 
        this.head = newNode;
        this.length ++; 
        return this; 
    }
    shift() {
        if (this.length === 1) return; 
        this.head = this.head.next; 
        this.length --;
        return this;
    }
    insert(index, value) {
        if (index >= this.length) return this.append(value);
        if (index === 0) return this.prepend(value); 

        let [prev, node] = this.getNodeAt(index); 

        const newNode = new Node(value); 
        prev.next = newNode; 
        newNode.next = node; 
        this.length ++; 
        return this; 
    }
    delete(index) {
        if (index === 0) return this.shift(); 
        if (index >= this.length) return this.pop(); 

        let [prev, node] = this.getNodeAt(index); 
        prev.next = node.next; 
        this.length --;
        return this;
    }
    getNodeAt(index) {
        let node = this.head; 
        let prev = null; 
        for (let i = 0; i < index; i++) {
            prev = node; 
            node = node.next; 
        }
        return [prev, node]; 
    }
}
