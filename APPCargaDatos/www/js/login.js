$(document).ready(function() {
    login();
    alert("ok");
});

function login() {
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'http://aguasrionegrinas.enlaceit.com.ar/datos/login.php',
            data: $(this).serialize() + "&orden=" + 10,
            success: function(data) {
                if (data.success === true) {
                    //window.location.replace("./");
                    console.log(data.message);
                }
                if (data.success === false) {
                    //window.location.replace("./page_login.html");
                    console.log( data.message);
                }
            }
        });
    });
}
