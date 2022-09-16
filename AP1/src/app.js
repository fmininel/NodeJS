import Express from "express";

const app = Express()

//Titulo de livros
const livros = [
    {id: 1, "titulo": "titulo1"},
    {id: 2, "titulo": "titulo2"}
]

app.get('/', (req, res) => {
    res.status(200).send('Status ok')
})

app.get('/livros', (req, res)=> {
    res.status(200).json(livros)
})
//exportando app
export default app