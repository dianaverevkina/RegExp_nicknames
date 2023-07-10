export default class Validator {
  static validateUsername(username) {
    const latinCharsNumsDashUnderscoreAccept = /[\w-]/gi;
    const exeptThreeNumbersInRow = /\d{4,}/;
    const startExceptNumDashUnderScore = /^[^\d_-]/i;
    const EndExceptNumDashUnderScore = /[^\d_-]$/i;

    return latinCharsNumsDashUnderscoreAccept.test(username)
      && !exeptThreeNumbersInRow.test(username)
      && startExceptNumDashUnderScore.test(username)
      && EndExceptNumDashUnderScore.test(username);
  }
}
