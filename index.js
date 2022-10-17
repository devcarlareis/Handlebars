const express = require('express');
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const itens = ['item a', 'tem b', 'item c']

    res.render('dashboard', {itens})
})

app.get('/', (req, res) => {

    const user = {
        name: "Carla",
        surname: "Reis",
        age: 30
    }

    const palavra = "teste"

    const auth = false

    const approved = true

    res.render('home', { user: user, palavra, auth, approved})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprendr Node.js..',
        comments: 4
    }

    res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Teste',
            comments: 8
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Teste',
            comments: 8
        },
        {
            title: 'Aprender Ract',
            category: 'React',
            body: 'Teste',
            comments: 8
        }
    ]

    res.render('blog', {posts})
})

app.listen(3000, () =>{
    console.log('app function!')
})