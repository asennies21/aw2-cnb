import * as modelo from './modelo.productos.mjs'

// modelo es un objeto
/*
const modelo = {
    obtenerProductos: obtenerProductos
} 
*/
export async function obtenerProductos(req, res){
    const productos = await modelo.obtenerProductos()

    // const vista = vista.obtenerProductos(productos) //<------- reestructuramos los datos
    res.json(productos)
}


export async function agregarProducto(req, res){
    const datos = req.body
    //////////
    // Comprobar los datos
    //////////
    const productos = await modelo.agregarProducto(datos)
    res.status(201).json(productos)
}