class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    
    constructor(){
        this.head = null,
        this.tail =null,
        this.length = 0;
    }

    push(value){
        const node = Node(value);
        // list empty
        if(this.head === null){
            this.head = node;
            this.tail = node;
            this.length++;
            return node;
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    pop(){
        if(this.isEmpty()){
        return null;
        }

        const nodeToRemove = this.tail;

        if(this.head === this.tall){
            this.head = null;
            this.tail = null;
            this.length--;
            return nodeToRemove;
        }

        let currentNode = this.head;
        let secondToLastNode;

        while(currentNode){
            if(currentNode.next === this.tail){
                secondToLastNode = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        secondToLastNode.next = null;

        this.tail = secondToLastNode;
        this.length--;

        return nodeToRemove;

    }

    get(index){
        if(index<0 || index > this.length){
            return null;
        }
        if(this.isEmpty()){
            return null; 
        }

        if (index === 0){
            return this.head;
        }
        
        let current = this.head;
        let iterator = 0;

        while(iterator < index){
            iterator++;
            current = current.next;
        }
        return current;

    }

    delete(index){

        if(index <0 || index >this.length){
            return null;
        }
        
        if(this.isEmpty()){
            return null;
        }

        if(index === 0){
            const nodeToDelete = this.head;
            this.head = this.head.next;
            this.length--;
            return nodeToDelete;
        }

        let current = this.head;
        let previous;
        let interator = 0;

        while (interator < index){
            iterator++;
            previous = current;
            current = current.next;

        }
        const nodeToDelete = current;
        previous.next = current.next;

        if(previous.next===null){
            this.tail = previous;
        }

        this.length--;

        return nodeToDelete;
    }

    isEmpty(){
        return this.lenght===0;
    }

    printList(){
        const nodes = [];
        let current = this.head;
        while(current){
            nodes.push(current.value);
            current = current.next;
        }
        return nodes.join(' -> ')
    }
}


const myList = new LinkedList();
const values = ['a','b','c','d'];
values.forEach(value => myList.push(value));
console.log(myList.printList());
console.log(myList.get(0));