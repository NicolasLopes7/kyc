export const generateVerificationCode = () =>
  Math.random().toString().substring(2, 8);
