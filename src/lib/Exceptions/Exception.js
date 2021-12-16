/**
 * An Exception Object
 */

export default class Exception extends Error {
  constructor(message) {
    super(message);
  }

  log() {
    console.error(this.message);

    // mail a user
    console.log('mailing the user');

    // send log to database
  }
}
