let pacman = document.getElementById("pacman");
let playground = document.getElementById("playground")
let posX = 0, posY = 0;
let widthPlayground = playground.clientWidth;
let heightPlayground = playground.clientHeight;
let varInutile;
varInutile = 245;
varInutile = "bonjour";
varInutile = false;
console.log(posX, posY);
console.log(varInutile);
console.dir(pacman);

// window pour javascript représente "le navigateur"
window.addEventListener("keyup", function (e) {
    console.log(e.keyCode, posX, posY);
    switch (e.keyCode) {
        case 37: //gauche
        case 81: //Q
            //posX = posX -50;
            if (posX > 0) {
                posX -= 50;
            }
            // posX -= 50;
            pacman.style.transform = "translate(" + posX + "px," + posY + "px)"
            break;


        case 38: //haut
        case 90: //Z
            if (posY > 0) {
                posY -= 50;
            }
            // posY -= 50;
            pacman.style.transform = "translate(" + posX + "px," + posY + "px)"
            break;
        case 39: //droite
        case 68: //D
            if (posX < widthPlayground - 150) {
                posX += 50;
            }
            // posX += 50;
            pacman.style.transform = "translate(" + posX + "px," + posY + "px)"
            break;
        case 40: //bas
        case 83: //S
            if (posY < heightPlayground - 150) {
                posY += 50;
            }
            // posY += 50;
            pacman.style.transform = "translate(" + posX + "px," + posY + "px)"
            break;
        default:
            break;
    }
});