//importando o app pasta SRC, app.js
import app from './src/app.js'

//porta no ambiente de produção ou porta 3000
const port = process.env.PORT || 3000 

app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port} `)
})