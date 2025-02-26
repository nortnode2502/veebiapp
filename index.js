const express = require('express')

const path = require("path")

const {naitaMatkad, registreeriOsaleja } =require("./controller")

const app = express();
app.use(express.json())
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/assets', express.static('public'))

app.get('/tervitus', (req, res) => {
    console.log(req.query)
    res.send(`
        <html>
            <head>
            </head>
            <body>
                Tervitused ${req.query.nimi}
            </body>
        </html>
        
        `)
})

app.get('/kiitus', (req, res) => {
    console.log(req.query)
    res.send(`
        <html>
            <head>
                <style>
                    strong {
                        color: green
                    }
                </style>
            </head>
            <body>
                <strong>${req.query.kiidetav}</strong> on maailma parim
            </body>
        </html>
        
        `)
})

app.get('/matkad', naitaMatkad)
app.get('/registreeru', registreeriOsaleja)

app.listen(3200)
