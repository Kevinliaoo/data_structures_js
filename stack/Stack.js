class Node {
    constructor(value) {
        this.value = value; 
        this.next = null; 
    }
}

class Stack {
    constructor() {
        this.top = null; 
        this.bottom = null; 
        this.length = 0;
    }
    peek() {
        return this.top; 
    }
    pop() {
        if (this.length === 0) return null; 
        const next = this.top;
        this.top = next.next;   
        this.length --; 
        return next; 
    }
    push(value) {
        const newNode = new Node(value); 
        
        if (this.length === 0) {
            this.top = newNode; 
            this.bottom = newNode; 
        } else {
            const holdingPointer = this.top; 
            this.top = newNode; 
            this.top.next = holdingPointer; 
        }
        this.length ++; 

        return this; 
    }
}