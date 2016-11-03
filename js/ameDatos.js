function listarSalidaPlantas() {
    $.ajax({
        type: 'POST',
        url: "datos/amePlanta.php",
        data: $(this).serialize() + "&orden=" + 1,
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
                colorTest = objeto[i].color_test;
                fechaHora = objeto[i].fecha_hora;
                planta = objeto[i].planta_id;
                if(colorTest == 1){
                  colorTest = 'Positivo';
                }
                else {
                  colorTest = 'Negativo';
                }
                $('#listarSalidaPlanta').append('<tr><td>' + caudal + '</td><td>' + turbiedadEntrada + '</td><td>' + turbiedadSalida + '</td><td>' + cloroResidual + '</td><td>' + colorTest + '</td><td>' + planta + '</td><td>' + fechaHora + '</td></tr>');
            }
        }
    });
}
function listarStockPlantas() {
    $.ajax({
        type: 'POST',
        url: "datos/amePlanta.php",
        data: $(this).serialize() + "&orden=" + 2,
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
                planta = objeto[i].planta_id;
                $('#listarStockPlanta').append('<tr><td>' + sulfato + '</td><td>' + hipoclorito + '</td><td>' + polielectrolito + '</td><td>' + planta + '</td><td>' + fechaHora + '</td></tr>');
            }
        }
    });
}
function listarStockSalidaPlantas() {
    $.ajax({
        type: 'POST',
        url: "datos/amePlanta.php",
        data: $(this).serialize() + "&orden=" + 3,
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
                planta = objeto[i].planta_id;
                $('#listarStockSalidaPlanta').append('<tr><td>' + sulfato + '</td><td>' + hipoclorito + '</td><td>' + polielectrolito + '</td><td>' + planta + '</td><td>' + fechaHora + '</td></tr>');
            }
        }
    });
}
function listarSalidaPlantaID(planta) {
    $.ajax({
        type: 'POST',
        url: "datos/amePlanta.php",
        data: $(this).serialize() + "&orden=" + 10 +"&planta="+planta,
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
                colorTest = objeto[i].color_test;
                fechaHora = objeto[i].fecha_hora;
                planta = objeto[i].planta_id;
                if(colorTest == 1){
                  colorTest = 'Positivo';
                }
                else {
                  colorTest = 'Negativo';
                }
                $('#listarSalidaPlanta').append('<tr><td>' + caudal + '</td><td>' + turbiedadEntrada + '</td><td>' + turbiedadSalida + '</td><td>' + cloroResidual + '</td><td>' + colorTest + '</td><td>' + planta + '</td><td>' + fechaHora + '</td></tr>');
            }
        }
    });
}
function listarStockPlantaID(planta) {
    $.ajax({
        type: 'POST',
        url: "datos/amePlanta.php",
        data: $(this).serialize() + "&orden=" + 11 +"&planta="+planta,
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
function listarStockSalidaPlantaID(planta) {
    $.ajax({
        type: 'POST',
        url: "datos/amePlanta.php",
        data: $(this).serialize() + "&orden=" + 12 +"&planta="+planta,
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
function enviarStockPlantaId() {
    $('#selectPlanta').change(function() {
        planta = $('#selectPlanta').val();
        listarStockPlantaID(planta);
    });
}
function enviarStockSalidaPlantaId() {
    $('#selectPlanta').change(function() {
        planta = $('#selectPlanta').val();
        listarStockSalidaPlantaID(planta);
    });
}
function enviarSalidaPlantaId() {
    $('#selectPlanta').change(function() {
        planta = $('#selectPlanta').val();
        listarSalidaPlantaID(planta);
    });
}
function listarPlantasLocalidad() {
    $('#selectLocalidad').change(function() {
        localidad = $('#selectLocalidad').val();
        listarPlantas(localidad);
    });
}
function listarLocalidades(){
  $.ajax({
      type: 'POST',
      url: "datos/amePlanta.php",
      data: $(this).serialize() + "&orden=" + 14,
      success: function(data) {
          $('#selectLocalidad').html("<option> - </option>");
          json = jQuery.parseJSON(data);
          var objeto = json;
          for (i = 0; i <= (objeto.length - 1); i++) {
              id = objeto[i].id;
              localidad = objeto[i].localidad;
              $('#selectLocalidad').append('<option value='+id+'>'+localidad+'</option>');
          }
      }
  });
}
function listarPlantas(localidad){
  $.ajax({
      type: 'POST',
      url: "datos/amePlanta.php",
      data: $(this).serialize() + "&orden=" + 13 + "&localidad=" + localidad,
      success: function(data) {
          $('#selectPlanta').html("<option> - </option>");
          json = jQuery.parseJSON(data);
          var objeto = json;
          for (i = 0; i <= (objeto.length - 1); i++) {
              id = objeto[i].id;
              planta = objeto[i].planta;
              $('#selectPlanta').append('<option value='+id+'>'+planta+'</option>');
          }
      }
  });
}
