/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  const getHead = () => {
    return head;
  };
  const getTail = () => {
    return tail;
  };
  const add = value => {
    const newNode = value;
    console.log("node: ", newNode);

    if (head) {
      head = newNode;
      tail = newNode;
      return head;
    } else if (head !== null && tail === null) {
      tail.next = newNode;
      tail = newNode;
      return tail;
    }
  };
  const get = number => {};
  const remove = number => {};
  const insert = (number, value) => {};

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };
}
