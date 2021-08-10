---
title: "Empezando con webpack. Parte #3"
description: Configuración baíca para babel y poder convertir el código ECMAScript 2015+ en una versión de JavaScript compatible con versiones anteriores en navegadores.
categories: [ webpack, react ]
image: ./webpackpost.webp
date: "2021-02-25T22:06:00.284Z"
---

# Empezando con ![img](https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg) Webpack. Parte #3

Como ya vimos en las partes anteriores, ya tenemos un archivo de configuración con las partes para empezar a utilizar JavaScript. Aun que Webpack pueda tomar el código JavaScript y comprimirlo, puede que tu utilices una forma más moderna de JavaScript que los navegadores no tengan aun, y es ahí donde entra Babel.

## Antes de empezar

Utilizaremos la misma estructura de la parte anterior con los mismos archivos y su contenido. Todo esto para poder continuar con la configuración agregándole nuevas características. Los archivos que se agregarán, para avanzar, ya están marcados.

```treeview{4}
root/
├── src/
|   └── index.js
├── .babelrc
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── webpack.config.js
```

## Babel Loader

### ¿Qué es Babel?

Babel es un conjunto de herramientas que se utilizan para convertir JavaScript moderno a una versión mas compatible con los navegadores o entornos en donde se ejecuten.

Principales habilidades de Babel:

- Transformar la sintaxis.
- Características de [Polyfill](https://developer.mozilla.org/es/docs/Glossary/Polyfill) que faltan en su entorno de destino.
- Transformación de código fuente.

### Instalación

Para empezar a utilizarlo junto con Webpack, se debe de instalar una serie de complementos, unos como dependencia de desarrollo y otros como dependencia de producción:

- Dependencias de desarrollo

  ```shell
  npm i -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime
  ```

- Dependencias de producción

  ```shell
  npm i @babel/runtime
  ```

- **babel-loader**: Es el modulo a utilizar para trabajar con Webpack.
- **@babel/core**: Es el corazón de todo babel.
- **@babel/preset-env**: Nos ayudara a trabajar con JavaScript moderno.
- **@babel/plugin-transform-runtime**: Nos ayuda a trabajar con asincronismo.
- **@babel/runtime**: Se utiliza para que funcione el plugins anterior. Se debe de instalar como dependencia de producción según la documentación de babel.

### Configuración 

Luego de haber instalado todo, procedemos a crear en la raíz del proyecto un nuevo archivo llamado `.babelrc`, por si no lo sabias el significado del [punto al inicio](#punto-al-inicio). Dicho archivo tiene formato JSON.

La primera configuración que agregaremos será los `presets`, que contiene un arreglo de plugin que nos ayuda a transformar nuestro código JavaScript a una versión más compatible con la mayoría de navegadores. Luego esta la sección de `plugins` que agrega mejoras en el rendimiento, o  comprimiendo ciertas partes del código para mayor eficiencia del proyecto.

```json
{
  "presets": [ "@babel/preset-env" ],
  "plugins": [ "@babel/plugin-transform-runtime" ]
}
```

Y finalizando la configuración agregaremos al archivo `webpack.config.js` una reglas en la sección de módulos para que Webpack sepa que utilizar para transformar nuestro código JavaScript.

```js{2-15}
module.exports = {
 	module: {
        rules: [
    		{
                // Se encarga de buscar en todo el directorio los archivos que le indica la expresión regular
                test: /\.js$/,
                // La carpeta que debe de excluir
                exclude: /node_modules/,
                // Para indicarle el loader que webpack debe de usar
                use: {
                    loader: 'babel-loader'
                }
            }
        ]        
   }
}
```

## Probando

Como primer paso para ver si funciona nuestra nueva configuración de Webpack ya integrando Babel a nuestro proyecto, utilizaremos **Arrow function** que es una característica de ES6.

Tomando el archivo `src/index.js` crearemos dos funciones, una llamada `sum` y otra llamada `calc` en ambas pasaremos parametros. En la funci+on `calc` pasaremos un [callback](#Callback) ademas de los dos números que necesitamos. En la función `sum` es igual.

```js{5-8}
console.log('Hello World');
const sum = (num1, num2) => {
	return num1 + num2;
};
const calc = (num1, num2, callback) => {
	return callback(num1, num2);
};
console.log(calc(4, 2, sum));
```

Al ejecutar el script Webpack con la ayuda de Babel tomara el archivo y lo transformara a una función normal si es necesario o en este caso dará la respuesta de forma simple.

```js
console.log(6);
```

## Definiciones

### Punto al inicio <a name="punto-al-inicio"></a>

El *punto* al inicio del nombre del archivo es para que el sistema lo oculte por defecto, pero aunque no sea visible el proyecto siempre va a poder acceder a él. Dentro del archivo se debe de configurar en formato.

### Callback <a name="Callback"></a>

En Javascript un callback es cuando se asigna una función como parametro de otra función. Más información [Callback: ¿qué son las funciones callback?](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/que-es-un-callback/)

## Bibliografía

[Babel](https://babeljs.io/).

[transpilado javascript webpack](https://desarrolloweb.com/articulos/transpilado-javascript-webpack.html).