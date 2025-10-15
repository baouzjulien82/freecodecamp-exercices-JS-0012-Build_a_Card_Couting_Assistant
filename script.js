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
