// Seleccionar los elementos importantes del DOM
const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');
const alertPlaceholder = document.getElementById('alertPlaceholder');
// Función para agregar un nuevo elemento a la lista

function mostrarAlerta(mensaje, tipo) 
{
    alertPlaceholder.innerHTML = '';
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${tipo} alert-dismissible fade show custom-alert" role="alert">`,
        `   <div>${mensaje}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');
    
    alertPlaceholder.append(wrapper);
}

function agregarElemento() 
{
    const texto = input.value.trim(); // Obtiene el valor del input y elimina espacios innecesarios
    if (texto !== '') 
    {
        // Crear un nuevo elemento 'li' y un botón de eliminar
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'shadow-sm', 'mb-2', 'border-0', 'rounded'); // Añadimos una clase al li
        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo); // Agrega el texto al li
        // Crear el botón de eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm', 'custom-btn-danger');
        botonEliminar.addEventListener('click', function() 
        {
            li.remove(); // Eliminar el li al hacer clic en el botón de
            eliminar
        });
        // Añadir el botón al li
        li.appendChild(botonEliminar);
        // Agregar el li a la lista
        lista.appendChild(li);
        // Limpiar el campo de texto
        input.value = '';
        input.focus();
    } 
    else 
    {
        mostrarAlerta('Por favor, escribe un elemento válido antes de agregar.', 'warning');
    }
}
// Asignar la función al botón de agregar
botonAgregar.addEventListener('click', agregarElemento);