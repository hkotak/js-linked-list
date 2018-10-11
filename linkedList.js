/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let tail = null;
  let head = null;
  getHead = () => head;

  getTail = () => tail;

  const add = value => {
    let newNode = { value: value, next: null };
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = tail.next;
    }
    return tail;
  };

  const remove = num => {
    let preNode = get(num - 1);
    let curNode = get(num);
    if (!curNode) {
      return false;
    } else if (!preNode) {
      head = curNode.next;
    } else if (!curNode.next) {
      tail = preNode;
      tail.next = null;
    } else {
      preNode.next = curNode.next;
    }
  };

  const get = num => {
    let count = 0;
    let currentNode = head;
    if (num < 0 || !head) {
      return false;
    } else if (num === 0) {
      return head;
    } else {
      while (count < num) {
        if (currentNode.next !== null) {
          currentNode = currentNode.next;
          count++;
        } else {
          return false;
        }
      }
      return currentNode;
    }
  };

  const insert = (value, num) => {
    let tarNode = get(num);
    let preNode = get(num - 1);
    let myNode = {
      value: value,
      next: null
    };
    if (!tarNode) {
      return false;
    } else if (!preNode) {
      myNode.next = head;
      head = myNode;
    } else {
      myNode.next = tarNode;
      preNode.next = myNode;
    }
  };

  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert
  };
}
