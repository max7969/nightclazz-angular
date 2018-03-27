## PW6 - Le service basket
Nous allons créer un 2eme service pour la gestion du panier.

* Créez un service **Basket** via ng-cli :
```shell
$ ng generate service Basket --module app
```
Notez l'utilisation de l'argument __--module app__ qui va ajouter le service à la liste des **providers** du module **App** pour nous.

### API

Le service **Basket** a 2 méthodes :
* __getBasket()__, qui envoie une requête GET sur `http://localhost:1337/api/v1/basket` et obtient le panier de
l'utilisateur (un tableau de bières vide au départ)
* __updateBasket(Beer)__ qui envoie une requête POST sur la même adresse, avec une bière dans le body de la requête pour ajouter une bière au panier.
Le serveur répondra avec le nouveau panier mis à jour si la bière est en stock, ou avec une erreur 500 s'il n'y en a plus.

Par défaut les méthodes `http.get()` et `http.post()` ont un retour de type Object. Vous pouvez spécifier le
type de retour comme ceci : `http.get<Beer[]>( )`.

Pensez à typer le retour de ces méthodes avec un `Observable<Beer[]>`.

### Utiliser les méthodes du service

Maintenant que votre BasketService est créé, nous allons l'utiliser dans `AppComponent` :

* Faites appel à `BasketService.getBasket()` dans le `ngOnInit` afin d'obtenir un panier dés l'initialisation du composant.
* Faites appel à `BasketService.updateBasket()` dans la méthode `addBeerToBasket()`, à la place du push.

### Gestion des erreurs

Le serveur n'acceptera pas de commander des bières au dela du stock (et les stocks sont minces!).

Lors d'un appel a `BeerService.updateBasket()` avec une bière que le serveur n'a plus en stock, le serveur répondra par une erreur 500.

Affichez une alerte si le retour du service (`Observable<Beer[]>`) est en erreur. Pour information, la méthode `subscribe()` de *Observable* accepte un 2eme callback en paramètre pour le cas d'une erreur :

```javascript
this.basketService.updateBasket(beer)
      .subscribe(
        callbackSiSucces,
        CallbackSiErreur
      );
```

### Empêcher la sur-commande

Vérifiez que l'alerte s'affiche en commandant plusieurs fois la même bière. (il n'y en a que 2 de chaque, misère!)

A présent il serait plus pratique de ne pas pouvoir appuyer sur le bouton *Ajouter* si le stock est vide.

* bindez la propriété `[disabled]` du bouton sur une condition qui renvoie `true` si le stock de la bière = 0.
* afficher un texte "Rupture de stock" dans le template d'une bière si le stock = 0. (directive `*ngIf` )
* dans `AppComponent`, appelez le service `BeerService.fetchBeer()` dans la callback de succès a l'appel de `BasketService.updateBasket()` afin que les valeurs de stock des bières soient à jour, car c'est le serveur qui décrémente:
```javascript
this.basketService.updateBasket(beer) 
      .subscribe( 
        basket => { 
          this.basket = basket; 
          this.beerService.fetchBeers().subscribe( 
            beers => this.beers = beers // Le tableau de bières disponible possède des valeurs de stock mises à jour maintenant
          ) 
        }, 
```
