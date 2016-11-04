<?php
    session_start(); //mantiene activa la sesion
    session_destroy(); //destruye la sesion iniciada
    header('Location: ../ajax/page_login.html'); //posicionamos la cabecera
    exit(0); //salida
?>
