# DDR - Deprecated Dependencies Reporter
Basic wrapper around GitHub's API to look for files containing certain words. It exports the results to a .csv format. Given that the CLI is really simple it doesn't use **ANY** third-party dependencies to keep it as debt-free as possible.

Its only purpose is to serve as a tool for the SRE team to check what files still use a deprecated package.

## Configuration
Setup environment variables

    - DDR_GH_TOKEN


## Building and Running

```
go build
./ddr -output results.csv
```

## Usage
The program only consists of two flags. Both optional.
- -string: name of the word/s to look for. If a sentence is specified, it must be enclosed by double quotes.
- -output: name of the output file


## Examples
Only a word:
- ./ddr -string Logger


If an exact match of a string consisting of many words needs to be searched for. It's necessary to use double quotes as shown below:
- ./ddr -string "import com.bancar.core.utils.BancarLogger;"

The CLI does **NOT** accept a sentence without double quotes.
Please note, that the following code is not equivalent to the previous snippet. It doesn't yield the expected result:
./ddr -string import com.bancar.core.utils.BancarLogger;
It's the same as ./odr -string import

## Output Format
The CSV Columns are: 
- name: name of the file that contains the searched word.
- path: path inside the repo
- url: URL of the repo
- total_count: number of occurrences


## Possible improvements. TODO:
- Add a flag to choose a repository name to look into.
- Add a flag to search all the repositories in the entire organization. Will require a different logic for handling GitHub's Rate Limiter.
- Append current date to output name



<h1 align="center">
  <img src="docs/images/patagonian-banner.jpg" alt="Patagonian Banner" />
</h1>

### [Facultad de Informática (UnComa)](http://faiweb.uncoma.edu.ar/) + [Patagonian Academy](https://patagonian.it/academy)

**Backend** usado en el proyecto final de la diplomatura en Desarrollo Full-Stack dictada por Patagonian Academy.

## Tabla de contenidos

- [**Introducción**](#introducción)

- [**Prerrequisitos**](#prerrequisitos)

- [**Instalación**](#instalación)

- [**Cómo funciona**](#cómo-funciona)

- [**Endpoints**](#endpoints)

  - [**User Endpoint**](#user-endpoint)

    - [**Show User**](#show-user)
    - [**Sign Up**](#sign-up)
    - [**Sign In**](#sign-in)

  - [**Meme Endpoint**](#meme-endpoint)
     - [**Show Memes**](#show-memes)
     - [**Create Meme**](#create-meme)

  - [**Comment Endpoint**](#comment-endpoint)
     - [**Show Comments from User**](#show-comments-from-user)
     - [**Show Comments from Meme**](#show-comments-from-meme)
     - [**Create Comment**](#create-comment)
- [**Data Model Design**](#data-model-design)
## Introducción

Este proyecto se trata de un red social diseñada para que los usuarios puedan crear sus propios memes, y además escribir comentarios sobre ellos. Similar a 9GAG.
**Frontend:** https://github.com/CarolinaVillegas/Diplomatura-Front
## Prerrequisitos

- [Node](https://github.com/nodejs/node) >= v12.18.2
- [npm](https://github.com/npm/cli) >= v6.14.5

## Instalación

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

## User Endpoint

### Show User

---

Retorna un json con los datos de un solo usuario.

- **URL**

  /users/:id

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Cristian Vincenzini", email: "crisfullstacker@js.com" }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User does not exist." }`

- **Sample Call:**

  ```javascript
  TODO;
  ```

### Sign Up

---

Crea un usuario.

- **URL**

  /users/

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  None

- **Data Params**

  ```json
  {
    "name": "Leo",
    "email": "leox@jsdev.com",
    "password": "12345678"
  }
  ```

- **Success Response:**

  - **Code:** 201 <br />
    **Content:** `{ id : 34, name : "Leo", email: "leox@jsdev.com" }`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error }`

- **Sample Call:**

  ```javascript
  TODO;
  ```
  
  
  
### Sign In

---

Ingresar al sistema.

- **URL**

  /users/login

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  None

- **Data Params**

  ```json
  {
    "email": "leox@jsdev.com",
    "password": "12345678"
  }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** 
    ```json
    {
    "user": {
        "_id": "5f4a90464c88422d349cd743",
        "name": "Leo",
        "email": "leox@jsdev.com",
        "__v": 11
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjRhOTA0NjRjODg0MjJkMzQ5Y2Q3NDMiLCJpYXQiOjE2MDAwOTI5ODB9.UPtr8MumAikupax-DfSytHkn9GAy_gJJSnU75-v-POk"
  }
  ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error }`

- **Sample Call:**

  ```javascript
  TODO;
  ```

## Meme Endpoint

### Show Memes

---

Retorna un json con los datos de todos los memes

/memes

- **Method:**

  `GET`

- **URL Params**

  **Required:**

* **Data Params**

  None

* **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ [id : 3453451, title: "macri gato", img: url, category: "funny", comment_counter: 10, raiting: 100, owner: 12], [], [] }`

* **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Memes doesn't exists" }`

### Create Meme

---

Crear un meme.

- **URL**

  /memes

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  None

- **Data Params**

  ```json
  {
    "title": "will smith",
    "img": "url",
    "category": "funny"
  }
  ```

- **Success Response:**

  - **Code:** 201 <br />
    **Content:** `{ id : 3453451, title: "will smith", img: url, category: "funny", comment_counter: 0, raiting: 0, owner: 1124 }`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error }`

- **Sample Call:**

  ```javascript
  TODO;
  ```

## Comment Endpoint

### Show Comments from User

---

Retorna un json con los comentarios de un usuario

/comments/users/:userID

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ [id : 34, message: "muy bueno" meme: 412 owner: 12], [], [] }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Comments doesn't exists" }`

### Show Comments from Meme

---

Retorna un json con los comentarios de un meme

/comments/memes/:memeID

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ [id : 35, message: "malo" meme: 122 owner: 15], [], [] }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Comments doesn't exists" }`

### Create Comment

---

Crear un comentario.

- **URL**

  /:userID/:memeID

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  ```json
  {
    "message": "really funny"
  }
  ```

- **Success Response:**

  - **Code:** 201 <br />
    **Content:** `{ id : 36, message: "malo" meme: 122 owner: 15 }`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error }`

- **Sample Call:**

  ```javascript
  TODO;
  ```



## Data Model Design

![alt text](https://github.com/MarcosDanielTorres/DiplomaturaJS-Backend/blob/master/docs/images/model-architecture.jpg)
