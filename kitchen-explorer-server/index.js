const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())
const chefs = require("./data/chef.json")


app.get('/', (req, res) => {
    res.send('Server running')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedChef = chefs.find(chef => chef.id === +id)
    console.log(selectedChef);
    res.send(selectedChef)
})


app.listen(port, () => {
    console.log(`Server running on ${port}`)
})