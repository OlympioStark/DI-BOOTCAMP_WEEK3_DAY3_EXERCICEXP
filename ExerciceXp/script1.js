// Première Partie

// Dans votre fichier Javascript, à l 'aide de setTimeout, appelez une fonction après 2 secondes.
// La fonction alertera "Hello World".

let div = document.querySelector('div');

function textHello(text) {
    alert(text);
}

setTimeout(textHello, 2000, "Hello World");

// Partie II
// Dans votre fichier Javascript, à l 'aide de setTimeout, appelez une fonction après 2 secondes.
// La fonction ajoutera un nouveau paragraphe < p > Hello World < /p>au fichier <div id="container">.

function helloWorld() {

    let newPar = document.createElement('p');
    let text = document.createTextNode("Hello World");
    if (div.children.length < 5) {
        newPar.appendChild(text);
        div.appendChild(newPar);
    } else {
        deleteParagraph();
    }
}

setTimeout(helloWorld, 2000);

//Partie III
// Dans votre fichier Javascript, à l 'aide de setInterval, appelez une fonction toutes les 2 secondes.
// La fonction ajoutera un nouveau paragraphe < p > Hello World < /p>au fichier <div id="container">.
// L 'intervalle sera effacé (c'
// est - à - dire clearInterval), lorsque l 'utilisateur cliquera sur le bouton.

let timer = setInterval(helloWorld, 2000);

function deleteParagraph() {
    clearInterval(timer, 5000);
}

// Au lieu de cliquer sur le bouton, l 'intervalle sera effacé (c'
// est - à - dire clearInterval) dès qu 'il y aura 5 paragraphes à l'
// intérieur du < div id = "container" >
// clearInterval(timer, 5000)