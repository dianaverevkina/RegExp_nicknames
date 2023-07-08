import editPhoneNumber from '../js/phone_number';

test('edit phoneNumber', () => {
  expect(editPhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
  expect(editPhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
  expect(editPhoneNumber('+86 000 000 0000')).toBe('+860000000000');
});
