function sekoita(v, avain) {
    
    var tulos = [];
    
    for (var k = 0; k < v.length; k++) {
        var paikka = avain[k];
        tulos[paikka] = v[k];
        console.log("paikka: " + paikka + ", tulos[paikka]: " + tulos[paikka]);
    }
    
    return tulos;
    
}

var viesti = [79, 73, 75, 69, 65];
var avain = [1, 3, 0, 4, 2];

console.log(sekoita(viesti, avain));