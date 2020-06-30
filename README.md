# Captive Config

A soft AP that allows configuration of a SSID / password.

### Flow

Initial Boot Up
Look for SSID
    If Found -> Connect
        If Connect succeeds
            Run Normal
        If Connect Fails
            Run Config
    IF NOT Found
        Run Config
        
Config
    Start AP
    Captive DNS Portal - serve config page
    Start REST for CONFIG_PAGE
    

#### JSON Sent or Received
 * GET networks: `status: na/scanning/done/fail, networks: [ { ssid: <ssid> }, { ssid: <ssid> } ... ]`
 * POST creds: `{ ssid: <ssid>, password: <password> } - saves and restarts wifi`

#### Testing / Development
Use Node.js to run a server and connect to it with a browser.
* cd api_test_server
* node index.js
* Open browser to 127.0.0.1:3000
