import http from 'node:http'


const app = http.createServer(async (peticion, respuesta) => {
    if (peticion.method === 'GET') {
        if (peticion.url === '/usuarios') {
            // 1 - fetch -> obtener los datos
            const respuesta = await fetch('')
                // 1.1 extraer los datos 

            // 2 - escribirlo en formato .json
                // ruta - path
                // writeFile 
            // 3 - leer el archivo .json
                // readFile
            // 4 - enviar datos al cliente

            respuesta.statusCode = 200
            return respuesta.end(/* enviar datos leídos al cliente */)
        }
    }
    // Fallback
    respuesta.statusCode = 404
    respuesta.end('Ruta no encontrada')
})

app.listen(3000, () => {
    console.log('servidor corriendo en http://localhost:3000')
})