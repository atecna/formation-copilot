# Exercice 8 : recherche d'indices

## Objectif
Implémenter une fonction JavaScript qui trouve tous les indices d'un élément donné dans un tableau.

## Spécifications
- **Nom de la fonction** : `findAllIndices`
- **Entrée** : un tableau et un élément à rechercher (par exemple, `[1, 2, 3, 2, 4, 2]` et `2`).
- **Sortie** : un tableau contenant tous les indices de l'élément donné.

## Exemple d'utilisation
```javascript
const indices = findAllIndices([1, 2, 3, 2, 4, 2], 2);
console.log(indices); 
// Résultat attendu : [1, 3, 5]
```