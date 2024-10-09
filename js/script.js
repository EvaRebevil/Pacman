let pacman = document.getElementById("pacman");
let playground = document.getElementById("playground");
let hammertime = new Hammer(playground);
// hammertime.on('pan', function(ev) {
// 	console.log(ev);
// });
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
// déclaration de fonction
function movepacman(direction) {
    switch (direction) {
        case "gauche":
            if (posX > 0) {
                posX -= 50;
            }
            break;
        case "haut":
            if (posY > 0) {
                posY -= 50;
            }
            break;
        case "droite":
            if (posX < widthPlayground - 150) {
                posX += 50;
            }
            break;
        case "bas":
            if (posY < heightPlayground - 150) {
                posY += 50;
            }
            break;

        default:
            break;
    }
    pacman.style.transform = "translate(" + posX + "px," + posY + "px)"
}

//GESTION TACTILE
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
hammertime.on("swipeleft swiperight swipeup swipedown", function (ev) {
    console.dir(ev.type);
    switch (ev.type) {
        case "swipeleft":
            movepacman("gauche");
            break;
        case "swipeup":
            movepacman("haut");
            break;
        case "swiperight":
            movepacman("droite");
            break;
        case "swipedown":
            movepacman("bas");
            break;
        default:
            break;
    }
});

// window pour javascript représente "le navigateur"
window.addEventListener("keyup", function (e) {
    console.log(e.keyCode, posX, posY);
    switch (e.keyCode) {
        case 37: //gauche
        case 81: //Q
            movepacman("gauche");
            //posX = posX -50;
            // if (posX > 0) {
            //     posX -= 50;
            // }
            // posX -= 50;
            // pacman.style.transform = "translate(" + posX + "px," + posY + "px)"
            break;


        case 38: //haut
        case 90: //Z
            movepacman("haut");
            // if (posY > 0) {
            //     posY -= 50;
            // }
            // posY -= 50;
            // pacman.style.transform = "translate(" + posX + "px," + posY + "px)"
            break;
        case 39: //droite
        case 68: //D
            movepacman("droite");
            // if (posX < widthPlayground - 150) {
            //     posX += 50;
            // }
            // posX += 50;
            // pacman.style.transform = "translate(" + posX + "px," + posY + "px)"
            break;
        case 40: //bas
        case 83: //S
            movepacman("bas");
            // if (posY < heightPlayground - 150) {
            //     posY += 50;
            // }
            // posY += 50;
            // pacman.style.transform = "translate(" + posX + "px," + posY + "px)"
            break;
        default:
            break;
    }
});

