# GitHub Copilot

## Installation

1. Cloner le dépôt ou télécharger les fichiers.
2. Installer les dépendances :
   ```bash
   npm install
   ```

## Utilisation

Pour exécuter les tests :
```bash
npm test
```

## Structure du projet

```
project-root/
├── package.json
├── jest.config.js
├── src/
│   ├── example.js
│   └── example.test.js
└── README.md
```

# Exercices

Vous allez devoir essayer, dans le minimum de temps, de résoudre les exercices suivants. Vous pouvez utiliser n'importe quel langage de programmation, même si le projet est pensé pour JavaScript.

Pour chaque fonction, il faudra écrire : 
- la ou les fonctions
- les tests unitaires
- la documentation associée
- la jsdoc associée

## Exercice 1

Ecrivez une fonction JavaScript nommée calculateStatistics qui accepte un tableau de nombres.

La fonction doit retourner un objet contenant les statistiques suivantes :
- mean : La moyenne des nombres.
- median : La valeur médiane des nombres.
- mode : La/les valeur(s) mode(s) des nombres (en cas d'égalité, retourner tous les modes).
- range : La différence entre la valeur maximale et minimale.

Exemple : 

```js
function calculateStatistics(numbers) {
    // Votre implémentation ici
}

// Exemple d'utilisation :
const stats = calculateStatistics([1, 2, 2, 3, 4]);
console.log(stats);
// Résultat attendu : { mean: 2.4, median: 2, mode: [2], range: 3 }
```


## Exercice 2

Écrivez une fonction nommée analyzeString qui accepte une chaîne de caractères.

La fonction doit retourner un objet contenant les statistiques suivantes :
- length: La longueur de la chaîne.
- wordCount: Le nombre de mots dans la chaîne.
- charFrequency: La fréquence de chaque caractère dans la chaîne.

Exemple : 

```js
function analyzeString(str) {
    // Votre implémentation ici
}

// Exemple d'utilisation :
const stats = analyzeString('hello world');
console.log(stats);
// Résultat attendu : { length: 11, wordCount: 2, charFrequency: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 } }
```

## Exercice 3

Écrivez une fonction nommée getDateDifference qui accepte deux dates au format YYYY-MM-DD.

La fonction doit retourner un objet contenant la différence entre les deux dates en jours, mois et années.

Exemple : 

```js
function getDateDifference(date1, date2) {
    // Votre implémentation ici
}

// Exemple d'utilisation :
const diff = getDateDifference("2023-01-01", "2024-05-22");
console.log(diff);
// Résultat attendu : { years: 1, months: 4, days: 21 }
```


## Exercice 4

Écrivez une fonction nommée getFibonacci qui accepte un nombre entier n.

La fonction doit retourner un tableau contenant les n premiers nombres de la suite de Fibonacci.

Exemple : 

```js
function getFibonacci(n) {
    // Votre implémentation ici
}

// Exemple d'utilisation :
const fibonacci = getFibonacci(10);
console.log(fibonacci);
// Résultat attendu : [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

