// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){ // next is defaulted to null
        this.data = data; // assign the data to current data
        this.next = next; //assign the data to the next property
        
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    size(){
        let counter = 0;
        let node = this.head;

        while(node){
            counter ++;
            node = node.next;
        }
        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if (!this.head){
            return null;
        }

        let node = this.head;
        while(node){
            if(!node.next){
                return node;
            }
            node = node.next
        }
    }

    clear(){
        this.head = null;
    }
}

module.exports = { Node, LinkedList };
