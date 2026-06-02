import pool from '../../conexion.bd.mjs'

// obtener los datos
export async function obtenerProductos(){
    const resultado = await pool.query('SELECT * FROM productos') //-- Result
    console.log(resultado)
    return resultado.rows
}



export async  function agregarProducto(datos){
    const {producto, precio} = datos
    const resultado = await pool.query('INSERT INTO productos(producto, precio) VALUES($1, $2) RETURNING id',[producto, precio])
    return resultado.rows
} 