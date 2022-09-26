const express = require("express");
const app = express();


const port = 5000;

app.use(express.json({ limit: '25mb' }));
app.get('/', function (req, res) {
  res.send('get action from root')
})
app.post('/', function (req, res) {
const sp= req.body.event
const operation= sp.split(".");
const action = operation[operation.length-1];
console.log(JSON.stringify(req.body));

})

app.listen(port, () => {
    console.log(`testing webhook successful`);
}); 