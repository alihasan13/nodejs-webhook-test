const express = require("express");
const app = express();


const port = 5000;

app.use(express.json({ limit: '25mb' }));
app.get('/', function (req, res) {
  res.send('get action from root')
})
app.post('/', function (req, res) {

console.log(req.body);

})

app.listen(port, () => {
    console.log(`testing webhook successful`);
}); 