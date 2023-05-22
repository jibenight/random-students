// Importation du module express
const express = require('express');

// Création de l'application Express
const app = express();

// Configuration du moteur de template pour utiliser EJS
app.set('view engine', 'ejs');

// Initialisation de l'array des étudiants
const students = [
  'Bernard',
  'Luc',
  'Céline',
  'Thierry',
  'John',
  'Elsa',
  'Fréderique',
];

const entiers = [1, 2, 3, 6, 5, 5, 6, 9, 9];

// fonction fléchée EcmaScript 6
const createPairs = arr => {
  // Mélange aléatoire de l'array avec l'algorithme Fisher-Yates
  // On commence par la fin de l'array et on échange chaque élément avec un élément à un indice aléatoire inférieur
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i); // Choisir un indice aléatoire
    const temp = arr[i]; // Stocker temporairement l'élément à l'indice courant
    arr[i] = arr[j]; // Remplacer l'élément à l'indice courant par l'élément à l'indice aléatoire
    arr[j] = temp; // Mettre l'élément stocké temporairement à l'indice aléatoire
  }

  // Création des binômes
  let pairs = [];
  for (let i = 0; i < arr.length; i += 2) {
    // Prend deux étudiants à la fois et les ajoute comme un pair à l'array des pairs
    pairs.push(arr.slice(i, i + 2));
  }

  // Si le nombre d'étudiants est impair, ajout de l'étudiant restant à un binôme aléatoire
  if (arr.length % 2 !== 0) {
    let lastStudent = pairs.pop(); // Récupérer le dernier "binôme", qui est en fait un élément unique
    let randomPair = pairs[Math.floor(Math.random() * pairs.length)]; // Choisir un pair aléatoire
    randomPair.push(lastStudent); // Ajouter l'étudiant restant au pair aléatoire
  }

  return pairs;
};

// Gestion de la requête GET sur la route racine ('/')
app.get('/', (req, res) => {
  // Création des binômes
  const pairs = createPairs(entiers);

  // Rendu de la vue 'index' en passant les binômes à la vue
  res.render('index', { pairs: pairs });
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
