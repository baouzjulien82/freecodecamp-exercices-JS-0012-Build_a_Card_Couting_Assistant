// solution initiale

let count = 0;

const cc = (cardParameter) => {
  if (typeof cardParameter === "string" || cardParameter === 10) {
    --count;
  } else if(typeof cardParameter === "number" && cardParameter < 7) {
    ++count;
  } 
  if (count > 0) {
    return `${count} Bet`;
  } else if (count <= 0){
    return `${count} Hold`
  }
}

console.log(cc("Q"));
console.log(cc(2));
console.log(cc());
console.log(cc());
console.log(cc());

// solution améliorée

let count = 0;

const cc = (cardParameter) => {
  // Cartes qui font descendre le count
  if (["10", "J", "Q", "K", "A"].includes(cardParameter) || cardParameter === 10) {
    --count;
  }
  // Cartes qui font monter le count
  else if (typeof cardParameter === "number" && cardParameter >= 2 && cardParameter <= 6) {
    ++count;
  }

  // Retourne le résultat
  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
};

// solution finale avec gestion des arguments passés en str ou num.

let count = 0;

const cc = (cardParameter) => {
  // Convertit en string (pour gérer "10", "K", etc.)
  const cardStr = String(cardParameter).toUpperCase();
  // Convertit en nombre (pour gérer "4" -> 4)
  const cardNum = Number(cardParameter);

  // Cartes hautes : 10, J, Q, K, A
  if (["10", "J", "Q", "K", "A"].includes(cardStr)) {
    --count;
  } 
  // Cartes basses : 2 à 6
  else if (!isNaN(cardNum) && cardNum >= 2 && cardNum <= 6) {
    ++count;
  } 
  // Autres cartes (7, 8, 9) → neutres, rien à faire
  else if (!isNaN(cardNum) && cardNum >= 7 && cardNum <= 9) {
    // Pas de changement
  } 
  // Si la valeur est invalide (ex: "Z", null, etc.)
  else {
    return `Carte invalide : ${cardParameter}`;
  }

  // Retour du résultat
  return count > 0 ? `${count} Bet` : `${count} Hold`;
};
