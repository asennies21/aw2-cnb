import express from 'express'

const PUERTO = 3000


// Instancia de servidor express
const app = express()

const obtenerCosas = (req, res)=>{
    res.set('content-type','text/html')
    res.status(200)
    res.end('<h1>Hola express</h1>')
}

app.get('/',obtenerCosas)

app.get('/saludo',(req, res)=>{
    
    res.end('Estoy en verbo POST y ruta /')
})


// Post
app.post('/', (req, res)=>{
    res.end('Estoy en verbo POST y ruta /')
})

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})



///--------------------


// const y = ()=>{
//     console.log('hola')
// }

// const x = (_y)=>{
//     console.log('ejecucion 1')
//     _y()
//     console.log('ejecucion 2 ')
// }

// x(y)