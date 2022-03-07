let ledger = [
    {
        "transactionNumber": 2,
        "name": "Example",
        "URL": "",
        "paid": 1.5
    },
    {
        "transactionNumber": 1,
        "name": "Example",
        "URL": "",
        "paid": 0.5
    },
    {
        "transactionNumber": 0,
        "name": "Isaac Newton",
        "URL": "https://physicstoday.scitation.org/doi/10.1063/PT.3.4521",
        "paid": 27
    }
];

let ledgerParagraph = "";
for (let i = 0; i < ledger.length; i++){
    ledgerParagraph += ledger[i].transactionNumber + ": ";

    if  (ledger[i].URL != "") {
        ledgerParagraph += "<a href='" + ledger[i].URL + "'>" + ledger[i].name + "</a>";
    }
    else {
        ledgerParagraph += ledger[i].name;
    }

    ledgerParagraph += " ($" + ledger[i].paid.toFixed(2) + "), "
    
    if (i == ledger.length-1){
        ledgerParagraph = ledgerParagraph.slice(0,-2) + ".";
    };
}
document.getElementById("insertjshere").innerHTML = ledgerParagraph;