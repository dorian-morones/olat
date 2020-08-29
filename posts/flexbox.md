---
title: "Flexbox"
date: "2020-01-01"
category: "css"
description: "Una simple implentacion para entender Flexbox"
time: "3 minutos"
---

CSS Flexbox es sistema de layout unidimensional que nos permire controlar la distribucion de los elementos dentro de un contenedor en especifico.

Cuando hablamos de unidimencional nos referimos a que solo podemos manejar el layout en una sola dimension horizontal(fila) o vertical (columna).

Las propiedad que un contenedor flexbox puede tener son:

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

Implementaremos flexbox en un contenedor footer y asi entender que es lo que hacen cada una de las propiedades mencionas:

1. Primero, tenemos que definir un contenedor donde agregaremos nuestros elementos:

```html
<div class="Container">

</div>
```

1. Definimos que el contenedor sea de tipo ```flex```, y establecemos el eje para la horientacion de los elementos:

```css
.Container{
  display: flex;
  flex-direction: row;
}
```


```flex-direction``` tiene 4 posibles valores:
- **row**: acomoda los elemenentos de manera horizontal
- **row-reverse**: acomoda los elemenentos de manera horizontal pero en orden invertido
- **column**: acomoda los elemenentos de manera vertical
- **column-reverse**: acomoda los elemenentos de manera vertical pero en orden invertido

3. Una ves establecido el contenedor de tipo flex y la orientacion, tenemos que agregar los elementos que queremos listar dentro del contenedor:

```html
<div class="Container">
  <p class="item">Elemento 1</p>
  <p class="item">Elemento 2</p>
  <p class="item">Elemento 3</p>
  <p class="item">Elemento 4</p>
</div>
```

Flexbox es un modelo unidimencional, sinembargo cuando tenemos un contenedor de un ancho establecido y nuestros elementos no caben en esas dimenciones, podemos usar ```flex-wrap``` para poder ordenar nuestros elementos en mas de una linea:

``` css
.Container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #51bfff;
  width: 200px;
  height: 200px;
}
```

4. Propiedad flex-flow, nos permite combianr ```flex-direction``` y ```flex-wrap``` en una sola linea y obtener el mismo resultado:

``` css
.Container{
  display: flex;
  flex-flow: row wrap;
  background: #51bfff;
  width: 200px;
  height: 200px;
}
```

5. Con la propiedas ```justify-content``` podemos alinear los items dentro de nuestro contenedor en el eje principal que establecimos con la propiedad ```flex-direction```, los valores que puede tener son:
- space-evenly
- flex-start
- flex-end
- center
- space-around
- space-between

``` css
.Container{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background: #51bfff;
  width: 200px;
  height: 200px;
}
```

6. Con la propiedad ```align-items``` podemos alineas los items pero en el eje no principal, puede tener los siguientes valores:

- stretch
- flex-start
- flex-end
- center


``` css
.Container{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  background: #51bfff;
  width: 200px;
  height: 200px;
}
```

7. Con la propiedad ```align-content``` podemos alinear las filas o columnas que establecimos con ```flex-direction```:

``` css
.Container{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: space-between;
  background: #51bfff;
  width: 200px;
  height: 200px;
}
```

Ya revisamos las principales propiedades de flexbox, todo esto nos puede servir para crear un footer alineado perfectamente y en poco tiempo, [codigo](https://codepen.io/DorianMorones/pen/wvGezjy)
