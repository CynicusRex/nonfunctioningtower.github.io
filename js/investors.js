let ledger = [
    {
        "transactionNumber": 2,
        "name": "silver",
        "URL": "https://shittytechjob.com/",
        "paid": "€4.34",
        "date": "7 March 2022, 22:24"
    },
    {
        "transactionNumber": 1,
        "name": "Infernuz",
        "URL": "https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20Awareness%20Month%202021%20-%20Phishing%20Tip%20Sheet.pdf",
        "paid": "€2.00",
        "date": "7 March 2022, 17:55"
    },
    {
        "transactionNumber": 0,
        "name": "Isaac Newton",
        "URL": "https://physicstoday.scitation.org/doi/10.1063/PT.3.4521",
        "paid": "∅",
        "date": ""
    }
];

let ledgerParagraph = "";
for (let i = 0; i < ledger.length; i++){
    ledgerParagraph += ledger[i].transactionNumber + ": <span title='" + ledger[i].date + "'>";

    if  (ledger[i].URL != "") {
        ledgerParagraph += "<a href='" + ledger[i].URL + "'>" + ledger[i].name + "</a>";
    }
    else {
        ledgerParagraph += ledger[i].name;
    }

    ledgerParagraph += " (" + ledger[i].paid + ")</span>, "
    
    if (i == ledger.length-1){
        ledgerParagraph = ledgerParagraph.slice(0,-2) + ".";
    };
}
document.getElementById("insertjshere").innerHTML = ledgerParagraph;