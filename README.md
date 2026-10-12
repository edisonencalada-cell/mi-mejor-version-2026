# Mi Mejor Versión 2026 💚
PWA de hábitos de bienestar sin servidor, lista para GitHub + Netlify y empaquetar como APK Android.

## Funciones
- Panel diario, cuenta regresiva al 18/12/2026, consejo diario.
- Hidratación (vasos, metas editables, historial y gráfico semanal).
- Caminatas: pasos, kilómetros y minutos manuales, cronómetro, récord y gráfico.
- Peso: mediciones editables y evolución.
- Hábitos personalizables, casillas de alimentación, notas, registro de sueño.
- Calendario, estadísticas y logros.
- Almacenamiento local IndexedDB, exportación/importación JSON, caché para funcionamiento sin conexión.
- Tema claro/oscuro, diseño para móvil.

## Publicar en GitHub
1. Crea un repositorio nuevo en https://github.com/new (por ejemplo `mi-mejor-version-2026`).
2. Descomprime el ZIP; en GitHub elige **Add file > Upload files** y sube **los archivos y la carpeta `icons`**, no la carpeta contenedora.
3. Confirma con **Commit changes**.

## Publicar en Netlify
1. Ve a https://app.netlify.com/ y elige **Add new project > Import an existing project**.
2. Conecta GitHub, selecciona el repositorio y publica. No requiere comando de build; directorio de publicación: `.`.
3. Abre tu URL `https://...netlify.app/` y prueba los formularios.

## Convertir a APK
1. Entra a https://www.pwabuilder.com/ y escribe la URL HTTPS de Netlify.
2. Elige **Package for stores > Android > Generate Package** y la opción de paquete APK adecuada.
3. Descarga, firma si corresponde e instala el APK en un Android de prueba.
4. Para una Trusted Web Activity sin barra del navegador, publica el `assetlinks.json` generado por PWABuilder en `/.well-known/assetlinks.json` dentro de este repositorio y despliega de nuevo.
5. Para Google Play se requiere un archivo `.aab`, la configuración de la cuenta de desarrollador y conservar con seguridad la clave de firma. Nunca publiques claves ni contraseñas en GitHub.

## iPhone
Desde Safari: **Compartir > Agregar a pantalla de inicio**. Un APK **no** funciona en iPhone.

## Privacidad y límites
Los datos viven en IndexedDB **en ese navegador/dispositivo**, no se sincronizan automáticamente entre teléfonos, APK, navegadores o dominios. Exporta una copia JSON antes de cambiar de dispositivo o limpiar datos del navegador. No se incluyen conexión con Apple Health, Health Connect, notificaciones en segundo plano ni medición automática real de pasos. El cronómetro necesita que la página permanezca abierta. No constituye consejo médico.

## Desarrollo local
Sirve estos archivos desde un servidor HTTP, por ejemplo `python -m http.server 8000`; abre `http://localhost:8000`. No abras `index.html` desde `file://` porque los service workers requieren origen seguro.
