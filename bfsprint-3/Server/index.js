const express = require ('express') //import the express node package
const app = express();  // start up express server 
const videos = require('./routes/main');
const cors = require('cors')


app.use(express.json());
app.use(express.static('public'));

app.use(cors())

app.use('/videos', videos)


app.listen(8090, () => {
    console.log('server ready')
})


