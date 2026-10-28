# Projet_Algo + debut projet

Ce projet a pour but de mettre en pratique les notions vues en algorithmique et en structures de données.

## Objectif

Construire un framework frontend TypeScript from scratch (sans React, Vue, ou toute librairie externe) qui met
en œuvre les concepts algorithmiques du cours.
Seul outil autorisé : Vite.js comme bundler. Aucun module Node.js externe.

## Ce que j’ai fait

- J’ai créé une liste de produits avec leurs informations : nom, catégorie, prix, stock, description.
- J’ai ajouté une barre de recherche pour filtrer les produits par nom, catégorie ou numéro.
- J’ai implémenté trois algorithmes de tri :
  - tri par insertion
  - tri rapide
  - tri fusion
- J’ai comparé les résultats en fonction du prix.
- J’ai affiché le temps d’exécution de chaque tri.
- J’ai ajouté une page de détail pour chaque produit.
- J’ai mis en place une navigation simple entre la liste et la fiche produit via l’URL.

## Algorithmes de tri utilisés

- Tri par insertion : insère chaque élément à sa bonne place.
- Tri rapide : sépare les éléments autour d’un pivot.
- Tri fusion : divise le tableau en deux parties puis les fusionne.

## Structure du projet

- src/data/products.ts : contient les données des produits
- src/algorithms/sorting.ts : contient les fonctions de tri
- src/pages/productList.ts : affiche la liste des produits et le filtrage
- src/pages/productDetail.ts : affiche les détails d’un produit
- src/router/stackRouter.ts : gère la navigation entre les pages
- src/main.ts : point d’entrée de l’application
