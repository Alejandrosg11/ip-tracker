# IP Address Tracker

IP Address Tracker es una aplicación web que permite a los usuarios buscar información de geolocalización basada en una dirección IP o un dominio. La aplicación muestra la ubicación en un mapa y proporciona detalles como la región, el país, la zona horaria y el ISP.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) - Framework de React para aplicaciones web.
- [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.
- [Leaflet](https://leafletjs.com/) - Biblioteca de JavaScript para mapas interactivos.
- [geo.ipify.org](https://geo.ipify.org/) - API para obtener información de geolocalización basada en IP.

## Características

- Búsqueda de información de geolocalización basada en dirección IP o dominio.
- Visualización de la ubicación en un mapa interactivo.
- Información detallada sobre la región, el país, la zona horaria y el ISP.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/ip-address-tracker.git
   cd ip-address-tracker

2. Instala las dependencias:

   npm install

3. Crea un archivo .env.local en la raíz del proyecto y agrega tu clave de API de geo.ipify.org:

   NEXT_PUBLIC_API_KEY=tu_clave_de_api

4. Inicia el servidor de desarrollo:

   npm run dev

5. Abre http://localhost:3000 en tu navegador para ver la aplicación.

## Uso

1. Ingresa una dirección IP o un dominio en el campo de búsqueda.
2. Haz clic en el botón de búsqueda.
3. La aplicación mostrará la información de geolocalización y la ubicación en el mapa.
