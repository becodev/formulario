//Declaración de variables

var formkey = document.querySelector("#formkey");
var button = document.querySelector("#button");
var respuesta = document.querySelector("#respuesta");

// variables para expresiones regulares

// La clave tiene que tener 2 letras del nombre, 3 letras del apellido, el DNI completo y la fecha.

function getKey() {
  // Generación de clave
  var key = names.value.substring(0, 2);
  key += lastName.value.substring(0, 3);
  key += ID.value;
  key += birthDate.value.substring(8);
  key += birthDate.value.substring(3, 5);
  key += birthDate.value.substring(0, 2);

  return key;
}

function validacion(evento) {
  evento.preventDefault();
  //Declaración de variables
  let names = document.querySelector("#names");
  let lastName = document.querySelector("#lastName");
  let ID = document.querySelector("#ID");
  let birthDate = document.querySelector("#birthDate");

  // variables para expresiones regulares
  let expRegNames = /^([A-Z a-z]+[\s]*)+$/;
  let expReglastName = /^([A-Z a-z]+[\s]*)+$/;
  let expRegID = /^\d+$/;
  let expRegBirthDate = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})+$/;

  if (!names.value | !lastName.value | !ID.value | !birthDate.value) {
    alert("Campos vacios!");
    return;
  } else {
    if (!expRegNames.exec(names.value)) {
      alert("Nombre solo debe contener letras");
      names.focus();
      return;
    }
    if (!expReglastName.exec(lastName.value)) {
      alert("El apellido solo debe tener letras.");
      lastName.focus();
      return;
    }
    if (!expRegID.exec(ID.value)) {
      alert("El DNI debe ser solo numeros.");
      ID.focus();
      return;
    }

    if (!expRegBirthDate.exec(birthDate.value)) {
      alert("Fecha de nacimiento deben ser sólo numeros");
      birthDate.focus();
      return;
    }
  }

  let clave = getKey(evento);
  respuesta.innerHTML = "Tu clave es:" + clave.toUpperCase();

  alert("Enviando Formulario");
}

formkey.addEventListener("submit", validacion);
