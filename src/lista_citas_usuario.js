const citasUsuario = [
    { 'id': 1, 'fecha': '23/08/2023', 'horario': '12:00-15:00', 'estatus': 'Pendiente' }
]
// función para mostrar lista de citas
function mostrarCitas(datos) {
    //Declarando variable del elemento <ol> en el dom 
    const lista = document.getElementById('lista');
    let i = 0;
    datos.forEach(element => {
        //Guardando en variavle cita todos los elementos que necesitan renderizarse en la tarjeta
        const cita = `<li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">No. cita: ${element.id}</div>
                                 <div class="container text-center">
                                        <div class="row row-cols-auto">
                                            <div class="col"> Fecha agendada: ${element.fecha} </div>
                                            <div class="col"> Hora agendada: ${element.horario} </div>                            
                                            <span>Estatus: <span id="${i}">${element.estatus}</span></span>
                                                
                                         </div>
                                    </div>
                            </div>
                                <div class="dropdown">
                                    <button class="btn btn-dark" type="button" onclick="cancelar(${i})">
                                        Cancelar
                                    </button>     
                                </div>
                        </li>`
        // añadiendo cita al elemento lista 
        lista.innerHTML += cita;
        i++;
    });
}
//invocando la función  para mostrar el listado de citas
mostrarCitas(citasUsuario);

//función para cancelar cita
function cancelar(elemento) {
    //Declarando la variable valor estatus que representa el <span> en donde se muestra el estatus de la cita
    const valorEstatus = document.getElementById(`${elemento}`);
    //Si la cita ya está finalizada no se puede cancelar. Si aún no lo está se cambia el estatus a cancelado
    if (citasUsuario[elemento].estatus =='Finalizada') { citasUsuario[elemento].estatus = 'Finalizada'; }
    else { citasUsuario[elemento].estatus = 'Cancelada'; }
    //Se muestra el nuevo valor del estatus
    valorEstatus.textContent = citasUsuario[elemento].estatus;
}
