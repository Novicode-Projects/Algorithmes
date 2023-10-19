const differences = (arr1, arr2) => {
  const firstArray = arr1.filter((element) => !arr2.includes(element));
  const secondArray = arr2.filter((element) => !arr1.includes(element));

  return [...firstArray, ...secondArray];
};

/* ÉNONCÉ 📚 */

/*
Codez un algorithme qui retourne les différences entre les deux tableaux qu'il reçoit en argument.
Retournez ces différences dans un nouveau tableau.
*/

/* Tests à passer 🧪 */

console.log(differences([1, 2, 3, 5], [1, 2, 3, 4, 5])); //  [ 4 ]
console.log(differences(["x", "a", "c"], ["m", "k", "l"])); //  [ 'x', 'a', 'c', 'm', 'k', 'l' ]
console.log(differences([999, 777], [777, 444, 111])); //  [ 999, 444, 111 ]
