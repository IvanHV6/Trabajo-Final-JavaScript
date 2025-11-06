document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contacto-form");
  const producto = document.getElementById("producto");
  const extras = document.querySelectorAll(".extra");
  const plazo = document.getElementById("plazo");
  const presupuestoFinal = document.getElementById("presupuesto-final");
  const mensajeDiv = document.getElementById("mensaje-formulario");

  // Campos de validación
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const telefono = document.getElementById("telefono");
  const email = document.getElementById("email");

  // Mensajes de error
  const errorNombre = document.getElementById("error-nombre");
  const errorApellidos = document.getElementById("error-apellidos");
  const errorTelefono = document.getElementById("error-telefono");
  const errorEmail = document.getElementById("error-email");

  // Función para calcular presupuesto
  function calcularPresupuesto() {
    let total = 0;

    // Precio base según producto
    if (producto.value) total += parseInt(producto.value);

    // Extras
    extras.forEach(extra => {
      if (extra.checked) total += parseInt(extra.value);
    });

    // Ajuste por plazo
    const meses = parseInt(plazo.value) || 3; // valor por defecto 3
    const mesesBase = 3; // plazo estándar
    // Factor: cada mes menos de 3 aumenta un 10%, cada mes más de 3 rebaja un 0.5%
    let factor = 1;
    if (meses < mesesBase) {
      factor += (mesesBase - meses) * 0.10; // encarece
    } else if (meses > mesesBase) {
      factor -= (meses - mesesBase) * 0.005; // rebaja
    }

    // Evitar que el factor baje demasiado
    if (factor < 0.5) factor = 0.5;

    total = total * factor;

    presupuestoFinal.textContent = total.toFixed(2);
  }

  // Validación JavaScript para nombre (solo letras)
  function validarNombre() {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    if (!regex.test(nombre.value)) {
      errorNombre.textContent = "El nombre solo puede contener letras";
      errorNombre.style.color = "red";
      errorNombre.style.fontSize = "0.9em";
      return false;
    } else {
      errorNombre.textContent = "";
      return true;
    }
  }

  // Validación JavaScript para apellidos (solo letras)
  function validarApellidos() {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    if (!regex.test(apellidos.value)) {
      errorApellidos.textContent = "Los apellidos solo pueden contener letras";
      errorApellidos.style.color = "red";
      errorApellidos.style.fontSize = "0.9em";
      return false;
    } else {
      errorApellidos.textContent = "";
      return true;
    }
  }

  // Validación JavaScript para teléfono (solo números, 9 dígitos)
  function validarTelefono() {
    const regex = /^[0-9]{9}$/;
    if (!regex.test(telefono.value)) {
      errorTelefono.textContent = "El teléfono debe contener exactamente 9 números";
      errorTelefono.style.color = "red";
      errorTelefono.style.fontSize = "0.9em";
      return false;
    } else {
      errorTelefono.textContent = "";
      return true;
    }
  }

  // Validación JavaScript para email
  function validarEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value)) {
      errorEmail.textContent = "El correo electrónico no tiene un formato válido";
      errorEmail.style.color = "red";
      errorEmail.style.fontSize = "0.9em";
      return false;
    } else {
      errorEmail.textContent = "";
      return true;
    }
  }

  // Eventos para validación en tiempo real
  nombre.addEventListener("input", validarNombre);
  apellidos.addEventListener("input", validarApellidos);
  telefono.addEventListener("input", validarTelefono);
  email.addEventListener("input", validarEmail);

  // Eventos para cálculo de presupuesto
  producto.addEventListener("change", calcularPresupuesto);
  extras.forEach(extra => extra.addEventListener("change", calcularPresupuesto));
  plazo.addEventListener("input", calcularPresupuesto);

  // Simulación de envío con mensaje visible en la página
  form.addEventListener("submit", e => {
    e.preventDefault();

    // Validar todos los campos con JavaScript
    const nombreValido = validarNombre();
    const apellidosValido = validarApellidos();
    const telefonoValido = validarTelefono();
    const emailValido = validarEmail();

    // Comprobar que todos los campos estén validados y el formulario completo
    if (form.checkValidity() && nombreValido && apellidosValido && telefonoValido && emailValido) {
      // Mostrar mensaje de éxito en la página
      mensajeDiv.textContent = "✅ Formulario enviado correctamente. ¡Gracias por su solicitud!";
      mensajeDiv.style.display = "block";
      mensajeDiv.style.backgroundColor = "#d4edda";
      mensajeDiv.style.color = "#155724";
      mensajeDiv.style.border = "2px solid #c3e6cb";
      
      // Hacer scroll al mensaje
      mensajeDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Resetear formulario después de 2 segundos
      setTimeout(() => {
        form.reset();
        presupuestoFinal.textContent = "0";
        
        // Ocultar mensaje después de 3 segundos adicionales
        setTimeout(() => {
          mensajeDiv.style.display = "none";
        }, 3000);
      }, 2000);
    } else {
      // Mostrar mensaje de error en la página
      mensajeDiv.textContent = "❌ Por favor, corrige los errores en el formulario antes de enviarlo.";
      mensajeDiv.style.display = "block";
      mensajeDiv.style.backgroundColor = "#f8d7da";
      mensajeDiv.style.color = "#721c24";
      mensajeDiv.style.border = "2px solid #f5c6cb";
      
      // Hacer scroll al mensaje
      mensajeDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Ocultar mensaje de error después de 5 segundos
      setTimeout(() => {
        mensajeDiv.style.display = "none";
      }, 5000);
    }
  });

  // Evento para resetear también los mensajes de error
  form.addEventListener("reset", () => {
    errorNombre.textContent = "";
    errorApellidos.textContent = "";
    errorTelefono.textContent = "";
    errorEmail.textContent = "";
    mensajeDiv.style.display = "none";
    presupuestoFinal.textContent = "0";
  });
});

