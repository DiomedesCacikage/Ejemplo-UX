document.addEventListener('DOMContentLoaded', () => {
    const estrellas = document.querySelectorAll('.estrella');

    estrellas.forEach(estrella => {
        estrella.addEventListener('click', () => {
            const valor = estrella.getAttribute('data-value');
            enviarCalificacion(valor);
            resaltarEstrellas(valor);
        });
    });

    function resaltarEstrellas(valor) {
        estrellas.forEach(estrella => {
            if (estrella.getAttribute('data-value') <= valor) {
                estrella.textContent = '★';
            } else {
                estrella.textContent = '☆';
            }
        });
    }

    function enviarCalificacion(valor) {
        console.log(`Calificación enviada: ${valor}`);
        // Aquí es donde enviarías el evento a Google Analytics
        if (window.gtag) {
            gtag('event', 'calificacion_encuesta', {
                'event_category': 'Encuesta de Satisfacción',
                'event_label': 'Calificación de estrellas',
                'value': valor
            });
        }
    }
});
