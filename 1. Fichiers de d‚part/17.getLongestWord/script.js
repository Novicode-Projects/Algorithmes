const getLongestWord = (str) => {
  const strArray = str.split(" ");

  return strArray.reduce((acc, curr) => Math.max(acc, curr.length), 0);
};

/* ÉNONCÉ 📚 */

/* Trouvez la longueur du mot le plus long dans une phrase et retournez-la. */

/* Tests à passer 🧪 */

console.log(getLongestWord("Du sublime au ridicule il n'y a qu'un pas.")); // 8
