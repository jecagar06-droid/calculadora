document.addEventListener('DOMContentLoaded', function() {
    const mensaje = document.getElementById('mensajeEnojo');
    const conejoContainer = document.querySelector('.conejo-container');
    const conejoNormal = document.getElementById('conejoNormal');
    const conejoEnojado = document.getElementById('conejoEnojado');

    conejoContainer.addEventListener('mouseenter', function() {
        mensaje.hidden = false;
        conejoNormal.hidden = true;
        conejoEnojado.hidden = false;
    });

    conejoContainer.addEventListener('mouseleave', function() {
        mensaje.hidden = true;
        conejoNormal.hidden = false;
        conejoEnojado.hidden = true;
    });
});
