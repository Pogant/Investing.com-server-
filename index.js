let express = require('express')
let cors = require('cors');
let app = express();
let bodyParser = require('body-parser');

app.use(cors());
app.options('*', cors());



var port = process.env.PORT || 8080;

let apiRoutes = require("./api-routes")

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api', apiRoutes)

app.listen(port, function () {
     console.log("Running the server on port " + port);
});