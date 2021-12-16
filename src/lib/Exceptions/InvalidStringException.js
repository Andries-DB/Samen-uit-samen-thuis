/**
 * Invalid string
 */

import Exception from './Exception';

export default class InvalidStringException extends Exception {
  constructor(givenString = '') {
    super(`String is incorrect: ${givenString}`);
  }
}
