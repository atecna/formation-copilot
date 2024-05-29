# Exercice 1 : Génération de Mot de Passe Sécurisé

## Objectif
Implémenter une fonction JavaScript qui génère un mot de passe sécurisé d'une longueur donnée.

## Spécifications
- **Nom de la fonction** : `generateSecurePassword`
- **Entrée** : Un entier représentant la longueur du mot de passe (par exemple, `12`).
- **Sortie** : Une chaîne de caractères représentant le mot de passe généré.

## Exemple d'utilisation
```javascript
const password = generateSecurePassword(12);
console.log(password); 
// Résultat attendu : Une chaîne de 12 caractères aléatoires, incluant des lettres majuscules et minuscules, des chiffres et des caractères spéciaux.
```