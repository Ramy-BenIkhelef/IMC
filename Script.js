function IMC(poids, taille){
    poids = Number(prompt("indiquer votre poids en kg"));
    let tailleEntrer = Number(prompt("indiquer votre taille en centimètre")/100);
    taille = Math.pow(tailleEntrer,2);
    let imc = Number((poids / taille));
    return imc;
}
alert("Votre IMC est de " + IMC());







//.toString()
//Number()
//paseInt()
//ParseFloat()