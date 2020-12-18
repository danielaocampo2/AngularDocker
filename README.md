# Importancia contenedores docker  :whale2:
"Permite entregar código con mayor rapidez, estandarizar las operaciones de las aplicaciones, transferir el código con facilidad y ahorrar dinero al mejorar el uso de recursos. Con Docker, obtiene un solo objeto que se puede ejecutar de manera fiable en cualquier lugar. 
La sintaxis sencilla y simple de Docker le aporta un control absoluto. 
La amplia adopción significa que existe un gran ecosistema de herramientas y aplicaciones listas para su uso que puede utilizar con Docker."

### NOTA :point_down:

También puede descargar la imagen de docker en el siguiente enlace:
https://hub.docker.com/r/danielaocampo/api-node/tags?page=1&ordering=last_updated

# API STUDENTS: :clipboard:
- **Obtiene todos los estudiantes:** <br>
  -- <b>Metodo:</b> GET <br>
  -- <b>Ruta:</b> http://localhost:4000/students/
        
- **Obtiene un estudiante:** <br>
  -- <b>Metodo:</b> GET <br>
  -- <b>Ruta:</b> http://localhost:4000/students/{cc} <br>
  -- <b>Parametro:</b> cc del estudiante va en la URL
- **Modificar datos de un estudiante:**<br>
  -- <b>Metodo:</b> POST <br>
  -- <b>Ruta:</b> http://localhost:4000/students/update/{cc} <br>
  -- <b>Parametro:</b> cc del estudiante va en la URL <br>
  -- <b>Body: </b> Recibe un json como el siguiente ejemplo: <br>
  { <br>
    "names":"Juan O.", <br>
    "cc":10364432, <br>
    "semester":8, <br>
    "grade":5, <br>
    "couse": "ing. web" <br>
 }  
- **Crear un estudiante:** <br>
  -- <b>Metodo:</b> POST <br>
  -- <b>Ruta:</b> http://localhost:4000/students/add <br>
  -- <b>Body: </b> Recibe un json como el siguiente ejemplo: <br>
   {<br>
    "names":"Pedro Martinez", <br>
    "cc":145236, <br>
    "semester":5,<br>
    "grade":4,<br>
    "course": "ing. web"<br>
}
- **Eliminar un estudiante:** <br>
  -- <b>Metodo:</b> GET <br>
  -- <b>Ruta:</b> http://localhost:4000/students/delete/{cc} <br>
  -- <b>Parametro:</b> cc del estudiante va en la URL

- **Modificar el campo estado, poniendo en 0 de todos los estudiantes que estan en el decimo semestre:** <br>
  -- <b>Metodo:</b> POST <br>
  -- <b>Ruta:</b> http://localhost:4000/students/deactivate 
- **Entregar el promedio de las notas de todos los estudiantes de un curso:**<br>
  -- <b>Metodo:</b> GET <br>
  -- <b>Ruta:</b> http://localhost:4000/students/{course} <br>
  -- <b>Parametro:</b> course del estudiante va en la URL


# Angularcrud 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# angularDocker
