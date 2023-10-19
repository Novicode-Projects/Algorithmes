function squareDigits(num) {
  const numbers = String(num).split("");

  const result = numbers.map((number) => number * number);

  return Number(result.join(""));
}

/* ÉNONCÉ 📚 */

/*
  Retournez chaque chiffre que contient le nombre passé en argument au carré et concaténez-les. 
  Retournez le nombre concaténé final.
*/

/* Tests à passer 🧪 */

console.log(squareDigits(5225)); // 254425
console.log(squareDigits(5555)); // 2525252525
console.log(squareDigits(1111)); // 1111
