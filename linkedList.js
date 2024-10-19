class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const reverseLinkedList = (head) => {
  let prev = null; // Inicializa el puntero previo como null
  let current = head; // Comienza con el nodo cabeza
  while (current) {
    const nextTemp = current.next; // Guarda la referencia al siguiente nodo
    current.next = prev; // Invierte la referencia actual
    prev = current; // Avanza el puntero 'prev'
    current = nextTemp; // Avanza el puntero 'current'
  }
  return prev; // Devuelve el nuevo "head" de la lista invertida
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const reversedHead = reverseLinkedList(head);

const printList = (node) => {
  let current = node;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

printList(reversedHead);
