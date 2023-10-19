const getVowelsNumber = (txt) => {
  const vowels = txt.match(/[aeiouy]/gi);

  if (vowels === null) {
    return 0;
  }

  return vowels.length;
};

/* ÉNONCÉ 📚 */

/* Créez un programme qui retourne le nombre de voyelles dans une chaîne de caractères. */

/* Tests à passer 🧪 */

console.log(getVowelsNumber("jdhqgdqsghdakzejamazemlqksd")); // 5
console.log(getVowelsNumber("Lorem ipsum dolor sit amet consectetur.")); // 13
console.log(getVowelsNumber("L’imagination gouverne le monde.")); // 13
console.log(getVowelsNumber("zzzZZZzz")); // 0
