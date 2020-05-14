$(document).ready(function(){

    var tema = $("#tema");
    $("#verde").click(function () {
        tema.attr("href", "css/verde.css");
        var tm = "verde";
        localStorage.setItem("tema", tm);
    });
    $("#rojo").click(function () {
        var tm = "rojo";
        tema.attr("href", "css/rojo.css");
    });
    $("#azul").click(function () {
        var tm = "azul";
        tema.attr("href", "css/azul.css");
    });

    // Scroll

    $('.subir').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });


     // Validacion Formu

     $.validate({
        lang: 'es'
      });


});
   


