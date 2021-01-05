class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {}; 
    }
    addVertex(node) {
        this.adjacentList[node] = []; 
        this.nodes ++; 
    }
    addEdge(node_1, node_2) {
        if(this.adjacentList[node_1] === undefined || this.adjacentList[node_2] === undefined) return;
        if (!this.adjacentList[node_1].includes(node_2)) {
            this.adjacentList[node_1].push(node_2);
            this.adjacentList[node_2].push(node_1);
        }
        return this; 
    }
    removeEdge(node_1, node_2) {
        if(this.adjacentList[node_1] === undefined || this.adjacentList[node_2] === undefined) return;
        if(this.adjacentList[node_1].includes(node_2)) {
            const index_1 = this.adjacentList[node_2].indexOf(node_1); 
            const index_2 = this.adjacentList[node_1].indexOf(node_2); 

            this.adjacentList[node_2].splice(index_1, 1); 
            this.adjacentList[node_1].splice(index_2, 1); 
        }
        return this; 
    }
}