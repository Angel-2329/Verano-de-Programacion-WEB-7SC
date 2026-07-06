function convertirTemperatura() {
    var valor = document.getElementById("celsius");
    if(!valor.reportValidity()) {
        return;
    }
    var celsius = parseInt(valor.value)
    var fahrenheit = parseFloat((celsius * 9/5) + 32);
    document.getElementById("resultado").value = fahrenheit;
}
    