const flatten = (arr) => {
  const flattenArray = [];

  const arrayFlattener = (arg) => {
    if (Array.isArray(arg)) {
      for (let i = 0; i < arg.length; i++) {
        arrayFlattener(arg[i]);
      }
    } else {
      flattenArray.push(arg);
    }
  };

  arr.forEach(arrayFlattener);

  return flattenArray;
};

/* ÉNONCÉ 📚 */

/*
  Cet algorithme prend un tableau composé lui-même de plusieurs sous-tableaux en
  entrée.
  Vous devez "aplatir" les différentes couches de tableaux, c'est-à-dire
  retourner un seul tableau qui contient les valeurs de tous les tableaux qui le
  composent.
  Attention : Ne pas utiliser la méthode JavaScript "flat()", il faut trouver une solution personnalisée.
*/

/* Tests à passer 🧪 */
console.log(flatten([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]
console.log(flatten([1, [2], [3, [[4]]]])); // [1,2,3,4]
console.log(flatten([1, [], [3, [[4]]]])); // [1, 3, 4]
console.log(flatten([1, {}, [3, [[4]]]])); // [1, {}, 3, 4]
