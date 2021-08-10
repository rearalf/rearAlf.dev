---
title: "Empezando con webpack. Parte #4"
description: Utilizando y confiugrando loader para CSS, HTML e imagenes.
categories: [ webpack, react ]
image: ./webpackpost.webp
date: "2021-08-06T22:06:00.284Z"
---

# Empezando con ![img](https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg) Webpack. Parte #4

En la parte anterior vimos como, con ayuda de Babel nosotros pudimos hacer que nuestro código de JavaScript moderno pueda ser transcrito a una versión más compatible con los navegadores, solo es la primera parte de todos los loaders que Webpack tiene que pueden ayudarte a empaquetar tu proyecto.

Ahora veremos algunos otros loaders que puede que te ser útiles, al momento de crear y hacer crecer tu proyecto.  

## Antes de empezar

Utilizando el proyecto anterior, agregaremos nuevos archivos e instalaremos nuevos paquetes.

1. Cree una carpeta llamada `public` dentro de ella ubique el archivo `index.html` con la estructura básica HTML.
2. Cree un archivo siguiendo la ruta `./src/assets/styles/index.css`.


```treeview{2-3,6-10}
root/
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   └── assets/
│       ├── images/
│		│   └── image.jpg
│       └── styles/
│           └── index.css
├── .babelrc
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── webpack.config.js
```

Esta seria la estructura de archivos completa.

## HTML plugin

### Instalación

Iniciamos instalando el plugin necesario [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin), la instalación debe de ser como dependencia de desarrollo como una buena practica.

```shell
npm install html-webpack-plugin -D
```

### Configuración

Luego de la instalación se debe de realizar configuraciones básicas para que funcione bien, puedes ver la documentación oficial.

```js{6-14}
// Se manda a llamar para utilizarlo
const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports ...
// Sección de plugins de Webpack
plugins: [
    // Hacemos instancia del plugin y pasamos como párametro un objeto
    new HtmlWebpackPlugin({
        // Para inyectar el bundle al template
        inject: true,
        // Que template queremos utilizar
        template: './public/index.html',
        // Que nombre llevara el archivo que Webpack generara
        filename: './index.html',
    }),
],
// Fin de module.exports
```

## Loaders CSS y preprocesadores 

Para que Webpack pueda manejar archivos CSS, comprimirlos y agregarlos al template HTML, hay que instalar loaders. Los primero loades que hay que instalar son:

```shell
npm i css-loader style-loader -D
```

Luego agregarnos la configuración al `webpack.config.js` para poder utilizarlo, lo agregaremos en la sección de reglas.

```js{4-7}
module.exports = {
 	module: {
        rules: [
    		{
                test: /\.css$/i,
                    use: [ 'style-loader', 'css-loader' ],
            },
        ]        
   }
}
```

Luego de hacerlo podrás importar tus archivos `.css` a los archivos `.js`, ya que Webpack sabrá como manejarlos.

```js
import './styles/main.css'
```

Puedes probar los dos cambios que has hecho ahora ejecutando el comando `npm start`, para que Webpack genere la carpeta `dist`.

### Preprocesadores

Si no sabes que son, en palabras simples un [preprocesador](##Bibliografía) es una alternativa a la estructura natural del CSS normal, ofreciéndote funciones, variables y poder incluir archivos del mismo formato para poder trabajar de una forma mas cómoda y organizada. El preprocesador que utilizaremos será [Sass](https://sass-lang.com/), que es uno de los más famosos y más común que encontraras.

#### Instalación

Como siempre empezaremos instalando como dependencias de desarrollo dos paquetes, uno para compilar el código de Sass a CSS y el otro es para que Webpack sepa que hacer con ese código escrito en Sass.

````shell
npm install -D sass sass-loader
````

Una vez instalado solo debemos de agregar una pequeña modificación a nuestra configuración de Webpack en la parte de CSS. 

```js
// Antes
{
    test: /\.css$/i,
    use: [ 'style-loader', 'css-loader' ],
},
// Después 
{
    test: /\.(s[ac]ss|css)$/i,
    use: [ 'style-loader', 'css-loader', 'sass-loader' ],
},
```

Con esto ya puedes empezar a utilizar Sass en tu proyecto.

## Loader para imágenes

Con ayuda de estos loaders podrás hacer `imports` de tus imágenes en los archivos `.js` y webpack los moverá e inyectara la ruta necesaria para usarlo. Para configurar y poder utilizarlo, solo hay que agregar unas líneas al archivo de configuración de webpack.

```js{4-7}
module: {
	rules: [
        ...
        {
            test: /\.jpg|png/,
            type: 'asset/resource',
        },
    ]
}
```

Solo con eso ya puedes hacer `import` en los archivos.

## Resultado final del código

Siguiendo todo los pasos anteriores, tu archivo `index.js` deberá quedar algo parecido a esto:

```js{3,13-15,18}
import './assets/styles/index.css';
import './assets/styles/index.scss';
import image from './assets/image/image.jpg';
const sum = (num1, num2) => {
	return num1 + num2;
};
const calc = (num1, num2, callback) => {
	return callback(num1, num2);
};
console.log(calc(4, 2, sum));
const h1 = document.createElement('h1');
h1.innerHTML = 'Hello Word';
const img = document.createElement('img');
img.src = image;
img.width = '360';
const div = document.getElementById('root');
div.appendChild(h1);
div.appendChild(img);
```

Con esto ya puedes crear un proyecto utilizando una platilla HTML, CSS o Sass (o cualquier otro preprocesador) y las imágenes que necesites.

## Bibliografía

- [Que es un preprocesador](https://www.wildcodeschool.com/es-ES/blog/que-es-un-preprocesador).
- [Sass](https://sass-lang.com/).