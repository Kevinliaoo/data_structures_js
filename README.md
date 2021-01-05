# Data structures with Javascript

## What is a data structure? 
A data structure is a particular way of organizing, managing and storing data in the computer so that it can be used effectively. 

## How is data stored in the computer? 
The memory can be represented as a huge array of bits, where each bits is a memory slot. Each memory slot saves a piece of information and has an address assigned to it. \
When a piece of data has to be stored in memory, the computer randomly assigns a set of memory addreses where data can be stored properly. 

<img src="https://github.com/Kevinliaoo/data_structures_js/blob/master/assets/memory.png" alt="memory allocation">

## Array
An array is a collection of items stored at contiguous memory locations. 

<img src="https://github.com/Kevinliaoo/data_structures_js/blob/master/assets/array.png" alt="array">

## Hash table 
A hash table is a data structure that has a key: value structure. \
The difference between a hash table and a conventional object in javascript is that in a hash table, the key is hashed throught a hash function and uses that value as the key, and data with the same key value is stored in the same bucket. 

<img src="https://github.com/Kevinliaoo/data_structures_js/blob/master/assets/hash.png" alt="hash table">

## Linked list
A linked list is a data structure similar to the array, but the difference is that data is not stored in a contiguous memory location and the linked list size is scalable. \
Two pieces of information is stored in each fragment (node) of the linked list, the information itself and a pointer to the next fragment, since data is not stored in contiguous memory slots, so extra memory is used to save data. 

<img src="https://github.com/Kevinliaoo/data_structures_js/blob/master/assets/linked.png" alt="linked list"> 

## Stack
A stack is a data structure that follows a particular order in which operations are performed, that order is LIFO (last in first out).

<img src="https://github.com/Kevinliaoo/data_structures_js/blob/master/assets/stack.png" alt="stack">

## Queue
A queue is a similar data structure to a stack, the only difference is that the order in a queue is FIFO (first in first out). 

<img src="https://github.com/Kevinliaoo/data_structures_js/blob/master/assets/queue.png" alt="queue">

## Binary search tree
A tree is a data structure that simulate a hierarchical tree structure. A tree is a collection of nodes where each node contains it's own information and pointers to it's children. \
A binary search tree is a particular type of tree, in which each node can only have two children, where the right child is bigger than the node while the left child is smaller than it. 

<img src="https://github.com/Kevinliaoo/data_structures_js/blob/master/assets/tree.png" alt="binary search tree">

## Graph 

A graph is a data structure consisting on a set of vertices (nodes) and a set of edges which each one connects a pair of nodes. 

<img src="https://github.com/Kevinliaoo/data_structures_js/blob/master/assets/graph.png" alt="graph"> 

## Author 

Kevin Liao - @kevinliaoo