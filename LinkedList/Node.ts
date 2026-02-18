export {}
interface Node<T> {
    value:T;
    next:Node<T> | null;
}
class LinkedListNode<T> implements Node<T> {
    value:T;
    next:Node<T> | null;
    constructor(value:T){
        this.value = value;
        this.next = null;
    }
}


class LinkedList<T> {
    private head:Node<T> | null;
    private tail:Node<T> | null;
    constructor(){
        this.head = null;
        this.tail = null;
    }
    append(value: T) {
        const newNode = new LinkedListNode<T>(value);
        
        if (!this.head) {
            // List is empty - new node becomes both head and tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            // List has nodes - append to tail
            // No need to check this.tail.next - it should always be null
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        // Remove the extra closing brace here
    }
    display(){
        let current =  this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
    find(value: T): boolean {
        let current =  this.head;
        while(current) {
            if(current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    remove(value: T): void {
        // if its first element
        if(this.head?.value === value) {
            // if its only one element
            if(this.head === this.tail) {
                this.head = null;
                this.tail = null;
                return;
            }
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current?.next) {
           if(current.next.value === value) {
            // if its last element
            if(current.next === this.tail) {
                this.tail = current;
                this.tail!.next = null;
                return;
            }
            // if its in the middle
            const temp = current.next;
            current.next = current.next.next;
            temp.next = null;
            
            return;
           }
           current = current.next;
        }
    }

        
}   

const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList);