const {loeMatkadeAndmed, lisaOsaleja} = require("../data")

const naitaMatkad = (req, res) => {
    const matkad = loeMatkadeAndmed()
    console.log(matkad)
    res.render("matkad", {matkad: matkad})
}

const registreeriOsaleja = (req, res) => {
    lisaOsaleja(req.query.matk, req.query.email)
    res.redirect("/matkad")
}

module.exports = {
    naitaMatkad,
    registreeriOsaleja
}