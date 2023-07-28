// Objeto con los datos del usuario
/*const usuario = {
  Usuario: "usuarioEjemplo",
  Telefono: 123456789,
  Email: "usuario@example.com",
  Password: "contrasena123",
};*/

// Función para obtener los datos del usuario desde la API mediante un método GET
async function obtenerDatosUsuario() {
  try {
    const response = await fetch("https://ojosdgato-api.up.railway.app/ojosdgato/users/12");
    if (!response.ok) {
      throw new Error("Error al obtener los datos del usuario.");
    }
    const data = await response.json();
    mostrarDatos(data);
  } catch (error) {
    console.error(error);
    window.alert("Error al obtener los datos del usuario.");
  }
}

// Función para enviar los datos modificados del formulario a la API mediante un método PUT
async function enviarDatosModificados() {
  const usuarioModificado = {
    name: document.getElementById("Usuario").value,
    phone: document.getElementById("Telefono").value,
    email: document.getElementById("Email").value,
    password: document.getElementById("Password").value,
  };

  try {
    const response = await fetch("https://ojosdgato-api.up.railway.app/ojosdgato/users/12", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioModificado),
    });

    if (!response.ok) {
      throw new Error("Error al guardar los datos modificados.");
    }

    window.alert("Los datos se han guardado correctamente.");
    bloquearCampos(); // Bloquear los campos nuevamente después de guardar
  } catch (error) {
    console.error(error);
    window.alert("Error al guardar los datos modificados.");
  }
}

// Modificar la función mostrarDatos para que reciba los datos del usuario como argumento
function mostrarDatos(data) {
  document.getElementById("Usuario").value = data.name;
  document.getElementById("Telefono").value = data.phone;
  document.getElementById("Email").value = data.email;
  document.getElementById("Password").value = data.password;
  bloquearCampos();
}

// Función para bloquear los campos del formulario
function bloquearCampos() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.disabled = true;
  });
}

// Función para habilitar los campos del formulario
function habilitarCampos() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.disabled = false;
  });
}

// Llamar a la función obtenerDatosUsuario para obtener los datos del usuario al cargar la página
window.onload = obtenerDatosUsuario;

// Agregar event listener al botón "Guardar" para enviar los datos modificados
document.getElementById("guardar-btn").addEventListener("click", (event) => {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  Swal.fire({
    title: '¿Deseas guardar los cambios?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Guardar',
    denyButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      enviarDatosModificados();
    }
  });
});


  // Agregar event listener al formulario para realizar la validación antes de guardar los cambios
  document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el envío del formulario si los campos no son válidos
    if (validarDatos()) {
      //Sección para bd
      bloquearCampos();
      // Recargar la página después de guardar los cambios y mostrar la alerta
      setTimeout(() => {
        window.location.reload();
        Swal.fire('¡Guardado!', '', 'success');
      }, 1000);
    }
  });