## PW6 - Le service basket
Nous allons créer un 2eme service pour la gestion du panier.

* Créez un service **Basket** via ng-cli :
```shell
$ ng generate service Basket --module app
```
Notez l'utilisation de l'argument __--module app__ qui va ajouter le service à la liste des **providers** du module **App** pour nous.

Le service **Basket** a 2 méthodes :
* __getBasket()__, qui envoie une requête GET sur `http://localhost:1337/api/v1/basket` et obtient le panier de
l'utilisateur (un tableau de bières vide au départ)
* __updateBasket(Beer)__ qui envoie une requête POST sur la même adresse, avec une bière dans le body de la requête pour ajouter une bière au panier.
Le serveur répondra avec le nouveau panier mis à jour si la bière est en stock, ou avec une erreur 500 s'il n'y en a plus.

Par défaut les méthodes `http.get()` et `http.post()` ont un retour de type Object. Vous pouvez spécifier le
type de retour comme ceci : `http.get<Beer[]>( )`.

Pensez à typer le retour de ces méthodes avec un `Observable<Beer[]>`.
