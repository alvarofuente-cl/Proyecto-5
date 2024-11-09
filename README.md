# Proyecto React con Vite

En este proyecto, creé una aplicación web desarrollada en React utilizando Vite como herramienta de construcción. La aplicación muestra información meteorológica utilizando la API de Weatherstack.

## Características

- **Vite**: Vite se utiliza para la configuración y el desarrollo rápido del proyecto.
- **Componentes Funcionales**: Los componentes se desarrollaron siguiendo el enfoque funcional de React.
- **API Pública**: Se obtiene información meteorológica a través de la API pública de Weatherstack.
- **Hooks de React**: Se utilizaron hooks como `useEffect` y `useState` para manejar el estado y las operaciones asíncronas.
- **React Router**: Se implementó el enrutamiento en la aplicación para navegar entre diferentes vistas.
- **TailwindCSS**: Se utilizó TailwindCSS para el diseño y estilo de la interfaz.

## Estructura del Proyecto

- **src/**
  - **App.jsx**: Componente principal de la aplicación.
  - **Currencies.jsx**: Componente para mostrar los detalles del clima.
  - **index.css**: Archivo de estilos CSS globales.
  - **main.jsx**: Punto de entrada de la aplicación.
- **public/**: Archivos públicos como imágenes y favicon.
- **package.json**: Manejo de dependencias y scripts.
- **vite.config.js**: Configuración de Vite.

## Uso de la API de Weatherstack

La aplicación utiliza la API de Weatherstack para obtener información meteorológica, como la temperatura, la descripción del clima, la velocidad del viento, la presión, la humedad, la visibilidad y el índice UV.

### Configuración

1. Crea un archivo `.env` en el directorio raíz y agrega tu clave de API de Weatherstack:
    ```sh
    WEATHERSTACK_API_KEY=tu_clave_api_aqui
    ```

### Ejemplo de Solicitud

Haz una solicitud a la API para obtener datos meteorológicos:
```sh
curl -X GET "http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=New%20York"
