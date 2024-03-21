document.addEventListener('DOMContentLoaded', function () {
    verifySession();
});

function verifySession() {
    var cerrarSesionBtn = document.getElementById('cerrarSesionBtn');
    if (sessionStorage.getItem('usuario')) {
        cerrarSesionBtn.removeAttribute('disabled');
    } else {
        cerrarSesionBtn.setAttribute('disabled', 'true');
    }
}

function cerrarSesion() {
    sessionStorage.removeItem('usuario');
    alert('Has cerrado la sesión correctamente')
    if (window.location.href.includes('/ED-MJN/pages/alumno.html')) {
        location.href = '/ED-MJN/pages/login.html';
    } else {
        location.reload();
    }
    verifySession();
}