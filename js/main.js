$(document).ready(function () {

    //Slider

    if (window.location.href.indexOf('index') > -1) {

        $(function () {
            $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1000,
                responsive: true
            });
        });

    }
    // Articulos por JSON 

    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                titulo: 'Articulo 1',
                fecha: 'Publicado el día ' + moment().format("dddd D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor repudiandae voluptate, repellendus, deserunt eligendi totam quis nihil omnis mollitia ad? Blanditiis alias quasi eum recusandae! Obcaecati quia sit, corporis itaque quos facere quasi magnam repellat beatae consequuntur unde impedit, nulla reiciendis ipsum molestias inventore est eaque provident quae aspernatur at fugit sint molestiae? Repudiandae totam soluta voluptas voluptate minus amet possimus similique facilis saepe perspiciatis, ipsam rem qui ex labore alias, obcaecati, fuga commodi cumque quidem in? Nesciunt corporis id non tenetur in repellat, facilis natus rem. Eligendi, error! Odit quas itaque dicta iste tempore corporis explicabo minus maiores.',
            },
            {
                titulo: 'Articulo 2',
                fecha: 'Publicado el día ' + moment().format("dddd D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor repudiandae voluptate, repellendus, deserunt eligendi totam quis nihil omnis mollitia ad? Blanditiis alias quasi eum recusandae! Obcaecati quia sit, corporis itaque quos facere quasi magnam repellat beatae consequuntur unde impedit, nulla reiciendis ipsum molestias inventore est eaque provident quae aspernatur at fugit sint molestiae? Repudiandae totam soluta voluptas voluptate minus amet possimus similique facilis saepe perspiciatis, ipsam rem qui ex labore alias, obcaecati, fuga commodi cumque quidem in? Nesciunt corporis id non tenetur in repellat, facilis natus rem. Eligendi, error! Odit quas itaque dicta iste tempore corporis explicabo minus maiores.',
            },
            {
                titulo: 'Articulo 3',
                fecha: 'Publicado el día ' + moment().format("dddd D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor repudiandae voluptate, repellendus, deserunt eligendi totam quis nihil omnis mollitia ad? Blanditiis alias quasi eum recusandae! Obcaecati quia sit, corporis itaque quos facere quasi magnam repellat beatae consequuntur unde impedit, nulla reiciendis ipsum molestias inventore est eaque provident quae aspernatur at fugit sint molestiae? Repudiandae totam soluta voluptas voluptate minus amet possimus similique facilis saepe perspiciatis, ipsam rem qui ex labore alias, obcaecati, fuga commodi cumque quidem in? Nesciunt corporis id non tenetur in repellat, facilis natus rem. Eligendi, error! Odit quas itaque dicta iste tempore corporis explicabo minus maiores.',
            },
            {
                titulo: 'Articulo 4',
                fecha: 'Publicado el día ' + moment().format("dddd D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor repudiandae voluptate, repellendus, deserunt eligendi totam quis nihil omnis mollitia ad? Blanditiis alias quasi eum recusandae! Obcaecati quia sit, corporis itaque quos facere quasi magnam repellat beatae consequuntur unde impedit, nulla reiciendis ipsum molestias inventore est eaque provident quae aspernatur at fugit sint molestiae? Repudiandae totam soluta voluptas voluptate minus amet possimus similique facilis saepe perspiciatis, ipsam rem qui ex labore alias, obcaecati, fuga commodi cumque quidem in? Nesciunt corporis id non tenetur in repellat, facilis natus rem. Eligendi, error! Odit quas itaque dicta iste tempore corporis explicabo minus maiores.',
            },
        ]

        posts.forEach((item, index) => {
            var post = `
                 <article class="post">
                    <h2> ${item.titulo} </h2>
                    <span class="date"> ${item.fecha} </span>
                    <p> ${item.contenido} </p>
                </article>
                <a href="#" class="boton-mas" style="margin-bottom: 50px;"> Leer Más </a>
            `;

            $("#posts").append(post);
        });

    }

    // Cambiar Temas

    /* var temaPag = localStorage.getItem("tema");
    if (temaPag !== null || temaPag !== 0) {
        console.log("Tema")
        if (temaPag == "verde") {
            tema.attr("href", "css/verde.css");
        } else if (temaPag == "rojo") {
            tema.attr("href", "css/rojo.css");
        } else {
            tema.attr("href", "css/azul.css");
        }
    }*/

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

    // Login con Local Storage

    $('#login').hide('slow');

    Re.addEventListener('submit',
        function () {
            console.log("Capturado");
            // Traigo los datos ingresados por el usuario

            var usuario = document.getElementById("usuR").value;
            var pass = document.getElementById("passR").value;

            // Los almaceno en el localStorage

            localStorage.setItem("UsuarioRe", usuario);
            localStorage.setItem("PassRe", pass);

            // Muestro los datos almacenados en la consola

            console.log(usuario, pass);

            // Oculto el div registro

            $('#login').show('slow');
            $('#registro').hide('slow');

        }
    );


    // Login

    Lg.addEventListener('submit',
        function () {
            console.log("Start Login");


            // Traigo los datos que ingreso el usuario

            var user = document.getElementById("usuL").value;
            var contra = document.getElementById("passL").value;

            // Traigo y almaceno en una variable los datos guardados en el LocalStorage

            var usuarioRe = localStorage.getItem("UsuarioRe");
            var passRe = localStorage.getItem("PassRe");

            //Imprimo los datos obtenidos

            console.log(usuarioRe, contra);
            console.log(user, contra);

            // Comparo si son correctos

            if (contra == passRe && user == usuarioRe) {

                var parrafo = $('#info p');

                parrafo.html('<br><strong> Bienvenido, ' + usuarioRe + ' Gracias por Iniciar Sesion </strong>');
                parrafo.append('<a href="#" id="logout"> Cerrar Sesión </a>');

                $("#logout").click(function () {
                    localStorage.clear();
                    location.reload();
                })

            } else {

                $("#in").append('<br><strong> Error credenciales incorrectas </strong>');

            }

        }
    );

    
    // Reloj

    var reloj = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(reloj);
    $("#reloj").html(reloj);  


    // Acordeon 

  
    //  $("#acordeon").accordion();



});