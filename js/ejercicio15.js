let registroEstudiante=[];

function registrar()
{
    let valor_nombre = document.getElementById("nombre");
    let valor_calificacion = document.getElementById("calificacion");

    if(valor_nombre.value == "" || !valor_calificacion.reportValidity())
    {
        return;
    }

    const verificacion = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!verificacion.test(valor_nombre.value))
    {
        return;
    }

    let calificacion = parseInt(valor_calificacion.value);

    let estudiante = {
        nombre_est: valor_nombre.value,
        calificacion_est: calificacion
    };

    registroEstudiante.push(estudiante);

    document.getElementById("nombre").value="";
    document.getElementById("calificacion").value="";
}

function calcular()
{
    if(registroEstudiante.length == 0)
    {
        return;
    }

    let calificacion_max = Math.max(...registroEstudiante.map(e => e.calificacion_est));
    let calificacion_min = Math.min(...registroEstudiante.map(e => e.calificacion_est));

    let promedio = registroEstudiante.reduce((total,estudiante) => total + estudiante.calificacion_est, 0) / registroEstudiante.length;

    const cant_max = registroEstudiante.filter (estudiante => estudiante.calificacion_est == calificacion_max);

    const cant_min = registroEstudiante.filter (estudiante => estudiante.calificacion_est == calificacion_min);

    const nombres_max = cant_max.map(estudiante => estudiante.nombre_est).join(",");

    const nombres_min = cant_min.map(estudiante => estudiante.nombre_est).join(",");

    document.getElementById("promedio").value= "El promedio de " + registroEstudiante.length + " estudiantes es: " + promedio.toFixed(2);
    document.getElementById("estu-max").value = "Estudiante(s) con la maxima calificacion son: " + nombres_max;
    document.getElementById("estu-min").value = "Estudiante(s) con la minima calificacion son: " + nombres_min;

    registroEstudiante = [];
}