# Projet de Création de Binômes d'Étudiants

Ce projet est une simple application Node.js qui utilise ExpressJS et EJS pour créer aléatoirement des binômes à partir d'une liste d'étudiants, puis afficher ces binômes sur une page web.

## Installation

Avant de commencer, assurez-vous d'avoir installé Node.js et npm sur votre machine.

Clonez ce dépôt sur votre machine locale en utilisant SSH:
git clone git@github.com:jibenight/random-students.git

Naviguez vers le répertoire du projet :
cd random-students

Installez les dépendances nécessaires avec npm :
npm install

## Utilisation

Démarrez l'application avec la commande suivante :
node app.js

Ouvrez un navigateur web et allez à http://localhost:3000.

Vous verrez une liste de binômes d'étudiants affichée. Si vous actualisez la page, les binômes seront mélangés à nouveau.
Fonctionnement

L'application crée des binômes en mélangeant d'abord la liste des étudiants avec l'algorithme de mélange Fisher-Yates, puis en regroupant les étudiants par paires. Si le nombre d'étudiants est impair, l'étudiant restant est ajouté à un binôme existant de manière aléatoire.

## Personnalisation

Si vous souhaitez utiliser une liste d'étudiants différente, vous pouvez modifier l'array students dans app.js.

## Licence

Ce projet est sous licence MIT.

