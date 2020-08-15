#!/usr/bin/env node

console.log("\n    ----  Starting API Server  ---- \n");


const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const app = express()


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const port = 3000

var d = {
    /*
    GET networks: `status: scanning/done/fail, networks: [ { ssid: <ssid> }, { ssid: <ssid> } ... ]`
    POST creds: `{ ssid: <ssid>, password: <password> } - saves and restarts wifi`
    */
    network: { status: 'done', 
               networks: [  { ssid: "ssid_1" }, 
                            { ssid: "ssid_2" },
                            { ssid: "ssid_3" },
                            { ssid: "ssid_4" },
                            { ssid: "ssid_5" },
                            { ssid: "ssid_6" },
                            { ssid: "ssid_7" },
                            { ssid: "ssid_8" },
                            { ssid: "ssid_9" },
                            { ssid: "ssid_a" },
                            { ssid: "ssid_s" },
                            { ssid: "ssid_d" },
                            { ssid: "ssid_f" },
                            { ssid: "ssid_g" } ] },
    creds: { ssid: "my_ssid", password: "my_pass" }
}


router.get('/', function (req, res) {
    res.sendFile("D:\\pk\\prj\\captive_config\\index.html");
});

app.get('/networks', function (req, res) {
    var num = Math.floor(Math.random() * Math.floor(d.network.networks.length));
    var dat = {
        status: 'done',
    };
    dat.networks = d.network.networks.slice(0, num);
    setTimeout( function() { res.send(dat);}, 800);
});
router.post('/creds', function (req, res) {
    var ssid=req.body.network;
    var password=req.body.password;
    console.log("Got ssid: " + ssid );
    console.log("Got password: " + password );
    res.status(201).send("Connecting to " + ssid);
});


app.use("/", router );
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
