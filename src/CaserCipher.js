const shiftCharacterBy = (char = "", shiftBy = 0) => {
  if (!/[a-zA-Z]/.test(char)) {
    return char;
  }

  const isUpperCase = char === char.toUpperCase();
  const givenChar = char.toLowerCase();
  const charNum = givenChar.charCodeAt(0) - 97;
  let shiftVal = charNum + shiftBy;
  if (charNum + shiftBy < 0) {
    shiftVal = (shiftVal % 26) + 26;
  } else {
    shiftVal %= 26;
  }
  const shifterCharacter = String.fromCharCode(shiftVal + 97);
  if (isUpperCase) {
    return shifterCharacter.toUpperCase();
  }
  return shifterCharacter.toLowerCase();
};

const CaserCipher = (str = "", shiftBy = 0) => {
  const stringArr = str.split("");

  let ans = "";

  stringArr.forEach((item) => {
    ans += shiftCharacterBy(item, shiftBy);
  });
  return ans;
};

export default CaserCipher;
