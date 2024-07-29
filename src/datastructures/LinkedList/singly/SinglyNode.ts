class SinglyNode<T> {
  public value: T;
  public next: SinglyNode<T> | null = null;
  constructor(public data: T) {
    this.value = data;
  }
}

export default SinglyNode;
