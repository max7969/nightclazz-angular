## PW5 - Les Services & appels HTTP

Nous allons à présent créer notre premier service afin de récupérer nos bières via une API REST.

Commencons par lancer le serveur qui fera tourner notre API.
Pour lancer le serveur, vous devez exécuter la commande suivante :

```shell
cd server
npm install
npm start
```
ou
```shell
cd server
yarn
yarn start
```

Le serveur sera disponible via l'URL `http://localhost:1337/api/v1`.
Cette API propose plusieurs points d'entrée :

- `GET` sur `/beers` retournera la liste des bières
- `GET` sur `/basket`  retournera le panier de l'utilisateur
- `POST` sur `/basket` pour ajouter une nouvelle bière au panier de l'utilisateur

Dans un premier temps la ressource qui nous intéresse est `GET`sur `/beers`.

Maintenant que notre serveur d'API est lancé, nous allons créer notre premier service `BeerService` à l'aide Angular CLI.

* Exécutez la commande de génération de service suivante afin de créer le service :
```shell
ng generate service beer
```
La commande à pour effet de créer les fichiers sources du service.

* Afin d'être capable d'injecter votre service dans vos autres classes, vous devez "fournir" votre service au système d'injection de dépendances d'Angular. Pour cela, ajoutez votre nouveau service aux providers de votre application dans `app.module.ts`.

Votre service est maintenant injectable dans les autres classes de votre application.

* Implémentez maintenant la méthode `fetchBeers` qui retournera dans un premier temps un tableau de bières issu du mock `BEERS`.

Il est maintenant temps d'injécter votre service dans votre `AppComponent`.

* Utilisez l'injection par constructeur pour injecter le service dans le composant.

* Implémentez `OnInit` dans votre composant principal et faites appel à `fetchBeers` pour initialiser les bières.

Votre application charge maintenant la liste des bières disponibles via son service `BeerService` de manière synchrone. Cela fonctionne bien dans notre cas car l'appel est très rapide mais n'est pas envisageable dans le cadre d'une vraie application.
En effet l'appel synchrone bloque l'execution du reste du javascript tant que l'appel n'a pas été résolu, ce qui si on appel un service distant peut prendre du temps et donc bloquer l'utilisation de l'application.

Pour résoudre le problème nous allons donc adapter notre service pour pouvoir l'appeler de façon asynchrone. Nous allons utiliser la classe `Observable` de RxJS.

* Modifier votre service afin qu'il retourne un observable de tableau de bières. A noter que RxJS propose la méthode of() qui permet de créer un Observable d'objet. Le contenu de votre `fetchBeers` devrait donc ressembler à :
``` 
return of(BEERS);
```

Les imports nécessaires sont les suivants :
```
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
```

Une fois votre méthode fetchBeers modifiée, il vous faut modifier l'appel à `fetchBeers` dans votre `AppComponent`.

* Utilisez la méthode `subscribe` fournit par Observable pour récupérer vos bières. La méthode subscribe prend en paramètre un callback qui sera appellé une fois l'appel à au service terminé.

Votre service est maintenant appellé de façon asynchrone et ne bloque plus le reste de l'application, même si l'appel prend plusieures secondes.

Nous sommes maintenant prêt à mettre en place l'appel à notre API REST. La première chose à faire est d'importer dans notre application le module http d'Angular.

* Ajouter dans votre `app.module.ts` l'import du module `HttpClientModule` d'Angular.

* Injectez via constructeur le client `HttpClient` dans votre `BeerService`.

Maintenant que tout est en place il ne reste plus qu'à mettre en place l'appel.

* Mettez en place l'appel à l'api en utilisant la méthode get du client `http`. Pour rappel l'url est la suivante :
"http://localhost:1337/api/v1/beers"

Le gros avantage du client http d'Angular => Il retourne des observables. Vous ne devriez donc pas avoir besoin de modifier le reste de votre application.



