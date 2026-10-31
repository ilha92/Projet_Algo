# Projet_Algo

Ce projet a été réalisé dans le cadre de l’apprentissage de l’algorithmique et des structures de données. Il m’a permis de mettre en pratique plusieurs notions vues en cours, notamment le tri, la recherche, le filtrage de données et la gestion d’une petite interface web.

## Objectif du projet

L’objectif était de créer une application qui affiche une liste de produits, permet de les rechercher, de les trier selon plusieurs algorithmes et d’accéder à la fiche détaillée d’un produit.

## Ce que j’ai développé

J’ai commencé par créer une base de données simple de produits avec leurs informations principales : nom, catégorie, prix, description et stock. Ensuite, j’ai ajouté une barre de recherche pour filtrer les produits selon le nom, la catégorie ou le numéro.

Ensuite, j’ai implémenté plusieurs algorithmes de tri :

- tri par insertion
- tri rapide
- tri fusion

Ces algorithmes ont été utilisés pour trier les produits selon leur prix. J’ai également ajouté un affichage du temps d’exécution pour comparer le comportement de chaque algorithme dans des conditions réelles.

Enfin, j’ai ajouté une page de détail pour chaque produit afin d’afficher plus d’informations sur un élément sélectionné. J’ai aussi mis en place une navigation simple entre la liste et la fiche produit en utilisant l’URL.

## Rôle des algorithmes

Les algorithmes de tri m’ont permis de comprendre les différences entre plusieurs méthodes de traitement de données. J’ai pu voir que certains algorithmes sont plus simples à mettre en place, tandis que d’autres sont plus efficaces sur de grands ensembles de données.

Ce projet m’a donc aidé à mieux comprendre :

- la différence entre les méthodes de tri,
- la notion de complexité algorithmique,
- l’importance d’un bon choix d’algorithme selon la situation,
- et l’application de ces notions dans un projet concret.

## Structure du projet

- src/data/products.ts : contient les données des produits
- src/algorithms/sorting.ts : contient les fonctions de tri
- src/pages/productList.ts : contient la liste des produits et les filtres
- src/pages/productDetail.ts : affiche les détails d’un produit
- src/router/stackRouter.ts : gère la navigation entre les pages
- src/main.ts : point d’entrée de l’application

## Conclusion

Ce projet m’a permis d’appliquer les notions apprises en cours dans un cas concret. J’ai pu voir comment les algorithmes, les structures de données et le traitement de données peuvent être utilisés dans une application web simple. C’était une bonne manière d’associer théorie et pratique.
