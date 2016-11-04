$(document).ready(function() {
checkSession();
setTimeout(function() {
     logout();
}, 150000);
});

function checkSession() {
  $.ajax({
      type: "POST",
      url: 'datos/login.php',
      data: $(this).serialize() + "&orden=" + 11,
      success: function(data) {
          if (data.success === true) {
              // console.log(data.message);
              // console.log(data.username);
              // console.log(data.userid);
              salida = true;

          }
          if (data.success === false) {
              console.log(data.message);
              salida = false;
          }
          redirect(salida);
      }
  });
}
function redirect(salida){
  if(salida === true){
  }
  else {
    window.location.replace("ajax/page_login.html");
  }
}
function logout(){
  $.ajax({
      type: "POST",
      url: 'datos/logout.php',
      data: $(this).serialize(),
      success: function(data) {
          alert('La sesion a caducado.');
          window.location.replace("ajax/page_login.html");
      }
  });
}
