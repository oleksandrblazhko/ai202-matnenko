let requestID = 1;
let author = "Вербицький";
let composeName = "Гімн України";

//вивід списків композицій заданого автора, скомпонованих за жанром
ComposeList musicList = searchCompose(requestID, author)

//вивід обраної користувачем композиції заданого автора
Composition composition = selectCompose(musicList, composeName)
