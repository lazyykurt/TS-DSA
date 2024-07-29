import SinglyLinkedList from "./SinglyLinkedList";

let list = new SinglyLinkedList<string>();

list.isEmpty();
list.append("name");
list.append("10"); 
list.prepend("age");
list.prepend("20");
list.deleteHead();
list.deleteTail();
list.toString(); // should show "age -> name -> null"
console.log(list.getSize()); // should show 2

const s = list.get(0); 
console.log(s); // should show "age"

list.remove(0);
list.toString(); // should show "name -> null"