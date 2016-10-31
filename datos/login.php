<?php
include 'conexion.php';
session_start();
$user = $_POST['user'];
$password = $_POST['password'];
if ( !isset($_SESSION['username']) && !isset($_SESSION['userid']) ){
  $queryLogin =  mysqli_query($conexion,"SELECT id,user,password FROM usuario WHERE user='$user' AND pass") or die(mysqli_error());
  $login = array();
      while($row =mysqli_fetch_assoc($queryLogin))
      {
          $login[] = $row;
      }
  $json = json_encode($queryLogin);
  echo $json;
  $_SESSION['username']   = $login['user'];
  $_SESSION['userid'] = $login['id'];

  $jsondata = array();
  $jsondata['success'] = true;
  $jsondata['message'] = ' SESION OK!';;
}
else {
  $jsondata['success'] = false;
  $jsondata['message'] = 'SESION FAIL';
}
?>
