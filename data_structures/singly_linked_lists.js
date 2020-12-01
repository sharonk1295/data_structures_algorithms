// ========= SINGLY LINKED LISTS ========== //

// A data structure that contains a HEAD, TAIL, and LENGTH property
// Linked Lists consists of nodes, and each node has a value and a pointer to another node or null (like a train with linked cars)
// NO INDEX TO ACCESS THE ELEMENTS (cant ask for the 5th thing)
// basically, starting from the head, a node points to the next (singly directed) one until you reach the end, which doesnt reference anything so its "points" to NULL
// NO backwards pointer


// piece of data - val
// reference to next node - next

// **** PUSH with Singly Linked Lists ***** // 
class Node{
    constructor (val) {
        this.val = val;
        this.next = null; // bc at the beginning, theres nothing that comes after it
    }
}
// let first = new Node("hi")
// first.next = new Node("there")
// first.next.next = new Node("Sharon")

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.length++
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
}

let list = new SinglyLinkedList()
list.push("hello")
list.push("Sharon")

