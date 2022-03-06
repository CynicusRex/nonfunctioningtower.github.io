let investorList = [
    {
        "number": 1,
        "name": "Example",
        "URL": "https://www.cynicusrex.com",
        "paid": 175
    },
    {
        "number": 3,
        "name": "Example",
        "URL": "https://www.cynicusrex.com",
        "paid": 107
    },
    {
        "number": 100,
        "name": "Example",
        "URL": "https://www.cynicusrex.com",
        "paid": 3.5
    }
];

let investorListParagraph = "№ 0: <a href='https://physicstoday.scitation.org/doi/10.1063/PT.3.4521'>Isaac Newton</a> (€350). <br>";
for (let i = 0; i < investorList.length; i++){
    investorListParagraph += "№ " + investorList[i].number + ": " + 
    "<a href='" + investorList[i].URL + "'>" + investorList[i].name + "</a>" + 
    " (€" + investorList[i].paid.toFixed(2) + "), ";

    if (i == investorList.length-1){
        investorListParagraph = investorListParagraph.slice(0,-2) + ".";
    };
}
document.getElementById("insertjshere").innerHTML = investorListParagraph;