// let choice = prompt("Que souhaitez-vous faire?\n\n1-Addition\n2-Multipication\n3-Soustraction\n4-Division");

// while(choice<1 || choice>4) {
//     choice = prompt("Que souhaitez-vous faire?\n\n1-Addition\n2-Multipication\n3-Soustraction\n4-Division");
// }

function add(na,nb) {
    return na+nb;
} 

function multi(na,nb) {
    return na*nb;
}

function sub(na,nb) {
    return na-nb;
}

function div(na,nb) {
    if (nb == 0){
        throw new Error("impossible division par zéro");
    }
    return na/nb;
}


let choice; 
let n1;
let n2;


do {
    choice = Number(prompt("Que souhaitez-vous faire?\n\n1-Addition\n2-Multipication\n3-Soustraction\n4-Division"));
} while (choice<1 || choice>4 || isNaN(choice)) 

do {
    n1 = prompt("Entrez un premier nombre: ");
    n2 = prompt("Entrez un deuxième nombre: ");
} while (isNaN(n1) || isNaN(n2) || n1 == "" || n2 == "")
n1 = Number(n1);
n2 = Number(n2);

let result;

switch(choice) { 
    case 1: 
        result = add(n1,n2);
        break;
    case 2:
        result = multi(n1,n2);
        break;
    case 3:
        result = sub(n1,n2);
        break;
    case 4:
        result = div(n1,n2);
        break;
    default:
        alert("Erreur !!");
}

alert(result);