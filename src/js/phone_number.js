export default function editPhoneNumber(phoneNumber) {
  const regexp = /[()\s-]/g;
  const newPhone = phoneNumber.replace(regexp, '').replace(/^8/, '+7');
  return newPhone;
}
