/**
 * Invalid string
 */

import Exception from './Exception.js';

export default class InvalidStringException extends Exception {
  constructor(givenString = '') {
    super(`String is incorrect: ${givenString}`);
  }
}
