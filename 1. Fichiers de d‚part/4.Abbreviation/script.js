const abreviation = (str) => {
  const [firstName, lastName] = str.split(" ");
  const [firstLetterOfLastName] = lastName;

  return `${firstName} ${firstLetterOfLastName}.`;
};

/* ÉNONCÉ 📚 */

/* Créez un algorithme qui retourne l'abréviation d'un nom et prénom. */

/* Tests à passer 🧪 */

console.log(abreviation("John Doe")); // John D.
console.log(abreviation("Romy Schneider")); // Romy S.
console.log(abreviation("Alfred Hitchcock")); // Alfred H.
