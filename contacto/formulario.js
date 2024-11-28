document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del mensaje antes de validar
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const telefono = document.getElementById('telefono');
  const correo = document.getElementById('correo');
  
  let validacionCampos = true; // verificar si todos los campos estan correctos
  

  // Validar correo debe tener "@" y "."
  // si no tiene texto+@+. entonces muestra alerta
  if (!/\S+@\S+\.\S+/.test(correo.value)) {
      alert("Por favor ingrese un correo electrónico válido.");
      correo.focus();
      validacionCampos = false;//es falso que todos los campos del formulario estan correctos
  }

  // Si todo esta correcto muestra mensaje
  if (validacionCampos==true) {
      alert("Formulario enviado correctamente!");
      
  }
});

// no escribir numeros en nombre
document.getElementById('nombre').addEventListener('input', function(event) {
  const input = event.target;
  // si se ingresa un número se cambia x vacio
  input.value = input.value.replace(/[^A-Za-záéíóúÁÉÍÓÚüÜ\s]/g, ''); 
  
});

// no escribir numeros en apellido
document.getElementById('apellido').addEventListener('input', function(event) {
  const input = event.target;
   // si se ingresa un número se cambia x vacio
  input.value = input.value.replace(/[^A-Za-záéíóúÁÉÍÓÚüÜ\s]/g, ''); 
 
});

// No escribir letras en numero
document.getElementById('telefono').addEventListener('input', function(event) {
  const input = event.target;
   // si se ingresa una letra se cambia x vacio
  input.value = input.value.replace(/[^0-9]/g, '');     
});


(function(){
    emailjs.init({
      publicKey: "I8nWxnwau7Jzf6FqW",
    });
})();

document.getElementById('formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   
    const serviceID = 'default_service';
    const templateID = 'template_qjbrlbe';
    emailjs.sendForm(serviceID, templateID, this)
    document.getElementById('formulario').reset();
});