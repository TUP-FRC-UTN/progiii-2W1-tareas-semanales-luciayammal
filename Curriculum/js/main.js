function validarForm() {
    let txtNombre = document.getElementById('txtNombre');
    let txtCalificacion = document.getElementById('txtCalificacion');

    if(txtNombre.value === ""){
        alert('Complete el nombre');
        return false;
    }

    if(txtCalificacion.value === ""){
        alert('Ingrese una calificacion');
        return false;
    }

    let algunoCheckeado = false;
    let radio = document.getElementsByName('rdbOx');

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            algunoCheckeado = true;
            break;
        }
    }

    if (algunoCheckeado == false) {
        alert('Ingrese un servicio');
        return false;
    }

    return true;
}

function grabar(){
    if(validarForm()){
        alert('Validacion exitosa');
    }
}