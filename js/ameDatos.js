$(document).ready(function() {
    listarSalidaPlanta();
    listarStockPlanta();
    listarStockSalidaPlanta();
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
function listarStockPlanta() {
    $.ajax({
        type: 'POST',
        url: "amePlanta.php",
        data: $(this).serialize() + "&orden=" + 11,
        success: function(data) {
            $('#listarStockPlanta').html("");
            json = jQuery.parseJSON(data);
            var objeto = json;
            for (i = 0; i <= (objeto.length - 1); i++) {
                id = objeto[i].id;
                sulfato = objeto[i].sulfato;
                hipoclorito = objeto[i].hipoclorito;
                polielectrolito = objeto[i].polielectrolito;
                fechaHora = objeto[i].fecha_hora;
                $('#listarStockPlanta').append('<tr><td>' + sulfato + '</td><td>' + hipoclorito + '</td><td>' + polielectrolito + '</td><td>' + fechaHora + '</td></tr>');
            }
        }
    });
}
function listarStockSalidaPlanta() {
    $.ajax({
        type: 'POST',
        url: "amePlanta.php",
        data: $(this).serialize() + "&orden=" + 12,
        success: function(data) {
            $('#listarStockSalidaPlanta').html("");
            json = jQuery.parseJSON(data);
            var objeto = json;
            for (i = 0; i <= (objeto.length - 1); i++) {
                id = objeto[i].id;
                sulfato = objeto[i].sulfato;
                hipoclorito = objeto[i].hipoclorito;
                polielectrolito = objeto[i].polielectrolito;
                fechaHora = objeto[i].fecha_hora;
                $('#listarStockSalidaPlanta').append('<tr><td>' + sulfato + '</td><td>' + hipoclorito + '</td><td>' + polielectrolito + '</td><td>' + fechaHora + '</td></tr>');
            }
        }
    });
}
