import express from 'express'
import './inyectar.env.mjs'
import rutasProductos from './modulos/productos/rutas.productos.mjs'
// import rutasUsuarios from './rutas.mjs'

//console.log(process.env)


const PUERTO = process.env.PUERTO || 3000 

const app = express()
app.use(express.json())
app.use(rutasProductos)

// Configurar un aAPI REST Basica

app.listen(PUERTO)