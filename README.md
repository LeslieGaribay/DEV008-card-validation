# Card validation

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Mensajes y explicaciones](#2-mensajes-y-explicaciones)
* [3. Interfaz](#3-interfaz)
* [4. ¿Quiénes son los principales usuarios del producto?](#4-quiénes-son-los-principales-usuarios-del-producto)
* [5. ¿Cuáles son los objetivos de estos usuarios en relación con el producto?](#5-cuáles-son-los-objetivos-de-estos-usuarios-en-relación-con-el-producto)
* [6. ¿Cómo este producto está resolviendo los problemas de los usuarios?](#6-cómo-este-producto-está-resolviendo-los-problemas-de-los-usuarios)
* [7. Estado del proyecto](#7-estado-del-proyecto)
* [8. Fundamentos utilizados](#8-fundamentos-utilizados)
* [9. Licencia](#9-licencia)


***

## 1. Resumen del proyecto

* Página: Venta de productos para realizar scrapbooking (álbum de recortes).
* Marca: Colorful notes.
* Gama de colores: Tonalidades pastel y blanco.

## 2. Mensajes y explicaciones

Presentación: “everything you need for scrapbooking”, lista de los productos disponibles. Debajo se encuentra el apartado para realizar la compra, donde se simula el subtotal, el cargo por envío y el total que deberá pagar el usuario. Contiene un mensaje para seleccionar un método de pago. Idealmente debería contener más opciones de pago, como Paypal.

## 3. Interfaz

* Permite al usuario insertar en un campo de texto el número de tarjeta que se va a validar, limitado a 16 caracteres. Se puede agregar la fecha de expiración de la tarjeta con el formato mm/yy, se puede esbozar el CVV en un campo de texto limitado a tres caracteres.
* Sale un mensaje de error al no insertar ningún número en el campo del número de tarjeta (campo vacío).
* Se puede verificar si la tarjeta que ingresó el usuario es válida o no. 
* Se pueden ocultar todos los dígitos del número de tarjeta a excepción de los últimos 4 caracteres al presionar el botón “validate” y sólo la tarjeta es válida, de lo contrario no se van a ocultar. Se tomó esta decisión debido a que si la persona ingresa un número inválido (puede ser un error), será más sencillo para ella verificar cuál dígito ingresó mal y pueda corregirlo, sin necesidad de borrar todo el número y empezar de nuevo. 

## 4. ¿Quiénes son los principales usuarios del producto?

Personas a las que les guste realizar scrapbooking o que busquen productos de papelería para realizar distintas actividades creativas.

## 5. ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Buscar y encontrar productos para realizar scrapbooking, hacer una orden y recibirla a domicilio al efectuar un pago en línea; identificar si el pago fue exitoso (al ver si su tarjeta es válida o no). 

## 6. ¿Cómo este producto está resolviendo los problemas de los usuarios?

* Es una página amigable en la que se muestran los productos disponibles e, idealmente, el usuario podría agregar al carrito cada uno de ellos desde la página principal sin tener que abrir otra página con las especificaciones del producto elegido. 

* Idealmente podría mostrar al menos dos opciones de pago. 

* Al ingresar el número de tarjeta y hacer click para validar, se realiza todo el proceso de validación, y sale una alerta que especifica si la tarjeta es válida o no. Si es válida, se van a ocultar todos los dígitos de la tarjeta con excepción de los últimos cuatro, y así podrá dar click en “pagar” para finalizar la compra. Si la tarjeta es inválida, los dígitos no se van a ocultar, esto con el objetivo de que el usuario pueda identificar fácilmente si ingresó algún dígito de forma errónea y pueda corregirlo. 

## 7. Estado del proyecto

Se cumplieron los objetivos de aprendizaje para el punto de ser entregable, pero se considera que está en desarrollo porque haría falta implementar elementos como enlaces a los productos, diversas opciones de pago, el carrito de compras, la ventana o pantalla emergente para realizar el pago, etcétera.

## 8. Tecnologías utilizadas

* HTML
* CSS
* JavaScript

## 9. Autor

Leslie Angélica Garibay Raymundo, 2023