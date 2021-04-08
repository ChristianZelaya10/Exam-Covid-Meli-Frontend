# Ejercicio Registro de COVID-19 - Mercado libre - Frontend

Ejercicio práctico para MercadoLibre. 

Se puede ver una version estable del proyecto aqui: [Frontend - Registro COVID-19](http://ec2-3-138-114-192.us-east-2.compute.amazonaws.com:3000/).


- [Ejercicio](#ejercicio)
  - [Implementación y tecnologias usadas](#implementaci%C3%B3n-y-tecnologias-usadas)
  - [Comentarios](#comentarios-relevantes)
- [Setup](#setup)
  - [Instrucciones](#instrucciones)
  - [Uso](#uso)
  - [API Url](#api)


## Ejercicio


### Implementacion y tecnologias usadas

El proyecto esta hecho en react con material-ui y para poder consumir la api usé la librería axios.

La aplicación está subida a AWS EC2 y ya esta apuntando a la api rest tambien alojada en Amazon AWS.

### Comentarios
El diseño del front me guié de las imagenes que estaban en el documento, solo modifiqué algunas partes que desde mi punto de vista eran mejoras para la pagina:

Le agregue un icono de "ver" en la grilla para que sea mas entendible para el usuario que puede ver el detalle de ese registro.

En los filtros pais y resultado lo hice con combos de múltiples valores para asegurarme que los datos seleccionados sea exactamente los que estan en la grilla.

En el formulario agregue un combo de un solo valor para lo mismo que comentaba mas arriba, si dejaba que se pueda poner un string libre en el campo "pais" en el formulario de alta, daba la posibilidad de que se pueda poner cualquier cosa y luego en la parte de filtros tendria que traerme todos los paises distintos que haya ingresado el usuario.
Agregando un combo en el campo pais me aseguro que sean siempre los mismos paises y que el usuario va a seleccionar alguno de esa lista.

Los datos que estan cargados en los combos son datos que estan en un archivo dentro del proyecto, tranquilamente podia agregar esos datos en una tabla country y crear un endpoint para luego consumirlo desde el front, pero para este ejercicio no sentia que era necesario y tampoco lo pedia el enunciado, entonces me decidí hacerlo de esta forma para ahorrar tiempo.

## Setup

### Instrucciones
Para compilar y ejecutar el proyecto es necesario contar con la ultima versión de [Node](https://nodejs.org/es/download/) y tener npm para la gestion de paquete, si no lo tienen se puede instalar la ultima versión ejecutando esta linea de comando en la consola "npm install npm@latest -g".

Si tienen Git pueden 

Clonar este repositorio: https://github.com/ChristianZelaya10/Exam-Covid-Meli-Frontend.git

Si no cuentan con GIT se puede descargar el .ZIP del proyecto.

Una vez que ya tienen el proyecto localmente, lo abren con el IDE que prefieran, en mi caso use VISUAL STUDIO CODE.

Ejecutan "npm install" para que de descargue la carpeta node_modules con todos sus paquetes.

Por ultimo ejecutan "npm start" y con esto ya estaría levantando el proyecto.

La url local por defecto es http://localhost:3000/


### Frontend Url

URL local: http://localhost:3000/

URL hosteada en Amazon: http://ec2-3-138-114-192.us-east-2.compute.amazonaws.com:3000/
