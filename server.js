import express from 'express'

const app = express()

const baseDir = `./dist/`

app.use(express.static(`${baseDir}`))

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

const port = 4000

app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))