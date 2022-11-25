1. Встановити Docker на машину.
2. Запустити командний рядок або _PowerShell_.
3. Створити каталог, наприклад: `D:/mongotest` через `mkdir`.
4. Створити підкаталог `scripts`, що буде містити файл `init.js` з кодом

```js
db = connect("mongodb://localhost/project");

db.createUser({
  user: "admin",
  pwd: "111111",
  roles: ["readWrite", "dbAdmin"],
});

db.users.insertMany([
  {
    "_id": "1",
    username: "ThaumBear",
    password: "bear6719",
    secret_key: "5e0dd59c8686b2ed36a50a9f428cf39f305a1fb5c0d2f842a5b2716bae9e0004",
  },
  {
    "_id": "2",
    username: "UserScott",
    password: "754269",
    secret_key: "6x0dd59c8676b2e236a50a9f428cf39f305a1fb5c0d2f842a5b2716bae9e0004",
  },
]);

db.composes.insertMany([
  {
    name: "Гімн України",
    author: "Вербицький",
    genre: "Гімн",
    rate: 5,
  },
  {
    name: "Україна - це ти",
    author: "Кароль",
    genre: "Поп-музика",
    rate: 4.9,
  },
  {
    name: "Деяка пісня",
    author: "Деякий автор",
    genre: "Деякий жанр",
    rate: 0,
  },
]);
```

4. Ввести команду `docker pull mongo` для одержання образу із потрібними файлами та конфігурацією.
5. Створити та запустити контейнер, використовуючи команду `docker run --name matnenko-mongo -p 29009:29009 -w /scripts -v ${PWD}:/scripts -d mongo`.
6. Запустити _mongosh_ для роботи з _MongoDB_: `docker exec -it matnenko-mongo mongosh project` та загрузити створений раніше скрипт `load("scripts/init.js")`.
7. База даних налаштована та заповнена.
8. Підключення до бази даних: `mongodb://admin:111111@localhost:29009/project`.
