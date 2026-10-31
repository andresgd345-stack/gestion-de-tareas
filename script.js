const inputTarea = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", () => {
    const textoTarea = inputTarea.value.trim();

    if (textoTarea === '') {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const nuevaTarea = document.createElement("li");

    const spanTexto = document.createElement("span");
    spanTexto.textContent = textoTarea;
    nuevaTarea.appendChild(spanTexto);

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    nuevaTarea.appendChild(btnEditar);

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    nuevaTarea.appendChild(btnEliminar);

    btnEliminar.addEventListener("click", () => {
        nuevaTarea.remove();
    });

    btnEditar.addEventListener("click", () => {
        const inputEditar = document.createElement("input");
        inputEditar.type = "text";
        inputEditar.value = spanTexto.textContent;

        const btnGuardar = document.createElement("button");
                btnGuardar.textContent = "Guardar";
                btnGuardar.style.backgroundColor = "orange";
                btnGuardar.style.color = "white";
        btnGuardar.textContent = "Guardar";

         
        const btnCancelar = document.createElement("button");
        btnCancelar.textContent = "Cancelar";

        nuevaTarea.innerHTML = '';
        nuevaTarea.appendChild(inputEditar);
        nuevaTarea.appendChild(btnGuardar);
        nuevaTarea.appendChild(btnCancelar);
        inputEditar.focus();

        btnGuardar.addEventListener("click", () => {
            const textoActualizado = inputEditar.value.trim();
            if (textoActualizado === '') {
                alert("La tarea no puede estar vacía");
                return;
              
            }
            restaurarElemento(textoActualizado);
        });

        btnCancelar.addEventListener("click", () => {
            restaurarElemento(spanTexto.textContent);
        });
    });

    function restaurarElemento(textoFinal) {
        nuevaTarea.innerHTML = '';
        spanTexto.textContent = textoFinal;
        nuevaTarea.appendChild(spanTexto);
        nuevaTarea.appendChild(btnEditar);
        nuevaTarea.appendChild(btnEliminar);
    }

    listaTareas.appendChild(nuevaTarea);
    inputTarea.value = '';
    inputTarea.focus();
});