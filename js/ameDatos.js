$(document).ready(function() {
    listarSalidaPlanta();
});

function listarSalidaPlanta() {
    $.ajax({
        type: 'POST',
        url: "amePlanta.php",
        data: $(this).serialize() + "&orden=" + 10,
        success: function(data) {
            $('#listarSalidaPlanta').html("");
            json = jQuery.parseJSON(data);
            var objeto = json;
            for (i = 0; i <= (objeto.length - 1); i++) {
                id = objeto[i].id;
                caudal = objeto[i].caudal;
                turbiedadEntrada = objeto[i].turbiedad_entrada;
                turbiedadSalida = objeto[i].turbiedad_salida;
                cloroResidual = objeto[i].cloro_residual;
                fechaHora = objeto[i].fecha_hora;
                $('#listarSalidaPlanta').append('<tr><td>' + caudal + '</td><td>' + turbiedadEntrada + '</td><td>' + turbiedadSalida + '</td><td>' + cloroResidual + '</td><td>' + fechaHora + '</td></tr>');
            }
        }
    });
}
