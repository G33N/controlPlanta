<?php
include 'conexion.php';
session_start();
$orden = $_POST['orden'];
switch ($orden) {
  case 10:
    $user = $_POST['user'];
    $password = $_POST['password'];
    if ( !isset($_SESSION['username']) && !isset($_SESSION['userid']) ){
      $queryLogin =  mysqli_query($conexion,"SELECT id,user,password FROM usuario WHERE user='$user' AND password='$password'");
      $login = array();
          while($row =mysqli_fetch_assoc($queryLogin))
          {
              $login[] = $row;
            }
            // echo json_encode($login);
            $_SESSION['username'] = $login[0]['user'];
            $_SESSION['userid'] = $login[0]['id'];

            // setcookie("username", $login[0]['user'], time()+3600);  /* expira en una hora */
            // setcookie("userid", $login[0]['id'], time()+3600);  /* expira en una hora */

            $jsondata = array();
            // $jsondata['userid'] = $login[0]['id'];
            // $jsondata['username'] = $login[0]['user'];
            $jsondata['success'] = true;
            $jsondata['message'] = 'SESION OK!';
          }
          else {
            $jsondata['success'] = false;
            $jsondata['message'] = 'Ya se ha iniciado sesion.';
          }
          header('Content-type: application/json; charset=utf-8');
          echo json_encode($jsondata);
    break;
  case 11:
    if ( !isset($_SESSION['username']) && !isset($_SESSION['userid']) ){
      $jsondata = array();
      $jsondata['success'] = false;
      $jsondata['message'] = 'Sesion no iniciada.';
    }
    else {
      $jsondata = array();
      $jsondata['success'] = true;
      $jsondata['message'] = 'SESION OK!';
      $jsondata['username'] = $_SESSION['username'];
      $jsondata['userid'] = $_SESSION['userid'];
    }
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($jsondata);

    break;
}

?>
