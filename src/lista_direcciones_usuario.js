//Se define un objeto direccionesUsuario que contiene información sobre las direcciones del usuario.
const direccionesUsuario={"id_address": 3,
"alias": "Casa",
"postcode": 234567,
"state": "Edo. Mex",
"municipality": "Naucalpan de Juárez",
"city": "Naucalpan",
"settlement": "Colonia",
"street": "Calle",
"exterior_number": "12",
"interior_number": null,
"street1": null,
"street2": null,
"instruction": null,}

//Generar el HTML para mostrar la dirección en una lista.
function mostrarDirecciones(datos){ 
  const lista=document.getElementById('lista');
      const direccion=`<li class="list-group-item d-flex justify-content-between align-items-start" id="${i}">
                          <div class="ms-2 me-auto">
                                <span class="titulos">Alias: ${datos.alias}</span>
                                <br>
                                <span> CP. ${datos.postcode}</span>
                                <span> </span>
                                <span> Entidad: ${datos.state}</span>
                                <span> </span>
                                <span> Municipio/Alcaldía: ${datos.municipality}</span>
                                <span> </span>
                                <span> Colonia: ${datos.settlement}</span>  
                                <span> </span>
                          </div>
                          <div class="dropdown">
                              <button class="btn btn-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="bi bi-chevron-down"></i>
                              </button>
                              <ul class="dropdown-menu">
                                <li id="eliminar-li" ><a class="dropdown-item" onclick="eliminar(${i})" href="#">Eliminar</a></li>
                              </ul>
                            </div>            
                        </li>`
      lista.appendChild(direccion);
}
mostrarDirecciones(direccionesUsuario);
//Boton eliminar de pagina lista_direcciones_usuario.html
function eliminar(elemento) {
  
    // mostrar ventanas emergentes (modales) 
    Swal.fire({
      title: '¿Estás seguro/a?',
      text: "No podrás deshacer esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'Black',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, borrar.'
    }).then((result) => { //manejar el resultado exitoso de la operación asincrónica.
      if (result.isConfirmed) {
        let i=0;
        direccionesUsuario.forEach(d=>{ // Para cada dirección, se obtiene el elemento del DOM con el id correspondiente y se elimina del DOM utilizando el método remove()
          let datosDireccion=document.getElementById(`${i}`);
          datosDireccion.remove();
          console.log(`Eliminado el  id${i}`);
          i++;
        });
        if(direccionesUsuario[elemento].Predeterminado){
          direccionesUsuario[elemento].Predeterminado=false;
          direccionesUsuario.splice(elemento,1);
          if(elemento==direccionesUsuario.length){direccionesUsuario[0].Predeterminado=true;}
          else{direccionesUsuario[elemento].Predeterminado=true;}
          console.log(direccionesUsuario);
        }else{direccionesUsuario.splice(elemento,1);}
        
        mostrarDirecciones(direccionesUsuario);

        Swal.fire('Eliminado.');
        
      }
    })
}


  
