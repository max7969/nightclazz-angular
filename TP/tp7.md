## PW7 - Le routing

Nous allons maintenant gérer la navigation dans l'application afin de passer de la page listant les bières disponibles à une page affichant le panier pour le valider.

Pour cela il nous faut utiliser le module de **Routing** d'Angular.

### Un peu de ménage

Avant toute chose, nous allons partir de la branche `step7` du repo git.
Dans cette version, nous avons légèrement modifié la structure de l'application :
* L'ancien composant `AppComponent` devient `ProductsComponent`
* Un nouveau `AppComponent` a été crée qui ne contient plus que le footer pour le moment
* Un nouveau composant a été crée : `BasketComponent`, pour afficher le contenu du panier
* Il est normal que l'application n'affiche plus rien.


### Le module de Routing

* Créer un nouveau module **app-routing** pour la gestion de la route.
```shell
$ ng generate module app-routing --flat --module=app
```
Ici le flag __--flat__ indique que l'on ne veut pas un dossier séparé pour le module, mais plutôt qu'il soit mis a la racine du projet. Le flag __--module=app__ indique que ce nouveau module doit être importé dans `app.module.ts`.

Contrairement au module **AppModule**, **AppRoutingModule** n'aura pas besoin de déclarer des components, vous pouvez donc supprimer la ligne `declarations: []` ainsi que l'import de `CommonModule`.

Notre AppRoutingModule va configurer des `Routes` que l'on fournira au `RouterModule` d'Angular, importez ces éléments :
```Javascript
import { RouterModule, Routes } from '@angular/router';
```

### Créons maintenant les routes!

Les routes vont spécifier a Angular quel composant afficher pour quelle URL.
Un objet `Route` possède typiquement 2 éléments :
* _path_ : l'url relative qui correspond a la route. ex : _basket_ pour l'url `localhost:4200/basket`
* _component_ : le composant a afficher pour cette route.

Créez un tableau de `Routes` juste avant la déclaration `@NgModule` comme ceci :
```javascript
const routes: Routes = [
  { path: 'products', component: ProductsComponent }
  { path: 'basket', component: BasketComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];
```
( Le type `Routes` correspond a un objet qui est en fait un `Route[]` ).

La dernière route est la route par défaut : elle spécifie que si une URL correspond strictement a `''` (rien en l'occurrence), alors on redirige vers la route _products_

Il nous faut maintenant fournir ces Routes au `RouterModule` d'angular. Pour cela il faut l'ajouter dans le tableau  `NgModule.imports` et lui passer l'objet `routes` via la méthode `forRoot()` :
```javascript
imports: [ RouterModule.forRoot(routes) ],
```

Dernier point!
Pour que les autres composants de notre application puissent naviguer d'une route a l'autre, il faut que notre `AppRoutingModule` exporte `RouterModule` :


```Javascript
@NgModule({
  exports: [ RouterModule ]
})
```

__Récapitulatif__ : parce que ça fait beaucoup d'instructions d'un coup. Voici a quoi devrait ressembler votre fichier `app-routing.module.ts`

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasketComponent} from "./basket/basket.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
{ path: 'products', component: ProductsComponent },
{ path: 'basket', component: BasketComponent },
{ path: '', redirectTo: '/products', pathMatch: 'full' },
];


@NgModule({
imports: [ RouterModule.forRoot(routes)],
exports: [ RouterModule ]
})
export class AppRoutingModule {

}
```



### Modifier le AppComponent

Dire a Angular quel Component afficher pour quelle URL, c'est bien, mais il a besoin de savoir où les inclure :
c'est le rôle de la directive `<router-outlet></router-outlet>`.

Insérez-la dans `app.component.html` a l'emplacement indiqué par un commentaire.
