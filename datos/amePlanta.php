<?php
include 'conexion.php';
session_start();
$usuario = $_SESSION['userid'];
$fecha_hora = date('Y-m-d H:i:s');
$orden = $_POST['orden'];
switch ($orden) {
  case 1:
    $querySalidaPlanta =  mysqli_query($conexion,"SELECT * FROM salida_planta");
    $salidaPlanta = array();
        while($row =mysqli_fetch_assoc($querySalidaPlanta))
        {
            $salidaPlanta[] = $row;
        }
    $json = json_encode($salidaPlanta);
    echo $json;
  break;
  case 2:
    $queryStockPlanta =  mysqli_query($conexion,"SELECT * FROM stock");
    $stockPlanta = array();
        while($row =mysqli_fetch_assoc($queryStockPlanta))
        {
            $stockPlanta[] = $row;
        }
    $json = json_encode($stockPlanta);
    echo $json;
  break;
  case 3:
    $queryStockSalidaPlanta =  mysqli_query($conexion,"SELECT * FROM stock_salida");
    $stockSalidaPlanta = array();
        while($row =mysqli_fetch_assoc($queryStockSalidaPlanta))
        {
            $stockSalidaPlanta[] = $row;
        }
    $json = json_encode($stockSalidaPlanta);
    echo $json;
  break;
  case 10:
    $planta_id = $_POST['planta'];
    $querySalidaPlanta =  mysqli_query($conexion,"SELECT * FROM salida_planta WHERE planta_id='$planta_id'");
    $salidaPlanta = array();
        while($row =mysqli_fetch_assoc($querySalidaPlanta))
        {
            $salidaPlanta[] = $row;
        }
    $json = json_encode($salidaPlanta);
    echo $json;
  break;
  case 11:
    $planta_id = $_POST['planta'];
    $queryStock =  mysqli_query($conexion,"SELECT * FROM stock WHERE planta_id='$planta_id'");
    $stock = array();
        while($row =mysqli_fetch_assoc($queryStock))
        {
            $stock[] = $row;
        }
    $json = json_encode($stock);
    echo $json;
  break;
  case 12:
    $planta_id = $_POST['planta'];
    $queryStockSalida =  mysqli_query($conexion,"SELECT * FROM stock_salida WHERE planta_id='$planta_id'");
    $stockSalida = array();
        while($row =mysqli_fetch_assoc($queryStockSalida))
        {
            $stockSalida[] = $row;
        }
    $json = json_encode($stockSalida);
    echo $json;
  break;
  case 13:
    $localidad = $_POST['localidad'];
    $queryPlanta =  mysqli_query($conexion,"SELECT * FROM planta WHERE localidad_id='$localidad'");
    $planta = array();
        while($row =mysqli_fetch_assoc($queryPlanta))
        {
            $planta[] = $row;
        }
    $json = json_encode($planta);
    echo $json;
  break;
  case 14:
    $queryPlanta =  mysqli_query($conexion,"SELECT * FROM localidad");
    $planta = array();
        while($row =mysqli_fetch_assoc($queryPlanta))
        {
            $planta[] = $row;
        }
    $json = json_encode($planta);
    echo $json;
  break;
  case 15:
    $planta_id = $_POST['planta'];
    $queryPlanta =  mysqli_query($conexion,"SELECT * FROM planta WHERE id='$planta_id'");
    $planta = array();
        while($row =mysqli_fetch_assoc($queryPlanta))
        {
            $planta[] = $row;
        }
    $json = json_encode($planta);
    echo $json;
  break;
  case 21:
    $caudal = $_POST['caudalSalida'];
    $turbiedad_entrada = $_POST['turbiedadEntrada'];
    $turbiedad_salida = $_POST['turbiedadSalida'];
    $cloro_residual = $_POST['cloroResidual'];
    $color_test = $_POST['colorTest'];
    $planta_id = $_POST['planta'];

    if(!empty($caudal && $turbiedad_entrada && $turbiedad_salida && $cloro_residual && $fecha_hora)){
      $query =  mysqli_query($conexion,"INSERT INTO salida_planta (id,caudal, turbiedad_entrada, turbiedad_salida, cloro_residual,color_test, fecha_hora, planta_id, planta_usuario_id) VALUES (NULL, '$caudal','$turbiedad_entrada', '$turbiedad_salida', '$cloro_residual','$color_test', '$fecha_hora', '$planta_id', '$usuario')") or die(mysqli_error());
      $jsondata = array();
              $jsondata['success'] = true;
              $jsondata['message'] = 'Se guardo correctamente.';;
          }
          else {
              $jsondata['success'] = false;
              $jsondata['message'] = 'Error al guardar.';
          }
          //Aunque el content-type no sea un problema en la mayoría decasos, es recomendable especificarlo
          header('Content-type: application/json; charset=utf-8');
          echo json_encode($jsondata);
          exit();
  break;
  case 22:
    $sulfato = $_POST['sulfatoStock'];
    $hipoclorito = $_POST['hipocloritoStock'];
    $polielectrolito = $_POST['polielectrolitoStock'];
    $planta_id = $_POST['planta'];

    if(!empty($sulfato && $hipoclorito && $polielectrolito)){
      $query =  mysqli_query($conexion,"INSERT INTO stock (id,sulfato,hipoclorito, polielectrolito, fecha_hora, planta_id, planta_usuario_id) VALUES (NULL,'$sulfato','$hipoclorito', '$polielectrolito', '$fecha_hora', '$planta_id', '$usuario')") or die(mysqli_error());
      $jsondata = array();
              $jsondata['success'] = true;
              $jsondata['message'] = 'Se guardo correctamente.';;
          }
          else {
              $jsondata['success'] = false;
              $jsondata['message'] = 'Error al guardar.';
          }
          //Aunque el content-type no sea un problema en la mayoríadecasos, es recomendable especificarlo
          header('Content-type: application/json; charset=utf-8');
          echo json_encode($jsondata);
          exit();
  break;
  case 23:
  $sulfato = $_POST['sulfatoStockSalida'];
  $hipoclorito = $_POST['hipocloritoStockSalida'];
  $polielectrolito = $_POST['polielectrolitoStockSalida'];
  $planta_id = $_POST['planta'];

  if(!empty($sulfato && $hipoclorito && $polielectrolito)){
    $query =  mysqli_query($conexion,"INSERT INTO stock_salida(id,sulfato,hipoclorito, polielectrolito, fecha_hora, planta_id, planta_usuario_id) VALUES (NULL,'$sulfato','$hipoclorito','$polielectrolito', '$fecha_hora', '$planta_id', '$usuario')") or die(mysqli_error());
    $jsondata = array();
            $jsondata['success'] = true;
            $jsondata['message'] = 'Se guardo correctamente.';;
        }
        else {
            $jsondata['success'] = false;
            $jsondata['message'] = 'Error al guardar.';
        }
        //Aunque el content-type no sea un problema en la mayoríadecasos,es recomendable especificarlo
        header('Content-type: application/json; charset=utf-8');
        echo json_encode($jsondata);
        exit();
  break;
}
?>
