class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;
        this.prev = null; 
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value); 
        this.tail = this.head; 
        this.length = 1; 
    }
    append(value) {
        const newNode = new Node(value); 
        newNode.prev = this.tail; 
        this.tail.next = newNode; 
        this.tail = newNode; 
        this.length ++; 
        return this; 
    }
    pop() {
        let newLast = this.tail.prev; 
        this.tail.prev = null;
        newLast.next = null;
        this.tail = newLast;
        this.length --;
        return this; 
    }
    prepend(value) {
        const newNode = new Node(value); 
        newNode.next = this.head; 
        this.head.prev = newNode; 
        this.head = newNode; 
        this.length ++; 
        return this; 
    }
    shift() {
        if(this.length === 1) return; 
        let newHead = this.head.next; 
        newHead.prev = null; 
        this.head.next = null;
        this.head = newHead; 
        this.length --; 
        return this;
    }
    insert(index, value) {
        if (index >= this.length) return this.append(value);
        if (index === 0) return this.prepend(value); 

        let node = this.getNodeAt(index); 
        let newNode = new Node(value); 
        newNode.next = node; 
        newNode.prev = node.prev;
        node.prev.next = newNode; 
        node.prev = newNode;
        this.length ++; 
        return this; 
    }
    delete(index) {
        if (index === 0) return this.shift(); 
        if (index >= this.length) return this.pop(); 

        let node = this.getNodeAt(index);
        node.prev.next = node.next; 
        node.next.prev = node.prev; 
        node.next = null; 
        node.prev = null;
        this.length --; 
        return this; 
    }
    getNodeAt(index) {
        let node = this.head; 
        for (let i = 0; i < index; i++) {
            node = node.next; 
        }
        return node; 
    }
    printList() {
        let pointer = this.head; 
        while(pointer.next != null) {
            console.log(pointer.value); 
            pointer = pointer.next;
        }
        console.log(pointer.value);
    }
}