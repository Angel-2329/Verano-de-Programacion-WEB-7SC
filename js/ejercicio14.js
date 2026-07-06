function calcular()
{
    var datos = document.getElementById("numeros");

    if(!datos.reportValidity())
    {
        return;
    }

    var valor= datos.value;

    const verificacion = /^[0-9,]+$/;

    if (!verificacion.test(valor))
    {
        return;
    }

    var arreglo = valor.split (",");
    var numeros = arreglo.map(Number);

    var max = Math.max(...numeros);
    var min = Math.min(...numeros);

    var suma = numeros.reduce((acc,valor) => acc + valor, 0)
    var prom = suma / arreglo.length;

    document.getElementById("num-may").value = max;
    document.getElementById("num-men").value = min;
    
    document.getElementById("prom").value = prom.toFixed(2);
}