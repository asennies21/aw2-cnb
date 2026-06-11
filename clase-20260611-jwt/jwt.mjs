import jwt from 'jsonwebtoken'

// sign
// verify

// Payload
const datosUtiles = {
    usuario: 'andres',
    rol: 0
}

jwt.sign(datosUtiles, 'clavesecreta', {expiresIn: '1h'}, (error, token)=>{
    if(error){
        return console.log(error)
    }
    console.log(token)

    jwt.verify(token,'clavesecreta1', (error, datosUtiles)=>{
        if(error){
            return console.log(error)
        }
        console.log(datosUtiles)
    } )
})