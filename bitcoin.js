const url = "https://blockchain.info/ticker"; // URL cible

function bitcoinPrice() {
    let req = new XMLHttpRequest(); // Création d'un object de requête HTTP
    req.open('GET', url); // Premier paramètre la méthode ici GET, deuxième paramètre l'url
    req.responseType = "json"; // Type de réponse attendue ici format json
    req.send(); // Envoie de la requête

    req.onload = () => { // Au chargement de la requête
        if (req.readyState === XMLHttpRequest.DONE) { // Si la requête est effectuée
            if (req.status === 200) { // Si la requête à bien été effectuée. Code succès 200
                // Récupération et affichage du dernier prix en euro du bitcoin
                console.log(req.response.EUR.last);
                document.getElementById("price_label").textContent = req.response.EUR.last;            
            }
        }
    }
}

// Rafraichissement du prix toutes les 5 secondes
setInterval(bitcoinPrice, 5000);