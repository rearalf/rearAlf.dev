---
title: "Empezando con webpack. Parte #2"
description: Configuración baíca para empezar un poryecto de react, para css, imagenes y contenido en general.
categories: [ webpack, react ]
image: ./webpackpost.webp
date: "2020-11-18T22:06:00.284Z"
---

# Empezando con <img width="50" align=center src=https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg /> webpack. Parte #2

Como se vio en el anterior parte, necesitas ciertos conocimientos para empezar. Una vez los tengas puedes empezar tranquilo. En está parte crearemos un pequeño proyecto para empezar a escribir las primeras configuraciones de webpack.

## Creando e iniciando el proyecto

1. Como primer paso crearemos nuestra carpeta, yo la llamare `pracica-webpack`.

2. La abrimos es **vs code**, y con `ctrl + ñ` en mí caso me abrirá la  consola, escribimos lo siguiente: 

```bash
$ npm init -y
```

> Al ejecutar el comando generará el `package.json` si hacer ninguna pregunta, puedes encontrar más información en [npm-init](https://docs.npmjs.com/cli/v6/commands/npm-init).

## 📦 Instalando paquetes

Ahora instalaremos los paquetes que necesitamos. La mayoría de paquetes que webpack necesita son dependencias de desarrollo.

```bash
npm install webpack webpack-cli -D
```

> Desde la versión 4 de webpack es necesario instalar [webpack-cli](https://webpack.js.org/guides/installation/) que significa [Command Line Interface](https://webpack.js.org/api/cli/). El cli   ofrece comandos para facilitar la configuración de webpack. El `-D` es para instalarlo como [dependencia de desarrollo](https://docs.npmjs.com/cli/v6/commands/npm-install) que es la manera más optimizada para trabajar en un proyecto que utiliza webpack. 

## Creando archivos

Ahora crearemos los archivos que vamos a utilizar:

```
-- index.html
-- index.js
-- webpack.config.js
```

En la carpeta `index.html` agregamos una estructura simple de HTML y agregamos un script

```html
<script src="./bundle.js"></script>
```

En el `index.js` escribes un simple: `console.log("Hello World")`.

## Script para ejecutar webpack

Webpack puede iniciar sin un archivó de configuración, se le indicaría todo desde la consola al ejecutar el comando de webpack, algo así:

```bash
npx webpack --entry ./index.js --output ./bundle.js --mode development
```

Pero ejecutando webpack de esta forma se desperdicia potencial y es poco cómodo. Lo correcto seria crear un script en el `package.json` y un archivo de configuración para webpack. El script del `package.json` seria el siguiente:

````javascript
"scripts": {
	"start": "webpack"
},
````

## Configurando webpack

En el archivo `webpack.config.js` es el encargado de configurar webpack, utilizando los conceptos vistos en la parte 1 de webpack.

```javascript
const path = require('path');
module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname),
	},
	mode: 'production',
};
```

Así seria la configuración básica para empezar con webpack.  En `entry` le estamos diciendo a webpack que tome el archivo `index.js` de la raíz  y en la salida genere un archivo `bundle.js` también en la raíz (si se omite la propiedad `path` webpack generara el archivo en una carpeta llamada `dist`), y por ultimo el modo en que webpack tomara generara el archivo que es en modo `production`. El modulo que se utilizara es [Path](https://nodejs.org/api/path.html) que es un modulo nativo de node y se utiliza para trabajar con rutas de archivos y directorios.

Ahora ya puedes ejecutar el script `npm start` y veras que crea un archivo llamado `bundle.js`. Puedes abrir el `index.html` y en la consola del navegador ver que el  `Hello World`, ya que en el HTML se llamo al script.