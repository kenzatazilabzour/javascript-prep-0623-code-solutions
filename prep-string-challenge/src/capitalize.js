/* exported capitalize */
function capitalize(word) {
  const firstCharacter = word.charAt(0).toUpperCase();
  const restOfString = word.slice(1).toLowerCase();
  return firstCharacter + restOfString;
}
