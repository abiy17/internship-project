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

app.put(`/department/:id`,mongo.updateDepartment)

app.delete(`/department/:id`,mongo.deleteDepatment)

app.get(`/ratings` ,mongo.getRating)

app.post(`/rating`, mongo.createRating)

app.get(`./minister`,mongo.getMinister)

app.post(`./minister`,mongo.createMinister)

app.listen(5000);