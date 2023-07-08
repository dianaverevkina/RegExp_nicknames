export default class Validator {
  static validateUsername(username) {
    const regexp = /^[^\d_-][\w-]*[^\d_-]$/gi;
    const numberRegExp = /\d{4,}/g;

    return regexp.test(username) && !numberRegExp.test(username);
  }
}
