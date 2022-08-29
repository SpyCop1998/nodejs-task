const express = require('express'),
    app = express(),
    { serverPort } = require('./config/config');


const main = () => {
    app.use(express.json())
    require('./routes/routes')(app)
    app.listen(serverPort, () => {
        console.log(`App is Running on ${serverPort}`)
    })
}

main()
