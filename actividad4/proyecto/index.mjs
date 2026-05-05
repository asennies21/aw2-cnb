import express from 'express'

const PUERTO = 3000
const app = express()

// Desarrollo ...

// Definir middleware
const validacionCodigo = async (req, res, next)=>{
    const codigo = Number(req.params.codigo)
    // 1 - fetch -> 
    const respuesta = await fetch('http://localhost:4321/usuario')
    const usuario = await respuesta.json()
    ///////////////
    // objeto
    if(usuario.codigo === codigo){
        return next()
    }
    res.status(401).json({mensaje:'El codigo es incorrecto'})
} 

// Definir ruta GET /:codigo
// peticion -> middleware -> callback final
app.get('/:codigo',validacionCodigo,(req, res)=>{    
    res.status(200).json({mensaje:'El codigo es correcto'})
})



app.listen(PUERTO, ()=>{
    console.log('http://localhost:3000')
})