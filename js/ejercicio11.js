function convertirDistancia() {
    var valor = document.getElementById("km");
    if(!valor.reportValidity()) {
        return;
    }
    var km = parseInt(valor.value)
    var millas = parseFloat(km * 0.621371);
    document.getElementById("resultado").value = millas;
}
    