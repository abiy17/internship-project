const express = require(`express`)
require("dotenv").config();
const bodyParser = require(`body-parser`)
const mongo = require(`./mongo`)
const app = express();
app.use(bodyParser.json({limit: '100mb'}));
const cors = require(`cors`)
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json())

app.get(`/department`,mongo.getDepartment)

app.post(`/department`,mongo.createDepartment)

app.put(`/department/:id`,mongo.updateDepartment)

app.delete(`/department/:id`,mongo.deleteDepatment)

app.get(`/ratings` ,mongo.getRating)

app.post(`/rating`, mongo.createRating)

app.get(`/minister`,mongo.getMinister)

app.post(`/minister`,mongo.createMinister)

app.delete(`/ministers/:id`,mongo.deleteMinister)

app.put(`/ministers/:id`,mongo.UpdateMinister)

app.get(`/officials`,mongo.getOfficials)

app.post(`/officials`,mongo.createOfficials)

app.put(`/officials/:id`,mongo.updateOfficials)

app.delete(`/officials/:id`,mongo.deleteOfficials)

app.get(`/comments`,mongo.getComments)

app.post(`/comments`,mongo.createComment)

app.listen(process.env.PORT || 5000);