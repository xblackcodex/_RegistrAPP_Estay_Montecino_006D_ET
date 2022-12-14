- Primero para poder ejecutar el JSON en nuestra aplicacion, tenemos que crear una carpeta 
llamada DATA dentro de nuestro SRC.

- Segundo tuvimos que crear 2 interfaces que tuvieran la estructura de lo que nosotros 
queriamos una que llevara la id y la otra que fueran los datos que queriamos mostrar.

- Despues que nosotros ya tenemos creadas nuestras interfaces, tenemos que conectarlas y crear un servicio donde tendriamos los 
siguientes metodos tales como agregar, guardar, eliminar, modificar etc.

- Despues una vez creada la interfas y el servicio se conecta en diferentes pages como por ejemplo el 
detail-asistencia que es donde nosotros mostramos la informacion de las secciones, asistenciaqr donde estaria
insertada las secciones con sus respectivos id, etc.

-Una vez creada la carpeta DATA y todos los datos y metodos enlazados correctamente, nos vamos al cmd dentro de la carpeta DATA
he ingresamos este comando "json-server --watch "nombre de su archivo".json --host 0.0.0.0 --port 3300" con esto iniciamos el JSON 
y asi podemos visualizar la informacion que nosotros tengamos en ese archivo JSON.

- Una vez  tuvimos listo el JSON tenemos que implementar la camara, para esto primero necesitamos instalar el CORDOVA y el PLUGIN NATIVO
para esto necesitariamos estos comandos, "ionic cordova plugin add cordova-plugin-camera" y "npm install @ionic-native/camera".

- Una vez instalado tenemos que darle una serie de permisos en el apartado "config.xml" que se encuentra en la aplicacion.

- Ya instalado todo y dando los respectivos permisos, podemos pasar a codificar una funcion que sirva para tomar una fotografia,
esta funcion tiene que realizarse en el "module.ts" para despues pasarlo a un boton en el HTTML.

- Ya con todo esto listo solo resta guardar y generar la APK en android studio.
