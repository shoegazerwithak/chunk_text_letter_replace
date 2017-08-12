export function translate(srcStr, targetLetter, alphabet = {}) {
  if (!srcStr) {
    return null;
  }
  const isArray = Array.isArray(targetLetter);
  if (isArray) {
    return translateArray(srcStr, targetLetter, alphabet);
  } else {
    return internalTranslate(srcStr, targetLetter, alphabet);
  }
}

function internalTranslate(srcStr, targetLetter, alphabet) {
  const resLetter = alphabet[targetLetter];
  if (!resLetter || !targetLetter) {
    return srcStr;
  }

  return replaceAll(srcStr, targetLetter, resLetter);
}

function replaceAll(srcStr, target, final) {
  const regex = new RegExp(target, "g");
  return srcStr.replace(regex, final);
}

function translateArray(srcStr, targetLetter, alphabet = {}) {
  srcStr = targetLetter.reduce((str, letter) => {
    return translate(str, letter, alphabet);
  }, srcStr);
  return srcStr;
}
