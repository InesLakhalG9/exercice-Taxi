// Creation de la class du Personnage
class Personnage {
    constructor(prenom, santeMentale) {
        this.prenom = prenom;
        this.santeMentale = santeMentale;
    }
}

// Définition de la liste de musiques
const musiques = ["This Ain't Love-Giveon", "Eurostar-Ninho", "Alone-BurnaBoy", "Lovely-Billie Eilish", "Anissa - Wejdene"];

// Définition du Trajet
class Trajet {
    constructor(radio, feuxRouges) {
        this.radio = radio;
        this.feuxRouges = feuxRouges;
        this.changementsTaxi = 0;
    }

    passerFeuxRouges() {
        for (let i = 0; i < this.feuxRouges; i++) {
            const musique = musiques[Math.floor(Math.random() * musiques.length)];
            console.log(`Musique : ${musique}, Feux restants : ${this.feuxRouges - (i + 1)}`);
            if (musique === "Anissa - Wejdene") {
                this.radio.santeMentale--;
                this.changementsTaxi++;
                if (this.radio.santeMentale === 0) {
                    console.log("Explosion");
                    return;
                }
            }
        }
        console.log(`Arrivé à destination avec ${this.changementsTaxi} changements de taxi.`);
    }
}

// Création d'un perso John avec une santé mentale à 10
const john = new Personnage("John", 10);

// Création d'un Trajet avec une radio et 30 feux rouges
const trajet = new Trajet(john, 30);

// Début du trajet
trajet.passerFeuxRouges();


//crée par Ines Lakhal
