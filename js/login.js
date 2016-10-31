$(document).ready(function() {
  $('#loginForm').submit(function(e) {
    e.preventDefault();
    $.ajax({
       type: "POST",
       url: '../datos/login.php',
       data: $(this).serialize(),
       success: function(data)
       {
          if (data.success === true) {
            window.location = '../index.html';
          }
          else {
            alert('Invalid Credentials');
          }
       }
   });
 });
});
