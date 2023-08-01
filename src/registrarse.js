// Declarando variables para guardar los inputs del formulario
const formulario=document.getElementById('registrarse');
const emailInput=document.getElementById('email');
const nombreInput=document.getElementById('nombre');
const apellidoInput=document.getElementById('apellidos');
const telInput=document.getElementById('telefono');
const usuarioInput=document.getElementById('usuario');
const contasenaInput=document.getElementById('contraseña');
const submitBtn=document.getElementById('btn');

//Expresiones regulares para validar los inputs
const emailREGEX=new RegExp (/^([\w\.\_])*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{3,})$/);//validar email
const nombreREGEX=new RegExp (/^[a-zA-z\s]{2,}$/);//Validar nombre y apellido
const usuarioREGEX=new RegExp (/^[a-zA-z]{4,}$/);//validar username
const telREGEX=new RegExp (/\d{10}/);//Validación de teléfono


//Función que se invoca al hacer click al botón crear cuenta
function agregarUsuario (){
   //Validación de los inputs
    if(!nombreREGEX.test(nombreInput.value)||!nombreREGEX.test(apellidoInput.value)||!emailREGEX.test(emailInput.value)||!telREGEX.test(telInput.value)||!usuarioREGEX.test(usuarioInput.value)||!(contasenaInput.value.length>=6)){
        //si hay al menos un input que no pase la validación se muestra una alerta que pide revisar los inputs
        window.alert("Formato de entrada incorrecto, revise los campos proporcionados"); 
    } else{
        //si todos pasan la validación se llama a la función agregar usuario
        console.log("Se ha enviado información");
        Swal.fire({
            title: '¿Quieres registrarte?',
            text: "Tus datos serán almacenados",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'Black',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, registrarme'
          }).then((result) => {
            if (result.isConfirmed) {
             //Se crea el objeto usuario con los valores de los inputs
             user={"name":`${nombreInput.value}`,"lastname":`${apellidoInput.value}`,"email":`${emailInput.value}`, "phone":parseInt(telInput.value) ,"username":`${usuarioInput.value}`, "password":`${contasenaInput.value}`, "type":1};
            console.log(user);
            //se hace fetch a la api para mandar la información
            fetch("https://ojosdgato-api.up.railway.app/ojosdgato/users",{
            //Para mandar infromación especificamos el método post
            method:'POST',
            //Especificamos el formato de la información enviada, en este caso es un objeto json
            headers:{
                'Content-Type':'application/json'
            },
            //se especifica el contenido del cuerpo que se manda: el objeto usuario al que se le ha aplicado el metodo stringify
            body:JSON.stringify(user)
        }).then(res=>res.json)//se guarda la respuesta de la api en formato json
            .then(data=>console.log(data));//se muestra la respuesta en consola
              Swal.fire('Registrado');
            }
          })

    }
}
