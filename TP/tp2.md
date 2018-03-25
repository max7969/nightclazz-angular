## PW2 - Les Composants

Nous allons à présent créer nos premiers composants. Le premier sera utilisé pour afficher le **menu** et le second pour le bloc spécifique à une **bière**.

* Créez un nouveau composant `Menu` à l'aide de Angular CLI. Ce composant sera le menu principal de l'application.

```shell
$ ng generate component menu
```

* Intégrez dans votre `app.component.html` votre nouveau composant Menu en utilisant le **selector** (a l'emplacement du commentaire `<!-- menu -->`).

* Remplacez le contenu de `menu.component.html` par celui de `maquettes/menu.component.html` et vérifiez s'il s'affiche dans votre application.

* De la même façon créer un second component `Beer` et intégrez-le 2 ou 3 fois dans l'app.component (a l'emplacement du commentaire `<!-- beer -->`). Vous devriez a présent voir s'afficher plusieurs fois "Beer Works" : chacun correspond à une instance de votre BeerComponent.
