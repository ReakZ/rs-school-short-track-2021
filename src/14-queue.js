const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const n = new ListNode(element);
    if (this.start) {
      this.end.next = n;
      this.end = n;
    } else {
      this.start = n;
      this.end = n;
    }
    this.length++;
  }

  dequeue() {
    const ret = this.start;
    this.start = this.start.next;
    this.length--;

    return ret.value;
  }
}

module.exports = Queue;
