---
title: "Empezando con webpack. Parte #1"
description: Configuración baíca para empezar un poryecto de react, para css, imagenes y contenido en general.
categories: [ webpack, react ]
image: ./webpackpost.webp
date: "2020-10-10T22:06:00.284Z"
---

#   Empezando con <img width="50" align=center src=https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg /> webpack. Parte #1

Esta es la primera parte de mis apuntes aprendiendo  **Webpack**. Guiando me por la documentación oficial y tutórales que encuentro en youtube. En esta parte solo se vera los conceptos básicos de webpack.

## ¿Qué es Webpack? 

Es un empaquetador de módulos o conjunto de reglas para aplicaciones modernas en JS, es una utopía en donde el producto es bueno, barato y rápido ya que nos ayuda a administrar nuestros archivos de manera eficiente para futuras modificaciones,  y  hace que sea más fácil de manipular dichos archivos.  Al procesar **Webpack** en nuestra aplicación nos creara un gráfico de dependencias que mapea cada módulo que su proyecto necesita y genera un más pequeño. Además de que **Webpack** es muy fácil de configurar.

## Webpack nos ayuda a 

* Escribir aplicaciones de manera eficiente.
* Tener un código limpio.
* Aplicar tecnología para resolver sus problemas.
* Tener un conjunto de reglas y convenciones.
* Entorno de desarrollo optimizado en productividad.

## Requisitos básicos para utilizar Webpack 

Como requisitos básicos se necesita [node.js](https://nodejs.org/es/) el cual, si están en Windows, también instalara npm para administrar los paquetes. Para verificar si ya lo tienes y ver que versión tienes de node y npm debes poner en tu terminal los siguiente.

```bash
node -v
npm -v
```

Debes de tener la versión 8.xy o superior. Puedes encontrar mas información sobre comando de npm en su [documentación](https://docs.npmjs.com/).

También será necesario conocimientos en [React](https://reactjs.org/).

## 🙌 Conceptos básicos 

Para entender mejor el proceso de configuración hay que entender bien sus conceptos.

* **Entry:** Es el punto inicial que webpack usara para empezar a construir su grafico de dependencia interna. A partir de ese punto, webpack sabrá de que otros módulos y bibliotecas dependen tu proyecto. De forma predeterminada su valor es `./src/index.js`, pero pude especificarse un punto de entrada diferente o múltiples puntos de entrada.

  ```javascript
  module.exports = {
      entry: './src/index.js'
  };
  ```

* **Output:** La salida en webpack hace referencia a la ubicación dónde emitir los paquetes que crea como dependencias y cómo nombrar estos archivos. Su valor predeterminado  es `./dist/main.js`.

  ```javascript
  const path = require('path');
  module.exports = {
      output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'dist'),
      }
  };
  ```

  - **filename:** Propiedad que indica el nombre de nuestro paquete. En el ejemplo anterior nuestro paquete se llamara *bundle.js*
  - **path:** Propiedad que indica donde se ubicara el proyecto ya transpilado por webpack. En el ejemplo utilizamos un paquete de node llamado [*path*](https://nodejs.org/api/path.html) que utilizamos para manejar rutas, también utilizamos [*__dirname*](https://nodejs.org/docs/latest/api/modules.html#modules_dirname) que nos indica nombre del directorio del módulo actual y le indicamos que cree una carpeta llamada `dist` (Es muy común nombrar de esta forma la carpeta creada por webpack).

* **Loaders:** Webpack solo comprende archivos JavaScript y JSON. Los loaders ayudan a webpack a procesar otros tipos de archivo como `.css` y los convierta en módulos válidos que su aplicación pueda consumir y agregar al gráfico de dependencias. 

  Los **loaders** tienen dos propiedades en la configuración de sus paquetes: 

  - `test` propiedad que indica qué tipo de archivo o archivos debe transformarse.
  - `use` propiedad que indica qué loader debe usar para realizar la transformación.

  ```javascript
  module: {
      rules: [
  		{ 
  			test: /\.(js|jsx)$/,
  			exclude: /node_modules/,
  			use: {
  				loader: 'babel-loader',
  			},
  		}
  	]
  }
  ```

  En la configuración anterior en rules se define una regla que webpack la toma como: 

  > Webpack cuando encuentres en el grafico un archivo '.js' o un '.jsx' dentro de un `import / require()`, utiliza `babel/loade` para transformarlo antes de agregarlo al paquete, y excluye el archivo `/node_modules/`.

  

* **Plugins:** Realiza tareas como la optimización de paquetes, la gestión de archivos y la inyección de variables de entorno. Para utilizar un plugin es necesario `require()` y agrégalo  a la `plugins` matriz.  

  ````javascript
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  module.exports = {
  	plugins: [
  		new HtmlWebpackPlugin({
  			template: './public/index.html',
  			filename: './index.html',
  			favicon: './public/favicon.png',
  		}),
  	],
  };
  ````

  En el ejemplo se puede ver que `plugins` es un arreglo, en donde se agregar los complementos y se configuran. Como se puede usar varas veces el mismo complemento en una configuración, debe de crear una instancia llamándolo con el `new` operador. El plugin que se esta instanciando es [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) que simplifica la creación de archivos HTML. En el se esta indicando que tome como `template` una archivo HTML especifico, que genere uno nuevo con el nombre de `index.html` y que le agregue un `favicon`; por ultimo le inyectara automáticamente todos los paquetes generados.

* **Mode:** Un parámetro para indicar en que modo se esta ejecutando webpack `development`, `production` o `none`, para cada entorno incorpora optimizaciones diferentes. El valor por defecto es `production`.

## Bibliografía 

Todo el contenido esta mas explicado en:

- [Webpack](https://webpack.js.org/concepts/#plugins)
- [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
- [Node.js](https://nodejs.org/api/)
- [npm Docs](https://docs.npmjs.com/)