const pedidosUsuario = [
  { 'Orden': '001', 'Monto': '$40', 'Productos': ["Mint Lashes", "Cepilllo de limpieza"], 'Fecha': '28/07/2023', 'Estatus': 'Por confirmar', 'Comentario': '' },
  { 'Orden': '002', 'Monto': '$100', 'Productos': ["LashWash MX", "Lash Shampoo"], 'Fecha': '28/07/2023', 'Estatus': 'Por confirmar', 'Comentario': '' },
  { 'Orden': '003', 'Monto': '$35', 'Productos': ["LashWash MX", "Lash brush desechable"], 'Fecha': '28/07/2023', 'Estatus': 'Por confirmar', 'Comentario': '' },
  { 'Orden': '004', 'Monto': '$200', 'Productos': ["Mint Lashes", "Removedor en Crema"], 'Fecha': '28/07/2023', 'Estatus': 'Por confirmar', 'Comentario': '' },
  { 'Orden': '005', 'Monto': '$170', 'Productos': ["Nagaraku", "Pluma de Gel Removedor 5 mililitros"], 'Fecha': '28/07/2023', 'Estatus': 'Por confirmar', 'Comentario': '' }
]


//Función para mostrar pedidos
function mostrarPedidosUsuario(datos) {
  let i = 0;
  //declarando variable listado que representa el elemento <ol> en el documento html
  const listado = document.getElementById('lista');
  datos.forEach(elemento => {
    //Variable reseña, para guardar comentarios
    let reseña;
    //Variable atributo, que define si el modal para comentar es solo para lectura
    let atributo;
    // Si el estatus de la orden no es "entregado" el atributo del modal es "solo lectura" y el comentario mostrado es "Deja tu comentario en cuanto llegue tu pedido "
    if (elemento.Estatus == 'Entregado') { reseña = elemento.Comentario; atributo = ''; }
    else { reseña = 'Deja tu comentario en cuanto llegue tu pedido'; atributo = 'readonly'; }
    // Variable sección, que guarda los elementos necesarios para mostrar la información de cada orden
    let seccion = `<li class="list-group-item d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                              <div class="titulos">No. Orden: ${elemento.Orden}</div>
                              <div class="container text-center">
                                  <div class="row row-cols-auto">
                                      <div class="col"> Monto: ${elemento.Monto}</div>
                                      <div class="col"> Fecha: ${elemento.Fecha}</div>
                                      <div class="col"> Productos: ${elemento.Productos} </div>

                                  </div>
                              </div>
                          </div>
                          <div>
                          <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#${elemento.Orden}" >Comenta</button>
                          <div class="modal fade mod" id="${elemento.Orden}" tabindex="-1"  aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header titulo-mod">
                                <p class="modal-title titulos" id="tituloModal">¡Nos interesa tu opinión!</p>
                              </div>
                              <div class="modal-body cuerpo-mod">
                                <form>
                                  <div class="mb-3">
                                    <label for="${i}" class="col-form-label titulos">Escribe tu reseña:</label>
                                    <textarea class="form-control" id="${i}" ${atributo} >${reseña}</textarea>
                                  </div>
                                </form >
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button class="btn btn-dark" type="submit" name="submit" value="Submit" onclick="actualizar(${i})">Guardar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                          </div>
                      </li>`
    // se agrega sección al elemento listado
    listado.innerHTML += seccion;
    i++;
  });
}
// Invocación de la función mostrar pedidos usuario
mostrarPedidosUsuario(pedidosUsuario);

//Función que actualiza el comentario
function actualizar(identificador) {
  //La variable areaComentario que representa el textarea del modal para comentar de una sección específica
  const areaComentario = document.getElementById(`${identificador}`);
  //El atributo del objeto orden se actualiza con el valor del textarea 
  pedidosUsuario[identificador].Comentario = areaComentario.value;
}