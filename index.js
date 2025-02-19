const express = require('express')

const app = express()

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

app.listen(3200)
