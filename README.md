# Awesome Project Build with TypeORM

Steps to run this project:

* Primero tenemos que instalar las dependencias con  `npm i`

* Luego tenemos que ver el archivo .env.example y crear uno nuevo llamado .env. una vez creado copiar todo lo del primer archivo en el segundo y completar los datos correspondientes:

    1. PORT_APP = 3001 ---> ESTE ES EL PUERTO DONDE SE CORRE LA API. NO ES NECESARIO CAMBIARLO
    
    2. CLIENT_DOMAIN = http://localhost:5173 --> ESTE ES EL DOMINIO DEL CLIENTE DE NEXT JS (SUSTITUIR POR EL TUYO), ESTO ES PARA LA CONFIGURACION DE CORS
    
    3. API_DOMAIN = http://localhost:3001  ---> ESTE ES EL DOMINIO DE LA MISMA API, ES NECESARIA PARA CUESTIONES INTERNAS.
    
    4. TOKEN_SECRET = 40240919a71b422cd2bc0d638382b0e1accd89f06bc2977a426d30e7aa3b7416 --> ESTA  KEY ES PARA JWT Y NO ES NECESARIO CANBIARLA PORQUE ES DE PRUEBA
    
    5. CLIENT_KEY = 6e068911b0e1a23bf78f2878fb8260a5facad07f5f516a240cbc62f0eea50ea0 --> ESTA ES PARA ESTABLECER UNA COMUNICACION ENTRE EL CLIENTE Y LA API, NO ES NECESARIO CAMBIARLA
    
    6. DATABASE VARIABLES / POSTGRE SQL  --> AQUI COMPLETAMOS TODOS LOS DATOS DE NUESTRA BASE DE DATOS DE POSTGRESQL
    
    7. HOST= "localhost"
    
    8. PORT= 5432
    
    9. USER_NAME= "postgres"
    
    10. PASSWORD= ***
    
    11. DATA_BASE= "todosgamers"

* Para correr el proyecto se usar npm run dev, este comando compila el typeScript en la carpet /build y luego corre la api. 

* Ya con esto deberia de poder correr el proyecto.

* Detalles :
    1. Se uso MVC como arquitectura.
    2. Se usaron funciones como controladores y no clases.
    3. Se valido la entrada de datos con express-validator.
    4. Se utilizo como cookie-parser, body-parser, cors, morgan para poder manejar un poco mejor los datos.
    5. Los registros  de usuarios se utiliza JWT con bycript para hashear las password
    6. Los errores estan controlados con un traycatch que los intercepta y hace un next del error para luego manjarlo en el manejador de errores general de express en app.js
    7. Se uso typeORM para manipular la base de datos desde el codigo.
    8. Se uso multer para manejar imagenes y alojarlas en el servidor.
    9. Se uso TypeScript

* Si quiere correr el proyecto en su celular necesitara de la funcionalidad de visual studio code PORT --> FOWARD que se encuentra en la zona donde esta la consola:
![image](https://github.com/user-attachments/assets/d118f7cd-65b8-4d3c-83c6-d80795edf50e)
Aqui se debe dar click en el boton "Foward a Port" y no olvidarse de PONER PUBLICO EL PUERTO :
![image](https://github.com/user-attachments/assets/1473cc31-05da-4c7c-be8f-5a686dc7cd64)
![image](https://github.com/user-attachments/assets/adb63f21-ef90-43db-bd38-a04c34511ba7)

De esta forma podra desplegar de forma rapida el cliente y la api. Para poder tener un correcto funcionamiento se tendra que cambiar estas dos credenciales en el archivo .env:
CLIENT_DOMAIN = http://localhost:5173 --> https://visualStudioDomainClient.brs.devtunnels.ms
API_DOMAIN = http://localhost:3001  ---> https://visualStudioDomainApi.brs.devtunnels.ms



