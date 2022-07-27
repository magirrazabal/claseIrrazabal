//debugger

let mesIngresado = (prompt("Ingrese un mes de invierno, o ESC para salir")).toLowerCase;

while (mesIngresado != "ESC") {
    switch (mesIngresado) {
        case "enero":
            alert ("NOP");
            break;
        case "febrero":
            alert ("Nones");
            break;
        case "marzo":
            alert ("NOU");
            break;
        case "abril":
            alert ("Casi, pero no");
            break;
        case "mayo":
            alert ("Siii");
            break;
        case "junio":
            alert ("Siii");
            break;
        case "julio":
            alert ("Siii");
            break;
        case "agosto":
            alert ("Siii");
            break;
        case "septiembre":
            alert ("Te pasaste");
            break;
        case "octubre":
            alert ("Lejos");
            break;
        case "noviembre":
            alert ("What?");
            break;
        case "diciembre":
            alert ("Nada que ver");
            break;
        default:
            alert ("No se reconoce la palabra, ¿usaste minúsculas?");
            break;
    }
    mesIngresado = prompt("Intente de nuevo, o presione ESC para salir");
}

