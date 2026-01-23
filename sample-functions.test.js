const myFunctions = require('./sample-functions.js');

test('Testing div -- basic', () => {
  const target = 30;
  const result = myFunctions.div(60, 2);
  expect(target).toBe(result);
});

test('Testing div -- big numbers', () => {
  const target = 2;
  const result = myFunctions.div(2000, 1000);
  expect(target).toBe(result);
});

test('Testing div -- zeroes', () => {
  const target = 0;
  const result = myFunctions.div(0, 2);
  expect(target).toBe(result);
});

test('Testing containsNumbers -- Basic', () => {
  const target = true;
  const text = "There are 3000 apples";
  const result = myFunctions.containsNumbers(text);
  expect(target).toBe(result);
});

test('Testing containsNumbers -- No numbers', () => {
  const target = false;
  const text = "There are apples";
  const result = myFunctions.containsNumbers(text);
  expect(target).toBe(result);
});

test('Testing containsNumbers -- non-regular characters', () => {
  const target = true;
  const text = "There are 3000 apples ^%@(^(#&))^";
  const result = myFunctions.containsNumbers(text);
  expect(target).toBe(result);
});

test('Testing containsNumbers -- number at end of string', () => {
  const target = true;
  const text = "Wow this is a great string 9";
  const result = myFunctions.containsNumbers(text);
  expect(target).toBe(result);
});
