function ej1() {
    let m = parseFloat(prompt("Ingresa la magnitud aparente:"));
    let r = "";
    if (m <= 0) r = "Extremadamente brillante";
    else if (m <= 2) r = "Muy brillante";
    else if (m <= 4) r = "Brillante";
    else if (m <= 6) r = "Débil";
    else r = "No visible";
    document.getElementById("salida").innerHTML =
        "<h3>Magnitud</h3>" +
        "Magnitud: " + m + "<br>" +
        "Clasificación: " + r;
}

function ej2() {
    let n = parseInt(prompt("¿Cuántas distancias ingresarás?"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        let d = parseFloat(prompt("Distancia " + i + ":"));
        suma += d;
    }
    let prom = suma / n;
    document.getElementById("salida").innerHTML =
        "<h3>Distancias</h3>" +
        "Promedio: " + prom;
}

function ej3() {
    let diam = 1;
    let cont = 0;
    while (diam !== 0) {
        diam = parseFloat(prompt("Diámetro (0 para parar):"));
        if (diam > 50) cont++;
    }
    document.getElementById("salida").innerHTML =
        "<h3>Cráteres</h3>" +
        "Cráteres > 50 km: " + cont;
}

function ej4() {
    let c = parseInt(prompt("Código (1-5):"));
    let tipo = "";
    switch (c) {
        case 1: tipo = "Estrella"; break;
        case 2: tipo = "Planeta"; break;
        case 3: tipo = "Cometa"; break;
        case 4: tipo = "Asteroide"; break;
        case 5: tipo = "Galaxia"; break;
        default: tipo = "Código no válido";
    }
    document.getElementById("salida").innerHTML =
        "<h3>Cuerpo Celeste</h3>" +
        "Resultado: " + tipo;
}

function ej5() {
    let texto;
    let noches = 0;
    do {
        texto = prompt("Ingresa lux o 'no':");
        if (texto !== "no") {
            let valor = parseFloat(texto);
            if (valor < 5) noches++;
        }
    } while (texto !== "no");
    document.getElementById("salida").innerHTML =
        "<h3>Luz</h3>" +
        "Noches profundas: " + noches;
}
