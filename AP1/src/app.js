import express from "express";

const app = express();

//Utilização do POST
app.use(express.json())

//Titulo de livros
const livros = [
    {id: 1, "titulo": "titulo1"},
    {id: 2, "titulo": "titulo2"}
]

app.get('/', (req, res) => {
    res.status(200).send('Status ok')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:id', (req,res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
} )

app.post('/livros',(req,res) => {
    livros.push(req.body)
    res.status(201).send('livro cadastrado co msucesso')
})



function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

//exportando app
export default app