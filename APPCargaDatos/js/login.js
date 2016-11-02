$(document).ready(function() {
    login();
    //checkSession();
});

function login() {
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: '../datos/login.php',
            data: $(this).serialize() + "&orden=" + 10,
            success: function(data) {
                if (data.success === true) {
                    window.location.replace("../");
                    console.log(data.message);
                }
                if (data.success === false) {
                    window.location.replace("./page_login.html");
                    console.log( data.message);
                }
            }
        });
    });
}
function checkSession() {
  $.ajax({
      type: "POST",
      url: '../datos/login.php',
      data: $(this).serialize() + "&orden=" + 11,
      success: function(data) {
          if (data.success === true) {
              console.log(data.message);
              console.log(data.username);
              console.log(data.userid);
              window.location.replace("../");
          }
          if (data.success === false) {
              console.log(data.message);
              window.location.replace("./page_login.html");
          }
      }
  });
}
