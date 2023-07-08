import Validator from '../js/validator';

test('check username - correct name', () => {
  const username = 'ivan76ivanov';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('check username - incorrect name', () => {
  expect(Validator.validateUsername('ivanov76')).toBeFalsy();
  expect(Validator.validateUsername('_ivanov')).toBeFalsy();
  expect(Validator.validateUsername('76ivanov')).toBeFalsy();
  expect(Validator.validateUsername('ivan7686ivanov')).toBeFalsy();
});
