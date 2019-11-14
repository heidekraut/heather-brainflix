const express = require('express');
const app = express();  // start up express server 
const router = express.Router();
const mainData = require('../data/main-data');
const postData = require('../data/published-video.json')
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


router.post('/newID', (request, response) => {

// const newObj = {postData}
console.log(response.body)

    // console.log(postData)
//     const videoInfo = request.body    
//create new object
// push obj onto new data array
//     body.psuh
// use response json 

// const newDataArray = pos

mainData.push()
response.json(mainData)
});

module.exports = router;