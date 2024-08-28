

# Tweet Application

Une application simple de gestion de tweets construite avec React. Cette application permet aux utilisateurs de créer, liker et supprimer des tweets. Les tweets sont affichés dans une liste et chaque tweet peut être liké ou supprimé.

## Fonctionnalités

- **Créer un tweet** : Remplissez le formulaire pour ajouter un nouveau tweet avec un nom et un contenu.
- **Liker un tweet** : Augmente le compteur de likes d'un tweet.
- **Supprimer un tweet** : Supprime un tweet de la liste après confirmation.

## Technologies Utilisées

- **React** : Librairie pour construire l'interface utilisateur.
- **React Hooks** : `useState`, `useCallback`, `useRef` pour la gestion des états et des références.
- **React.lazy et Suspense** : Pour le chargement paresseux des composants.
- **CSS** : Pour le style des composants.

## Installation

1. **Clonez le dépôt :**

   ```bash
   git clone https://github.com/digitaleflex/Tweetly.git
   ```

2. **Accédez au répertoire du projet :**

   ```bash
   cd Tweetly
   ```

3. **Installez les dépendances :**

   ```bash
   npm install
   ```

## Démarrage

Pour démarrer l'application en mode développement, utilisez la commande suivante :

```bash
npm start
```

L'application sera disponible à l'adresse [http://localhost:5173](http://localhost:5173).

## Structure du Projet

- **`src/`** : Contient tous les fichiers sources de l'application.
  - **`components/`** : Composants réutilisables.
    - `Tweet.jsx` : Composant pour afficher un tweet.
    - `TweetForm.jsx` : Composant pour le formulaire d'ajout de tweet.
    - `TweetList.jsx` : Composant pour afficher la liste des tweets.
  - **`App.jsx`** : Composant principal de l'application.
- **`public/`** : Contient les fichiers publics accessibles directement par le serveur web.
- **`package.json`** : Gestion des dépendances et des scripts du projet.

## Contribuer

Les contributions sont les bienvenues ! Veuillez suivre ces étapes :

1. **Forkez le dépôt**
2. **Créez une branche pour votre fonctionnalité :**

   ```bash
   git checkout -b feature/ma-fonctionnalite
   ```

3. **Commitez vos modifications :**

   ```bash
   git commit -am 'Ajout de ma fonctionnalité'
   ```

4. **Poussez votre branche :**

   ```bash
   git push origin feature/ma-fonctionnalite
   ```

5. **Ouvrez une Pull Request**

## Auteur

Votre Nom - [Votre profil GitHub](https://github.com/digitaleflex)

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

