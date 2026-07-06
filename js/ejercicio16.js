const validacion = /^[+-]?\d+(\.\d+)?$/;

function validar_numero (operacion_elegida)
{
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if (!validacion.test(numero1) || !validacion.test(numero2))
    {
        Swal.fire({
            title: "¡Error de Validación!",
            text: "Por favor, asegúrate de ingresar únicamente números válidos en ambos campos.",
            icon: "error",
            scrollbarPadding: false,
        });
    }
    else
    {
        let num_1 = parseFloat(numero1);
        let num_2 = parseFloat(numero2);
        var resultado = operaciones(operacion_elegida, num_1,num_2);
        document.getElementById("resultado").value = resultado;
    }
}

const operaciones = (op_elegida, num1, num2) => 
{
    if(op_elegida == '+')
    {
        return sumar(num1,num2);
    }
    if(op_elegida == '-')
    {
        return restar(num1,num2);
    }
    if(op_elegida == '*')
    {
        return multiplicar(num1,num2);
    }
    if(op_elegida == '/')
    {
        return division(num1,num2);
    }
};


const sumar = (num1, num2) => num1 + num2;

const restar = (num1, num2) => num1 - num2;

const multiplicar = (num1, num2) => num1 * num2;

const division = (num1, num2) => num2 !== 0 ? num1 / num2 : 'Error: Division por cero';

document.getElementById("btn-sumar").addEventListener("click", () => validar_numero('+'));
document.getElementById("btn-restar").addEventListener("click",() => validar_numero('-'));
document.getElementById("btn-multiplicar").addEventListener("click", () => validar_numero('*'));
document.getElementById("btn-dividir").addEventListener("click",()=> validar_numero('/'));