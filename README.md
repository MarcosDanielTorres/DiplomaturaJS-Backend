<h1 align="center">
  <img src="docs/images/patagonian-banner.jpg" alt="Patagonian Banner" />
</h1>
### [Facultad de Informática (UnComa)](http://faiweb.uncoma.edu.ar/) + [Patagonian Academy](https://patagonian.it/academy)


**Backend** usado en el proyecto final de la diplomatura en Desarrollo Fullstack dictada por


## Tabla de contenidos
- [**Introducción**](#introducción)

- [**Instalación**](#instalación)

- [**Cómo funciona**](#cómo-funciona)

- [**Guía de uso**](#guía-de-uso)




## Introducción: 
Este proyecto se trata de un red social diseñaba para que los usuarios puedan crear sus propios memes, y además escribir comentarios sobre ellos. //TODO: expandir más y linkear al frontend

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

## Diagrama de clases

![alt text](https://github.com/MarcosDanielTorres/DiplomaturaJS-Backend/blob/master/docs/images/model-architecture.jpg)
