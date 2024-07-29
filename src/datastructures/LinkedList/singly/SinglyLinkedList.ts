import SinglyNode from "./SinglyNode";

class SinglyLinkedList<T> {
  private head: SinglyNode<T> | null = null;
  private size: number = 0;

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  append(value: T): void {
    const newNode = new SinglyNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  prepend(value: T): void {
    const newNode = new SinglyNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  deleteHead(): void {
    if (this.head !== null) {
      this.head = this.head.next;
      this.size--;
    }
  }

  deleteTail(): void {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
      this.size--;
      return;
    }
    let current = this.head;
    while (current.next !== null && current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }

  remove(index: number) {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.deleteHead();
      return;
    }
    let current = this.head;
    let i = 0;
    while (i < index - 1) {
      current = current!.next;
      i++;
    }
    current!.next = current!.next!.next;
    this.size--;
  }

  get(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current!.next;
      i++;
    }
    return current!.value;
  }

  toString(): void {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += `${current.value} -> `;
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

export default SinglyLinkedList;