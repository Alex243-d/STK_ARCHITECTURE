// État global du jeu
const gameState = {
  selectedCards: [],      // cartes sélectionnées par le joueur
  matchedPairs: [],       // paires trouvées
  errors: 0,              // nombre d'erreurs
  score: 0,               // score du joueur
}

// Sélectionner une carte
export function selectCard(carte) {
  // Empêcher de sélectionner plus de 2 cartes
  if (gameState.selectedCards.length >= 2) return

  // Empêcher de sélectionner la même carte 2 fois
  if (gameState.selectedCards.find(c => c.id === carte.id)) return

  gameState.selectedCards.push(carte)
}

// Réinitialiser les cartes sélectionnées
export function resetSelection() {
  gameState.selectedCards = []
}

// Ajouter une paire trouvée
export function addMatchedPair(paire) {
  gameState.matchedPairs.push(paire)
  gameState.score += 1
}

// Ajouter une erreur
export function addError() {
  gameState.errors += 1
}

export default gameState