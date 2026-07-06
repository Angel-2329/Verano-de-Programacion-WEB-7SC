function verificar()
{
    var valor = document.getElementById("edad");
    var edad = document.getElementById("edad").value;

    if (!valor.reportValidity())
    {
        return;
    }
    if(edad >= 18)
    {
        document.getElementById("resultado").value= "Puedes Votar";
    }
    else{
        document.getElementById("resultado").value= "No Puedes Votar";
    }
}