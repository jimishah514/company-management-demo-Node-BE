const express = require( "express" );
const app = express();
const port = 3000; // default port to listen
const cors =require('cors');
var bodyParser = require('body-parser')
import {router} from './routes/common';
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(cors({
origin:'*',
methods: 'GET,POST,OPTIONS,DELETE,PUT',
credentials: true
}))
app.use('/',router);

// start the Express server
app.listen( process.env.PORT || port, () => {
    if(port) console.log( `server started at --- http://localhost:${ port }` );
    else  console.log( `server started at ||| http://localhost:${ process.env.PORT }` );
} );