import {obtenerProductos} from './funciones.mjs'
import express from 'express'

// Defini un enrutamiento
const rutasProductos = express.Router()

// Modulo productos
// GET /api/v1/productos
rutasProductos.get('/productos',obtenerProductos)

// GET /api/v1/productos/:id
rutasProductos.get('/productos/:id',)

// POST /api/v1/productos
rutasProductos.post('/productos',)

// PUT /api/v1/productos/:id
rutasProductos.put('/productos/:id',)

// DELETE /api/v1/producto/:id
rutasProductos.delete('/producto/:id',)

export default rutasProductos