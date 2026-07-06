const gestorTareas = (() => 
{
    //Se buca las tareas prevviamente guardadas
    //JSON.parse es para pasar de Texto  a un array (Lista).
    let tareas = JSON.parse(localStorage.getItem("misTareas")) || [];

    //obtenemos la lista actual, y se convierte en texto con JSON.stringfy

    const guardarEnStorage = () => 
    {
        localStorage.setItem("misTareas", JSON.stringify(tareas)); 
    };

    return {
        //Necesitamos la tarea (texto) para agreagrla
        agregarTarea: (texto) => 
        {
            const nuevaTarea = 
            {
                //Utilizamos la fecha actual para que el id no se repita jamas
                id: Date.now(),
                texto: texto
            };
            tareas.push(nuevaTarea); //Guardamos la tarea a la lista
            guardarEnStorage(); //Guardamos los cambios en nuestro navegador
        },
        //Para eliminar una tarea necesitamos el ID
        eliminarTarea: (id) => 
        {
            //Buscamos y evitamos que la tarea que queremos borrar se mantenga.
            tareas = tareas.filter(tarea => tarea.id !== id);
            //Guardamos los cambios en la lista 
            guardarEnStorage();
        },
        obtenerTareas: () => 
        {
            return [...tareas]; //Con esto mandamos una copia de nuestra lista
        }
    };
})();

const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

const renderizarTareas = () => 
{
    lista.innerHTML = '';

    //Se pide la lista actualizada
    const tareasActuales = gestorTareas.obtenerTareas();

    //Vamos recorriendo una por una
    tareasActuales.forEach(tarea => 
    {
        //Se crea un elemento li para la nueva tarea
        const li = document.createElement('li');
        li.classList.add('elemento'); //Asignamo clase para el estilo css

        //Le asignamos el texto de la tarea
        const textoNodo = document.createTextNode(tarea.texto);
        li.appendChild(textoNodo);

        //Se crea el boton para esta tarea
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        
        botonEliminar.addEventListener('click', function() 
        {
            gestorTareas.eliminarTarea(tarea.id);
            

            //Aviso de eliminacion
            Swal.fire({
                title: 'Eliminado',
                text: 'La tarea ha sido eliminada correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#722f37' 
            });

            //Volvemos a renderizar las tareas PERO sin la que se acaba de eliminar
            renderizarTareas();
        });

        //Insertamos el boton al elemento de la lista y despues agreagamos el elemeno (tarea) a la lista
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
};


botonAgregar.addEventListener('click', () =>
{
    const texto = input.value.trim(); //Se quita los espacios en blanco

    if (texto !== '')  //Verificacion para textos vacios
    {
        gestorTareas.agregarTarea(texto);  //Se guarda la tarea ingresada
        input.value = '';  //Limpiamos el input
        renderizarTareas();  //Renderizamos la lista con la nueva tarea
    } 
    else 
    {
        //Alerta para textos vacios
        alert('Escribe algo para agregar a la lista.');
    }
});

renderizarTareas();