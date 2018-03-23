## PW4 - Evènements

Nous allons à présent créer un panier et permettre l'ajout de bière à ce dernier.

* Ajoutez une fonction sur le beer component qui sera appelée au clic sur le bouton "Ajouter". Vous pouvez mettre un simple alert pour tester.

* Bindez l'évènement du clic sur le bouton à votre nouvelle fonction en modifiant le template de beer component. Vérifiez que l'alert se déclenche bien.

Nous allons maintenant mettre en place la communication entre le component enfant et le component parent.

* Ajoutez dans le beer component un "EventEmitter" de type `Beer`. 

```code
@Output()
  addBeerEvent: EventEmitter<Beer> = new EventEmitter<Beer>();
```

* Remplacez votre alert par un appel à la méthode emit de votre nouvel EventEmitter, en paramètre, spécifiez le payload qui sera dans notre cas votre bière. Votre beer component envoie maintenant un évènement vers l'exterieur au moment du clic.

Nous allons maintenant intercepter cet évènement dans le composant parent.

* Créez une nouvelle méthode `addBeerToBasket` qui prend en paramètre une bière et qui affiche une alerte. 

* Ajoutez un binding dans le template de votre app component qui fera appel à cette méthode en lui transmettant l'objet beer émis par l'EventEmitter.
N'oubliez pas de mettre $event en paramètre pour récupérer le payload. Vérifiez que votre app component reçoit bien l'event et affiche l'alerte.

* Modifiez la méthode `addBeerToBasket` pour qu'elle ajoute la bière à un nouvel attribut basket (tableau de bières).

Pour terminer, nous allons mettre à jour l'affichage du panier dans le menu component.

* Ajoutez un input dans votre menu component pour représenter le panier. N'oubliez de transmettre votre panier depuis le template de app component.

* Créez une méthode qui calcule le total du panier. Puis modifiez le template du menu pour faire apparaitre le nombre d'items et la somme.
