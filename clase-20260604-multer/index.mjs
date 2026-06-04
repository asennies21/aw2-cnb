import express from 'express'
import multer from 'multer'
import { nanoid } from 'nanoid'
import mime from 'mime-types'

const PUERTO = 3000

const app = express()

// Multer -> https://www.npmjs.com/package/multer

const storage = multer.diskStorage({
    /////////////
  destination: function (req, file, cb) {
    cb(null, './archivos')
  },
  ////////
  filename: function (req, file, cb) {
    console.log(file)
   const nuevoNombre = nanoid() + '.' +  mime.extension(file.mimetype)
    cb(null, nuevoNombre)
  }
})

const subirArchivo = multer({
    storage: storage
    // dest: './archivos'
})
const gestionArchivo = subirArchivo.single('archivo') // <--- nos devuelve una función


// servimos el front
app.use('/admin', express.static('./front-web'))
// app.use('/archivos', express.static('./archivos'))

app.post('/subir-archivo', (req, res)=>{
    ///////////////////////////////////
    gestionArchivo(req, res,(error)=>{
        if(error) return res.status(500).json({
            mensaje:'Error en el servidor'
        })
        // console.log(req.file)
        /// --------------------
        return res.json({
            mensaje:'Registro recibido'
        })

    })
    /////////////////////////////////////
})


app.listen(PUERTO)