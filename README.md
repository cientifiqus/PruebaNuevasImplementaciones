 equerimiento de Juan Mauricio Velasquez Escobar JMVELASQ@bancolombia.com.co
 Para: Daniel Alexander Montoya Herrera <montolla@montolla.tk>



**********************

Buen día Daniel

 

A continuación están los requisitos para la prueba técnica de desarrollo, la idea es que la logres resolver de manera personal en el transcurso de la mañana y en la tarde  entre las 2:20 y las 2:40 pm hacer la sustentación.

Realizar una aplicación en Angular (si no tiene angular en el pc puede usar https://stackblitz.com/)
a- Debe contener al menos tres 3 módulos
b- En la carga de los módulos se debe aplicar lazy loading
c-Crear un servicio para realizar las consultas al backend
d- En un módulo la aplicación debe permitir mostrar en pantalla las películas(datos relevantes como título, descripción, director) de StarWars (api https://swapi.dev/) en sistema de grillas
e- En el módulo anterior (punto e) habilitar un campo de búsqueda para filtrar el array de películas, el filtro lo debe hacer por medio de un pipe que debe crear.
f- En un módulo de la aplicación se debe permitir consultar por personaje(de la api anterior) y mostrar los datos del personaje en pantalla , la consulta debe poder hacerse por id del personaje.
g- Debe crear una interface para tipar los datos recibidos del api.
h- En un módulo de la aplicación cree un componente donde se tenga una entrada de texto que guarde en el sessionStorage el dato ingresado con el nombre VerficacionGuard
i- cree un guard que no permita ingresar a la ruta de consultas  (punto f) si el valor de VerficacionGuard en el sessionStorage es diferente de PruebaNuevasImplementaciones
j- Compile la aplicación para producción (omitir si lo hizo en https://stackblitz.com/)
k- Comparta en un zip el código de producción y el de desarrollo para validar la implementación (compartir la url del código en https://stackblitz.com/ si lo hizo ahí.)


Enero 27 de 2021, se espera completarlo en 4 horas.





# PruebaNuevasImplementaciones

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
