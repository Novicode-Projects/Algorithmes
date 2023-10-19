const customFilter = (arr, callback) => {
  const filteredArray = [];

  for (const element of arr) {
    const index = arr.indexOf(element);

    if (callback(element, index, arr)) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
};

/* ÉNONCÉ 📚 */

/* 
La méthode filter() est très pratique en JS, mais sauriez-vous la recréer en partant de zéro ?
C'est le but de cet exercice.
*/

console.log(customFilter([1, 7, 2, 3, 90, 4], (el) => el >= 3)); // [ 7, 3, 90, 4]
console.log(customFilter([111, 222, 333, 444, 555], (el) => el > 333)); // [ 444, 555 ]
console.log(customFilter([-10, 5, 47, 96, -215], (el) => el <= 10)); // [ -10, 5, -215 ]
