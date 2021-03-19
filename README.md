## Test de recrutement Arhia

Objectif de l'exercice : Réaliser une todo app basique.
Remarque : il n'est pas demandé de gérer le login de l'utilisateur.

### Specs :

#### Front-end

  -  1 - Pouvoir ajouter une tâche
  -  2 - Pouvoir indiquer qu'une tâche est faite (avec une checkbox) ou à faire
  -  3 - Pouvoir supprimer une tâche.
  -  4 - Pouvoir modifier une tâche existante (en cliquant dessus, affiche une fenêtre modale correspondant à la spec 7).
  -  5 - Pouvoir afficher la liste des tâches. Les tâches sont triées par : non effectuées en 1er, puis date de réalisation décroissante
  -  6 - Pouvoir filtrer (checkbox) la liste des tâches pour afficher les tâches effectuées.
  -  7 - Un bouton doit permettre de créer une tâche générée aléatoirement (voir spec 1 Backend)
  -  8 - Cliquer sur la description d'une tâche affiche une fenêtre modale contenant la description, l'état (fait/pas fait) (les modifs d'un todo sont faites dans cette box) ainsi qu'une photo de chat aléatoire (histoire de mettre un peu de gaieté dans cette TODO list) grâce a ce endpoint : http://aws.random.cat/meow

### Back-end

- 1 - Une route permet de créer une tâche de manière aléatoire. La description de la tâche sera générée de cette façon : piocher une action dans une liste de verbes d'actions , piocher un objet aléatoire une liste d'objets et les concaténer pour former une phrase qui sera utilisée comme description de la tâche
- 2 - Des routes permettent de créer, supprimer, modifier, lister les tâches
- 3 - Il n'y a pas de base de données, les données sont uniquement gérées dans un tableau côté serveur.

### Technos :

- Front :  React ou Angular ou Vue ou ExtJS
- Back : NodeJS/Express
- Il est permis d'utiliser d'autres modules en supplément.

### Rendu :

- Le design et les couleurs sont libres.
- Sur un repos Github
- README.md (les choses nécessaires à une reprise de projet, setup dépendance etc...)

### Bonus

- Si l'application est responsive, c'est un +

### Exemple de TODO app "basique" :

-> http://todolistme.net/

### Temps imparti

- Junior : 48h. Le fait de ne pas avoir fini le projet n'est pas éliminatoire !

- Senior : 12h
