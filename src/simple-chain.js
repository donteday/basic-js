const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainStack: [],

  getLength() {
    return this.chainStack.length;
  },
  addLink(value) {
    value === undefined ? value = '' : value = String(value);
    this.chainStack.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chainStack.length || Number.isInteger(position) === false) {
      this.chainStack = [];
      throw new Error('You can\'t remove incorrect link!');
    } 
    let newStack = [];
    for (let i = 0; i < this.chainStack.length; i++) {
      if (i != (position-1)) newStack.push(this.chainStack[i]);
      else continue;
    }
    this.chainStack = newStack;
    return this;
  },
  reverseChain() {
    let newStack = [];
    for (let i = this.getLength() - 1; i >= 0; i--) {
      newStack.push(this.chainStack[i]);
    }
    this.chainStack = newStack;
    return this;
  },
  finishChain() {
    let result = this.chainStack.join('~~')
    this.chainStack = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
