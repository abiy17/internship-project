const express = require(`express`)
const bodyParser = require(`body-parser`)
const mongo = require(`./mongo`)
const app = express();
const cors = require(`cors`)
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json())

app.get(`/department`,mongo.getDepartment)

app.post(`/department`,mongo.createDepartment)

app.get(`/updateDepartment/:id`,mongo.updateDepartment)

app.listen(5000);