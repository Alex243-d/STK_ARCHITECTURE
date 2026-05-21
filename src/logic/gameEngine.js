import pairs from "./pairs.js"

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

// Retourne 8 cartes aléatoires pour afficher sur le plateau
export function getCartesInitiales() {
  // Mélange les paires et prend les 4 premières
  const pairesChoisies = [...pairs].sort(() => Math.random() - 0.5).slice(0, 4)

  const cartesVivant = pairesChoisies.map(p => p.carteVivant)
  const cartesApplication = pairesChoisies.map(p => p.carteApplication)

  // Mélange chaque rangée séparément
  return {
    rangeeHaut: cartesVivant.sort(() => Math.random() - 0.5),
    rangeeBas: cartesApplication.sort(() => Math.random() - 0.5)
  }
}