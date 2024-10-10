
const myForm = document.querySelector("#myForm");

//Creando el evento
myForm.addEventListener( "submit", validarFormulario )

//Funciones
function validarFormulario(e){
    e.preventDefault();
    const name = document.querySelector("#nombre").value 
    const lastname = document.querySelector("#apellido").value
    const telephone = document.querySelector("#telefono").value
    const message = document.querySelector("#mensaje").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent="Hola " + name + ". Estaremos respondiendo tu mensaje al " + telephone
}

