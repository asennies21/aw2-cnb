import fsp from 'node:fs/promises';
import path from 'node:path'

// Lectura de archivos
// try{
//     const contenido = await fsp.readFile('./texto.txt','utf8')
//     console.log(contenido)
// }catch(e){
//     console.log(e)
// }

// Escritura de archivos
try{
    // const ruta = path.join('./texto.txt')
    const ruta = path.join('.','texto.txt')
    // Escribimos
    await fsp.writeFile(ruta,'Contenido cambiado v2')
    // leemos
     const contenido = await fsp.readFile(ruta,'utf8')
     // Imprimimos
    console.log(contenido)
}catch(e){
    console.log(e)
}