const mostFrequent = (arr) => {
  let [mostFrequentItem] = arr;

  const occurences = {};

  for (let index = 0; index < arr.length; index++) {
    const current = arr[index];

    occurences[current] ? occurences[current]++ : (occurences[current] = 1);

    if (occurences[current] > occurences[mostFrequentItem]) {
      mostFrequentItem = current;
    }
  }

  return mostFrequentItem;
};

/* ÉNONCÉ 📚 */

/* Créez un programme qui retourne l'élément le plus présent dans un tableau. */

/* Tests à passer 🧪 */

console.log(
  mostFrequent([3, "a", "a", "a", "b", "b", 2, 3, "a", 3, "a", 2, 4, 9, 3])
); // "a"
console.log(mostFrequent(["y", "z", "z", "x", "z"])); // "z"
console.log(
  mostFrequent(["John", "Tom", "Peter", "Peter", "Jack", "Jack", "Jack"])
); // "Jack"
