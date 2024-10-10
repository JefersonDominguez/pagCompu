
function submitReclamo() {
    var name = document.getElementById('nombres').value;
    var lastname = document.getElementById('apellidos').value;
    var phone = document.getElementById('telefono').value;
    var message = document.getElementById('queja').value;
    var respuesta = `Hola ${name}\ ${lastname}. Tu queja ha sido registrada.\nPronto te responderemos al teléfono ${phone}`;

    document.getElementById('respuesta').innerText = respuesta;
  }

  
