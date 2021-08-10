var numar1 = prompt("Introduceti primul numar");
var numar2 =prompt("Introduceti al doilea numar");
var operatie =prompt("Introduceti tipul operatiei");

numar1=parseFloat(numar1);
numar2=parseFloat(numar2);

function calculeaza(numar1, numar2, operatie){

    if(operatie == "+"){
        return numar1+numar2
    }

    if(operatie =="-"){
        return numar1-numar2
    }

    if(operatie =="*"){
        return numar1*numar2
    }
    if(operatie == "/"){
        return numar1/numar2
    }
}

alert(calculeaza(numar1, numar2, operatie))