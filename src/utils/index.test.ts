import {
  isValidEmail,
  isValidName,
  isValidNickname,
  isValidPassword,
} from './';

test('isValidEmail', () => {
  expect(isValidEmail('ab')).toBe(false);
  expect(isValidEmail('ab@')).toBe(false);
  expect(isValidEmail('a@b')).toBe(false);
  expect(isValidEmail('jose@uol.com')).toBe(false);

  expect(isValidEmail('jose.123@email.com')).toBe(true);
  expect(isValidEmail('jose@uol.com')).toBe(true);
  expect(isValidEmail('jose123@uol.com')).toBe(true);
});

test('isValidName', () => {
  expect(isValidName('J')).toBe(false);
  expect(isValidName('J*')).toBe(false);
  expect(isValidName('JO123')).toBe(false);

  expect(isValidName('José')).toBe(true);
  expect(isValidName('jose')).toBe(true);
});

test('isValidNickname', () => {
  expect(isValidNickname('J')).toBe(false);
  expect(isValidNickname('J*')).toBe(false);
  expect(isValidNickname('JO123')).toBe(false);

  expect(isValidName('josé12')).toBe(true);
  expect(isValidName('jose1983')).toBe(true);
});

test('isValidPassword', () => {
  expect(isValidPassword('J')).toBe(false);
  expect(isValidPassword('Jo1245#')).toBe(false);
  expect(isValidPassword('Jo1245')).toBe(false);

  expect(isValidPassword('jos12345')).toBe(true);
  expect(isValidPassword('Jose4321')).toBe(true);
  expect(isValidPassword('jose$1313')).toBe(true);
});
