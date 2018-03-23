## PW3 - Boucles et conditions

* Créez l'interface Beer en utilisant Angular CLI. Une bière est définie par un label, une description, une image (chemin relatif), un prix et un stock.

```shell
$ ng generate interface beer
```

* Ajoutez un attribut beer dans votre component beer.component qui implémente cette nouvelle interface. Décorez le de façon à en faire une input.

* Modifiez le template du beer.component de façon à afficher les propriétés de la bière. Vous pouvez utilisez une base de template disponible dans le dossier maquette.

* Récupérez le fichier `mock/beer-mock.ts` et déposez le à la racine de votre projet. Ce fichier défini une constante BEERS qui est un tableau contenant des exemples de bières.

* Dans votre app.component, importez votre beer-mock et en utilisant ngFor dans le template, bouclez sur vos bières. Pour chacune d'entre elles, appellez un beer.component en lui passant la bière.
