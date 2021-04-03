---
title: "Empezando con webpack. Parte #2"
description: Configuración baíca para empezar un poryecto de react, para css, imagenes y contenido en general.
categories: [ webpack, react ]
image: ./webpackpost.webp
date: "2020-11-18T22:06:00.284Z"
---

# Empezando con <img width="50" align=center src=https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg /> webpack. Parte #2

En la parte 1 vimos los conceptos que básicos de Webpack para ir empezando, una vez los comprendas puedes empezar tranquilo. En está ocasión crearemos un proyecto para conocer la estructura con la que Webpack trabaja.

## Creando e iniciando el proyecto

1. Como primer paso crearemos nuestra carpeta, yo la llamare `pracica-webpack`.

2. La abrimos es **vs code**, y abrimos una nueva terminal e iniciamos un proyecto con node con el siguiente comando: 

```bash
$ npm init -y
```

> Al ejecutar el comando generará el `package.json` con las configuraciones por defecto, puedes encontrar más información en [npm-init](https://docs.npmjs.com/cli/v6/commands/npm-init).

## 📦 Instalando paquetes

Ahora instalaremos los paquetes que necesitamos. La mayoría de paquetes que Webpack necesita se instalan como dependencias de desarrollo como una buena practica.

```bash
npm install webpack webpack-cli -D
```

> Desde la versión 4 de webpack es necesario instalar [webpack-cli](https://webpack.js.org/guides/installation/) que significa [Command Line Interface](https://webpack.js.org/api/cli/). El cli   ofrece comandos para facilitar la configuración de webpack. El `-D` es para instalarlo como [dependencia de desarrollo](https://docs.npmjs.com/cli/v6/commands/npm-install) que es la manera más optimizada para trabajar en un proyecto que utiliza webpack. 

## Creando archivos

Ahora crearemos los archivos que vamos a utilizar:

```
src
| index.js
index.html
webpack.config.js
```

En la carpeta `index.html` agregamos una estructura simple de HTML y agregamos un script

```html
<script src="./dist/main.js"></script>
```

En el `index.js` escribes un simple, para ir empezando:

```js
console.log('Hello World');
function sum(num1, num2){
	return num1 + num2;
}
console.log(sum(1, 2));
```

## Script para ejecutar Webpack

Desde la versión 4.0.0 Webpack ya no requiere un archivo de configuración, aun que es recomendable agregarle uno. Para iniciar lo utilizaremos solo con un comando:

```bash
npx webpack --mode development
```

El comando anterior toma el archivo `./src/index.js`  que creamos y lo empaquetara en un archivo llamado `dist/main.js` el cual puedes ver que posee comentarios y encontraras tu código escrito de una forma diferente. Si se omite el `--mode` Webpack tendrá por defecto el modo `production` que empaquetara el mismo archivo pero mas pequeño.

Pero ejecutando Webpack de esta forma se desperdicia potencial y es poco cómodo. Lo correcto seria crear un script en el `package.json` y un archivo de configuración para Webpack. El script del `package.json` seria el siguiente:

````javascript
"scripts": {
	"start": "webpack"
},
````

## Configurando Webpack

En el archivo `webpack.config.js` es el encargado de la configuración que Webpack utilizara, le diremos que plugins utilizar, como llamara a los archivos y que optimizaciones utilizaremos si queremos. Por ahora con los conceptos vistos en la parte 1 de Webpack empezaremos por la entrada y salida del empaquetado de un simple `js`.

```javascript
// Modulo nativo de node
const path = require('path');
module.exports = {
    // Definimos el punto de entrada de la aplicación
	entry: './index.js',
    // Definimos la ubicación en donde enviara los archivos empaquetados
	output: {
        // El nombre que tendra nuestro archivo
		filename: 'bundle.js',
        // Con path le diremos donde queremos que ubique todo el proyecto
		path: path.resolve(__dirname),
	},
    // Modo en que se empaquetara
	mode: 'production',
};
```

Así seria la configuración básica para empezar con Webpack.  En `entry` le estamos diciendo que tome el archivo `index.js` de la raíz  y en la salida genere un archivo `bundle.js` también en la raíz (si se omite la propiedad `path` Webpack generara el archivo en una carpeta llamada `dist`), y por ultimo el modo en que Webpack transformara el código del archivo, que es en modo `production`. El modulo que se utilizara es [Path](https://nodejs.org/api/path.html) que es un modulo nativo de node y se utiliza para trabajar con rutas de archivos y directorios.

Ahora ya puedes ejecutar el script `npm start` y veras que crea una carpeta llamada `dist` que contiene el archivo `bundle.js` con el código transformado.

Para ponerlo aprueba debes de agregar la ruta del archivo a tu `index.html`:

```html
<script src="./dist/bundle.js"></script>
```

Puedes ver el archivo `bundle.js` como a transformado el código que escribimos al inicio:

```js
console.log("Hello World"),console.log(3);
```

Como puedes ver lo a comprimido para hacerlo de más coroto y eficiente.