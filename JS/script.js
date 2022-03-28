function calculateDelivery(total, country) {
    if (country == "CH") {
        if (total <= 50) {
            alert("Les Frais de port sont 20 FR");
        } else if (total <= 100) {
            alert("Les Frais de port sont 10 FR");
        }
        if (total <= 150) {
            alert("Les Frais de port sont 5 FR");
        } else {
            alert("Les Frais de port sont gratuits");
        }
    } else if (country == "FR" || country == "DE") {
        if (total <= 50) {
            alert("Les frais de port sont de 30.-");
        } else {
            alert("Les frais de port sont de 20.-");
        }
    } else {
        alert("Nous ne livrons pas dans cette zone !");
    }
    return
}

var total = Number(prompt("Quel est le montant ? "));
var country = prompt("Quel est le pays destination (CH, FR, DE) ? ");

alert(calculateDelivery(total, country));