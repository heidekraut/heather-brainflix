const express = require('express');
const app = express();  // start up express server 
const router = express.Router();
const mainData = require('../data/main-data');
const asideData = require('./aside');
app.use(express.json());

router.get('/', (request, response) => {
    // const find = mainData
    // console.log(request.params);
    // response.json(find);
    response.send(mainData);
});

router.get('/:id', (request, response) => {
    const findVid = mainData.find((vid) => {
        return vid.id === request.params.id
    })
    response.json(findVid)
})


// router.post('/', (request, response) => {
//     console.log(request.body);

//     const videoInfo = request.body    
//create new object
// push obj onto new data array
//     body.psuh
// use response json 
// });

module.exports = router;