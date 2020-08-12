# DiplomaturaJS-Backend

Prototipo para el backend usado en la diplomatura de JS dictada por Patagonian Academy

## Introduccion: 
Este proyecto se trata de un red social diseñaba para que los usuarios puedan crear sus propios memes, y además escribir comentarios sobre ellos.

## Instalación: 
Se requiere el paquete npm, por lo que primero se debe ejecutar el siguiente comando:
```bash
        npm install
```
Luego para ejecutar el proyecto se puede hacer con:

```bash
        npm run start 
```
ó

```bash
        npm run watch.
```

## Rutas

UsersEndpoint:
Create a user  -  POST        /users/
Update user    -  PATCH    /users/me/
Delete user     -  DELETE    /users/me/

NOTAS: por ahora update y delete no existen de esa forma , cuando agreguemos autenticación si

Comments Endpoint:
Create comment                      -  POST    /comments/:memeID
Get comments from Meme   -  GET      /comments/memes/:memeID
Get comments from User      -   GET     /comments/users/me


NOTA: get comments from User no existe de esta forma, cuando agreguemos autenticación si

Memes Endpoint:
Create a meme               -    POST /memes/:memeID
Get all memes                 - GET  /memes
Get memes from User   - GET /memes/users/

NOTA: create meme y get memes from user todavía no existen de esta forma, así van a ser cuando tengamos autenticación


![alt text](C:\Users\leo_1\Documents\Facultad\Diplomatura\ProyectoFinal\DiplomaturaJS-Backend\src\docs\pictures\photo_2020-08-12_14-45-18.jpg)