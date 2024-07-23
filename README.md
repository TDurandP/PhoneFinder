### PhoneFinder - Test
## Lancer le projet

1 - Ouvrez le terminal (visual code, intellij...)
2 - npm i pour installer les dépendances et modules.
3 - npm run dev pour démarrer le projet.
4 - http:localhost:3000 pour accéder au point d'entrée de l'application.
5 - connexion à la base de données :
5.1 - Il faut avoir une base de données MySQL (wamp, xamp...)
5.2 - créer un .env à la racine du projet et y ajouter ceci : 
```
DATABASE_URL="mysql://IDENTIFIANTBDD:MOTDEPASSEBDD@localhost:3306/phonefinder"
```
5.3 remplacez IDENTIFIANTBDD par votre identifiant d'accès à wamp ou xamp, de meme pour le MOTDEPASSEBDD
5.4. Créer une base de données sous le nom de phonefinder.
5.5 Pour générer les entités et les tables de la base de données, tapez dans le terminal :
 ```
    npx prisma migrate deploy
```
6. Vous pouvez désormais tester le CRUD.

