// Objeto con los datos del usuario
/*const usuario = {
  Usuario: "usuarioEjemplo",
  Telefono: 123456789,
  Email: "usuario@example.com",
  Password: "contrasena123",
};*/

// Function to populate the form fields with user data from the API
async function obtenerDatosUsuario() {
  try {
    const response = await fetch("https://ojosdgato-api.up.railway.app/ojosdgato/users/12");
    if (!response.ok) {
      throw new Error("Error en la solicitud al servidor: " + response.status + " " + response.statusText);
    }
    const data = await response.json();
    mostrarDatos(data);
  } catch (error) {
    console.error(error);
    window.alert("Error al obtener los datos del usuario. Verifique la consola para más detalles.");
  }
}

// Function to display user data in the form fields and enable editing
function mostrarDatos(data) {
  document.getElementById("Usuario").value = data.name;
  document.getElementById("Telefono").value = data.phone;
  document.getElementById("Email").value = data.email;
  document.getElementById("Password").value = data.password;
  habilitarCampos();
}

// Function to enable the form fields for editing
function habilitarCampos() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.disabled = false;
  });
}

// Function to disable the form fields to prevent editing
function bloquearCampos() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.disabled = true;
  });
}

// Function to send the modified data to the API using a PUT request
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
    bloquearCampos();
  } catch (error) {
    console.error(error);
    window.alert("Error al guardar los datos modificados.");
  }
}

// Load user data on page load
window.onload = obtenerDatosUsuario;

// Add event listener to the "Habilitar edición" button
document.getElementById("editar-btn").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission
  habilitarCampos();
});

// Add event listener to the form for data validation and saving changes
document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission
  if (validarDatos()) {
    enviarDatosModificados();
  }
});