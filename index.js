const express = require('express')
const app = express()

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname +'/rolet-for-games/index.html');
} );

app.listen(process.env.PORT || 8080);