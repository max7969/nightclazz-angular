## PW2 - Les Composants

* Vous êtes à présent prêt pour intégrer le template dans l'application qui vient d'être générée. Nous allons nous limiter pour l'instant à la page `app.component.html`. Voici les prérequis :
    * les éléments à l'extérieur de `<body>` doivent se trouver dans le fichier `index.html`
    * le contenu de `<body>` doit être inséré dans le component `app`

Nous allons à présent créer nos premiers composants. Le premier sera utilisé pour afficher le **header** et le second pour le bloc spécifique à une bière.

* Intégrez le css fourni en copiant l'intégralité du fichier `maquettes/styles.css` dans le fichier `styles.css` à la racine de votre application.

* Videz le contenu des fichiers `index.html` et `app.component.html` et remplacez le par le contenu des fichiers exemple `maquettes/app.component.html` `maquttes/index.html`.

* Créez un nouveau composant `Menu` à l'aide de Angular CLI. Ce composant sera le menu principal de l'application. 

```shell
$ ng generate component menu
```

* Intégrez dans votre app.component.html votre nouveau composant Menu en utilisant le selector. 

* De la même façon créer un second component `Beer` et intégrer le dans l'app.component.
