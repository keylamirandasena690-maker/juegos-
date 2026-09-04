// ==========================================
// VALIDACIÓN DEL LOGIN
// ==========================================

const loginForm = document.getElementById('loginForm');

if (loginForm) {

    loginForm.addEventListener('submit', function(e) {

        e.preventDefault();

        // Obtener los datos escritos por el usuario
        const usuarioInput = document.getElementById('usuario').value;
        const passwordInput = document.getElementById('password').value;

        const errorMsg = document.getElementById('errorMsg');

        // Credenciales de ejemplo
        const usuarioValido = "admin";
        const passwordValido = "12345";


        // Comprobar usuario y contraseña

        if (
            usuarioInput === usuarioValido &&
            passwordInput === passwordValido
        ) {

            // Si los datos son correctos,
            // entrar a la página principal

            window.location.href = "principal.html";

        } else {

            // Mostrar mensaje de error

            errorMsg.style.display = "block";

        }

    });

}


// ==========================================
// CARGAR DETALLE DE LAS TARJETAS
// ==========================================

function cargarDetalle(nombreModulo) {

    // Guardar el módulo seleccionado
    // en el almacenamiento local del navegador

    localStorage.setItem(
        'moduloSeleccionado',
        nombreModulo
    );


    // Ir a la página de detalle

    window.location.href = "detalle.html";

}


// ==========================================
// MOSTRAR INFORMACIÓN EN DETALLE.HTML
// ==========================================

window.onload = function() {

    // Verificar que estamos en detalle.html

    const tituloDetalle =
        document.getElementById('tituloDetalle');

    const textoDetalle =
        document.getElementById('textoDetalle');


    if (tituloDetalle && textoDetalle) {

        // Obtener el módulo guardado

        const modulo =
            localStorage.getItem('moduloSeleccionado')
            || 'Información General';


        // Mostrar el nombre del módulo

        tituloDetalle.innerText = modulo;


        // Mostrar información del módulo

        textoDetalle.innerText =
            `Aquí encontrarás toda la documentación, guías de aprendizaje y recursos prácticos correspondientes al área de ${modulo} implementada en el programa de formación.`;

    }

};
