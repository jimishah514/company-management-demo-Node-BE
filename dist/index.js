"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000; // default port to listen
const cors = require('cors');
var bodyParser = require('body-parser');
const common_1 = require("./routes/common");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({
    origin: '*',
    methods: 'GET,POST,OPTIONS,DELETE,PUT',
    credentials: true
}));
app.use('/', common_1.router);
// start the Express server
app.listen(process.env.PORT || port, () => {
    if (port)
        console.log(`server started at --- http://localhost:${port}`);
    else
        console.log(`server started at ||| http://localhost:${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map