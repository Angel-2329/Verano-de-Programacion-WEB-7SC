function convertirDivisas() {
    var valor = document.getElementById("pesos");
    if(!valor.reportValidity()) {
        return;
    }
    var pesos = parseInt(valor.value)
    var usd = parseFloat(pesos / 18.18);
    document.getElementById("resultado").value = usd.toFixed(2) + " USD";
}
    