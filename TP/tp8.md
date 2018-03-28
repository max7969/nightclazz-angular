## Les formulaires


Il ne nous reste plus qu'à afficher le panier, et confirmer la commande!

Pour le panier, le tableau est présent, et afficher les informations contenues dans CheckoutComponent.basket ne devrait plus avoir de secrets pour vous!

Nous vous avons préparé le formulaire de confirmation pour vous, mais il va falloir faire le mapping et faire l'appel au serveur.

Le serveur attend une requête POST vers */basket/confirm* avec en Body, un objet JSON comportant les champs du formulaire.
Pas besoin d'envoyer le panier, le serveur l'a déjà.

Il va falloir créer un objet (`Customer` par exemple) et mapper ses champs avec le formulaire.
Voici à quoi pourrait ressembler cet objet :
```javascript
export interface Customer {
  name?: string,
  address?: string,
  creditCard?: string
}
```

Pour le mapping, il va falloir importer le module `FormsModule` au niveau de votre `AppModule` @NgModule.imports.

Ce module va vous permettre d'utiliser la propriété **NgModel** sur vos champs inputs : `<input [(ngModel)]="customer.name" ... />`

Vous vous souvenez du binding de propriétés avec `[unePropriété]` ? Et du binding d'events avec `(unEvent)` ? et bien ici vous avez la version **2 way data-binding** qui combine les 2.
Petit moyen mémo-technique pour se souvenir de l'ordre des caractères : **"Banana in the box"** soit les parenthèses à l'interieur des crochets.

Cette instruction indique à angular que la valeur du champ doit etre bindée en temps réel avec la valeur de l'objet dans votre classe (ici, le champ name de l'objet customer de CheckoutComponent)

Vous pouvez d'ailleurs tester ce 2 way data-binding en spécifiant une valeur par défaut a votre objet CheckoutComponent.customer.name.


Créez la méthode `validerCommande(Customer)` dans `BasketService` pour la requête POST. Le serveur ne renvoie rien, si ce n'est une réponse positive, alors vous pouvez afficher une alerte en cas de succès.
N'oubliez pas de vider votre panier une fois la commande confirmée.

Voila qui conclue notre TP, félicitations!

La correction du TP se trouve dans la branche **final** sur git :)

N'hésitez pas à nous contacter si vous avez des questions : david.dasilva@zenika.com & maxime.andre@zenika.com
