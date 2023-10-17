function generateRandomString(length) {
  let text = "";
  const possibleChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
  }

  return text;
}
