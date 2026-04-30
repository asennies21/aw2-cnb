import express from 'express'

const PUERTO = 3000

const app = express()

const productos = [
    {
        id: 1,
        nombre:'pantalon',
        precio: 50000
    },
    {
        id: 2,
        nombre:'remera',
        precio: 15000
    }
]


// Parametros de ruta

app.get('/', (req, res)=>{

    res.json({mensaje:"Bienvenido"})
})

app.get('/productos', (req, res)=>{

    res.json(productos)
})
app.get('/productos/:id', (req, res)=>{
    // parseInt
    // Number
    const id = Number(req.params.id) //<----- viene como una cadena

    const productosFiltrados = productos.filter((producto)=>{
        return producto.id === id
    })

    res.json(productosFiltrados)
})
app.get('/productos-descuento/:descuento', (req, res)=>{

    const descuento = Number(req.params.descuento)
    console.log(descuento)

    const productosConDescuento = productos.map((producto)=>{
        const calculo = producto.precio * (descuento / 100)
        return {
            ///...producto, //< asignacion spread
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio - calculo

        }
    })
    res.json(productosConDescuento)
})
app.listen(PUERTO)