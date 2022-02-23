class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length = this.length + 1;
    }

    pop() {
        const index = this.length - 1;
        const prevNode = this.getNode(index - 1);
        const lastNode = prevNode.next;
        console.log('被移除的元素為: ' + lastNode.data);
        if (lastNode.next === null) {
            prevNode.next = null;
            this.tail = prevNode;
        }
        this.length = this.length - 1;
    } 

    getNode(index) {
        if (index < 0 || index >= this.length) return null;
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex < index) {
            currentIndex = currentIndex + 1;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    getData(index) {
        const node = this.getNode(index);
        return node ? node.data : null;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        console.log('所有元素的數量: ' + this.length);
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        const temp = [];
        let currentNode = this.head;
        return JSON.stringify(currentNode, null, 4);
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.size();

// print all currentNode
console.log(stack.print());