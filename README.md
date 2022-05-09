# 6. Mi primer server con Express.js 🌟

Este es un punto clabe: CREAR APPS DE BACKEND

Para realizar esto, fue necesario seguir estos pasos:

1. Crear un proyecto nuevo llamado "express_basic", donde se ejecuta el comando npm init para crear el archivo package.json. Posteriormente intalar la dependencia express: npm install express --save, para por ultimo crear un archivo llamado app.js.
2. Correr la app con el comando node app.js y entrar al navegador a localhost:3000
3. Se agrega una nueva ruta para poder responder algo en la url localhost:3000/launchx.
4. Se agrega una nueva ruta y objeto para el server, y se vuelve a levantarlo para que tome los cambios recientes node app.js.
se entra a la url localhost:3000/explorersInNode para verificar que regresa el objeto que indicaste.
5. Ahora se agrega una nueva ruta, indicando que recibira un parametro /explorers/:explorerName, esto indicará que :explorerName será un valor enviado por la url.
6. El objeto req contiene la propiedad params, esta propiedad contiene los Query Params (parámetros) enviados por la url. (req.params)
7. Entra a la url localhost:3000/explorers/soyElExplorerCarlo. Para ver el resultado final
