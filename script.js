// script.js

// Selección automática de la canción que colocaste en assets/
const audio = document.getElementById('audio');
// Nombre del archivo que colocaste en assets
const CANCION = 'tu-cancion.mp3';

// Intentamos asignar la fuente y preparar el audio
if (audio) {
    audio.src = CANCION;
    audio.volume = 0.8; // ajusta si lo quieres más bajo (0.0 - 1.0)
    audio.preload = 'auto';
}

// Pantalla de inicio
const pantallaInicio = document.getElementById('pantalla-inicio');
const contenido = document.getElementById('contenido');

// Verificar que el fondo existe en assets; si no, mostrar aviso visible
document.addEventListener('DOMContentLoaded', () => {
    const img = new Image();
    img.onload = () => {
        console.log('Fondo cargado correctamente: assets/fondo.png');
    };
    img.onerror = () => {
        console.warn('No se encontró assets/fondo.png. Sube tu imagen a assets/fondo.png para que aparezca el fondo.');
        // Crear un aviso visible en pantalla para el usuario
        const aviso = document.createElement('div');
        aviso.innerText = 'Falta assets/fondo.png — sube la imagen en la carpeta assets';
        aviso.style.position = 'fixed';
        aviso.style.right = '12px';
        aviso.style.top = '12px';
        aviso.style.zIndex = '10000';
        aviso.style.padding = '8px 12px';
        aviso.style.background = 'rgba(0,0,0,0.6)';
        aviso.style.color = '#5ecbff';
        aviso.style.borderRadius = '8px';
        aviso.style.fontSize = '13px';
        document.body.appendChild(aviso);
    };
    img.src = 'fondo.png';
});

pantallaInicio.addEventListener('click', async () => {
    pantallaInicio.style.opacity = 0;
    setTimeout(async () => {
        pantallaInicio.classList.add('oculto');
        contenido.classList.remove('oculto');
        // Reproducir la música con manejo de la promesa para evitar errores en algunos navegadores
        if (audio) {
            try {
                await audio.play();
            } catch (err) {
                // Muchos navegadores bloquean reproducción automática; en ese caso dejamos el audio listo y mostramos un pequeño aviso opcional
                console.warn('No se pudo iniciar la reproducción automáticamente:', err);
            }
        }
        // Crear un corazón de prueba inmediatamente para verificar que la animación funciona
        try {
            crearCorazon();
            console.log('Se creó un corazón de prueba.');
        } catch (e) {
            console.error('No se pudo crear corazón de prueba:', e);
        }
    }, 700);
});

// Corazones cayendo (mejor rendimiento usando animaci
