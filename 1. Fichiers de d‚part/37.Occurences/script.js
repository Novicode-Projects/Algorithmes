const occurrences = (str, letter) => {
  return str.split(letter).length - 1;
};

/* ÉNONCÉ 📚 */

/*
  Retournez le nombre de fois que le second argument se trouve dans le premier.
*/

/* Tests à passer 🧪 */

console.log(occurrences("lhelol", "l")); // 3
console.log(occurrences("abcde", "e")); // 1
console.log(occurrences("zzzzzzzzzzzzz", "z")); // 13
console.log(occurrences("La victoire est à nous", "e")); // 2
