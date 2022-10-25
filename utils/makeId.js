export const makeId = (length) => {
  let result = '';

  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charsLength = chars.length;

  for (let i = 0; i < length; i += 1) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return result;
};
