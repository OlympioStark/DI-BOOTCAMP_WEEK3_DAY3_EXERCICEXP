// Copiez le code ci-dessus dans un fichier HTML structuré.
// Dans votre fichier Javascript, ajoutez la fonctionnalité qui vous permettra de faire
// glisser le fichier boxet de le déposer dans le fichier target.
// Consultez les notes de cours nommées animations DOM

let element = document.getElementById("box");
let elmt = document.getElementById("target");

element.setAttribute('draggable', 'true');

element.addEventListener("dragstart", drag);
element.addEventListener("drop", drop);
elmt.addEventListener("dragover", allowDrop)
elmt.addEventListener("drop", drop)

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id)
}

function drop(e) {
    e.preventDefault();
    let donneee = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(donneee));
}