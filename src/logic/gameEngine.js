import pairs from "./pairs.js"
import gameState, { resetSelection, addMatchedPair, addError } from "../state/gameState.js"


// Vérifie si 2 cartes sélectionnées forment une bonne paire
export function verifierPaire(carte1, carte2) {
  const paire = pairs.find(p =>
    (p.carteVivant.id === carte1.id && p.carteApplication.id === carte2.id) ||
    (p.carteVivant.id === carte2.id && p.carteApplication.id === carte1.id)
  )

  if (paire) {
    return {
      succes: true,
      explication: paire.explication
    }
  } else {
    return {
      succes: false,
      explication: null
    }
  }
}

// Logique principale quand le joueur sélectionne 2 cartes
export function jouerTour() {
  const cartes = gameState.selectedCards

  // Pas encore 2 cartes sélectionnées
  if (cartes.length < 2) return null

  const resultat = verifierPaire(cartes[0], cartes[1])

  if (resultat.succes) {
    addMatchedPair({ carte1: cartes[0], carte2: cartes[1] })
  } else {
    addError()
  }

  resetSelection()
  return resultat
}

// Retourne 8 cartes aléatoires pour le plateau
export function getCartesInitiales() {
  const pairesChoisies = [...pairs].sort(() => Math.random() - 0.5).slice(0, 4)

  const cartesVivant = pairesChoisies.map(p => p.carteVivant)
  const cartesApplication = pairesChoisies.map(p => p.carteApplication)

  return {
    rangeeHaut: cartesVivant.sort(() => Math.random() - 0.5),
    rangeeBas: cartesApplication.sort(() => Math.random() - 0.5)
  }
}