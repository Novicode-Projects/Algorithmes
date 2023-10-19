const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

/* ÉNONCÉ 📚 */

/* 
  Créez un algorithme qui renvoie un nombre aléatoire dans un intervalle donné.
  Il existe deux manières de faire, une sécurisée et une non-sécurisée.
*/

/* Tests à passer 🧪 */

console.log(getRandomNumber(1, 10)); // un nombre entre 1 et 10 inclu
console.log(getRandomNumber(10, 15)); // un nombre entre 10 et 15 inclu
console.log(getRandomNumber(90, 95)); // un nombre entre 90 et 95 inclu
