# TP PWA REACT GRUPO 14

## Integrantes

Salto, Tomas Agustin FAI-3635\
Salazar Daniel FAI-962\
Julian Tolosa fai-3182

## Instalacion del proyecto

1. Clonar repositorio del proyecto

```bash
git clone https://github.com/Cocacota/tp2pwa.git
```

2. Instalar las dependecias del proyecto

```bash
npm install
```

3. Levantar el proyecto

```bash
npm start
```

## Documentación

ZapatillasNQN es tu destino definitivo para encontrar el calzado deportivo o de moda más actualizado. Con una amplia selección de zapatillas, puedes filtrar fácilmente por marca o color para encontrar el par perfecto que se adapte a tu estilo y necesidades.

Imagen de la página principal.

[![image.png](https://i.postimg.cc/7L8wRvCm/image.png)](https://postimg.cc/0zfT6B0w)

Imagen de la página detalles.
[![image.png](https://i.postimg.cc/sgSR7nnS/image.png)](https://postimg.cc/gxY5PKbk)

## App.js

[![image.png](https://i.postimg.cc/ZYBZJKrV/image.png)](https://postimg.cc/qgTWLrD3)

En este archivo utilizamos la libreria `react-router-dom` para la creación y manipulación de rutas importando los componentes `Router` que envuelve la aplicación y le permite acceder al historial de navegación, `Routes` es un componente contenedor utilizado para agrupar múltiples rutas en la aplicación y `Route` es un componente utilizado para definir una ruta específica en la aplicación. En este caso, en el primer elemeto `Route` cuando el path es igual a `RUTAS.home` vamos a renderizar el element `Home`, y en la segunda `Route` cuando el path sea `RUTAS.detalles` vamos a mostar el element `DetallesProducto`.

## Detalles.jsx

[![image.png](https://i.postimg.cc/W3DRpXJh/image.png)](https://postimg.cc/BLG7M5p0)

En este archivo utilizamos la liberia `react-router-dom` para utilizar el hook `useParams()` en donde obtenemos los parametros de la url, en este caso obtenemos el `id` de la url `/mock/zapatillas${id}.json` para saber de que zapatilla tenemos que mostrar los detalles.

Luego utilizamos el hook `useEffect()` para realizar la solicitud de datos de una zapatilla. La funcion de efecto se ejecuta cada vez que cambia la dependencia en el array de dependencias que en nuestro caso sería `[id]`.

En la función `fetch()` realizamos una solicitud `HTTP` a nuestro mock de datos. Después de realizar la solicitud, se encadenan varios métodos `then` y `catch` para manejar la respuesta de la solicitud.\
Si la solicitud es exitosa `(response.ok es true)`, se convierte la respuesta a formato JSON mediante `response.json()`, y los datos del producto se establecen en el estado utilizando `setProducto(data)`.\
Si la solicitud falla o la respuesta no es satisfactoria, se lanza un error y se maneja en el bloque `catch`, donde se registra el error en la consola.
