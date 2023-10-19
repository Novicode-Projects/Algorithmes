const capitalize = (str) => {
  const strArray = str.toLowerCase().split(" ");

  const finalString = strArray.map((currentStr) => {
    return currentStr.replace(
      currentStr.charAt(0),
      currentStr.charAt(0).toUpperCase()
    );
  });

  return finalString.join(" ");
};

/* ÉNONCÉ 📚 */

/* 
Créez un Algorithme qui prend une phrase en argument et qui retourne cette même phrase avec la première lettre de chaque mot en majuscule.
*/

/* Test à passer 🧪 */

console.log(capitalize("Les sanglots longs des violons de l'automne...")); // Les Sanglots Longs Des Violons De L'automne...
