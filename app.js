const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTareas = document.getElementById("lista-de-tareas");

function agregarTarea() {
  if (input.value) {
    // crear tarea
    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("tarea");
    // texto ingresado al input
    let texto = document.createElement("p");
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);
    // crear y agregar contenedor de iconos

    let iconos = document.createElement("div");
    iconos.classList.add("iconos");
    tareaNueva.appendChild(iconos);

    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
completar.addEventListener("click",completarTarea)
    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
    eliminar.addEventListener("click",eliminarTarea)

    iconos.append(completar, eliminar);
    //

    listaDeTareas.appendChild(tareaNueva);
  } else {
    alert("poe favor ingresar tarea");
  }
}
 function completarTarea(e) {
    let tarea =e.target.parentNode.parentNode;
    tarea.classList.toggle("completada");
    
 }
 function eliminarTarea(e) {
    let tarea =e.target.parentNode.parentNode;
    tarea.remove();
    
 }
    
 
boton.addEventListener("click", agregarTarea);
input,addEventListener("keydown",(e)=>{

if (e.key === "Enter"){
    agregarTarea();
}

})