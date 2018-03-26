# PW1 - Getting Started

Dans cette première partie pratique, nous allons créer une nouvelle application Angular via l'outil en ligne de commande **angular-cli**. Ensuite, nous intégrerons le template de notre future application Zenika Ecommerce.

## Création de l'application Angular par défaut

```shell
# Installer angular-cli
$ npm install -g @angular/cli

$ ng new beer-app
$ cd beer-app
```

## Execution de l'application

```shell
npm start
```

Vous pouvez dès à présent vérifier que l'application fonctionne sur http://localhost:4200

## Utiliser les maquettes

Vous êtes à présent prêt pour intégrer le template dans l'application qui vient d'être générée. Nous allons nous limiter pour l'instant à la page principale. Voici les pré-requis :

* Remplacez le fichier `styles.css` par celui présent dans `maquettes/styles.css`. C'est le thème global de l'application.
* Remplacez le contenu `index.html` par celui du fichier `maquettes/index.html` : il s'agit de tous les éléments à l'exterieur de `<body>`.
* Le contenu de `<body>` est placé dans un Component, par défaut, celui-ci s'appelle `App`. Remplacez la vue de ce composant par le contenu du fichier `maquettes/app.component.html`.
