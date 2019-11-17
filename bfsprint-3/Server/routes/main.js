const express = require('express');
const app = express();  // start up express server 
const router = express.Router();
const mainData = require('../data/main-data');
const postData = require('../data/published-video.json')
app.use(express.json());

router.get('/', (request, response) => {

    response.send(mainData);
});

router.get('/:id', (request, response) => {
    const findVid = mainData.find((vid) => {
        return vid.id === request.params.id
    })
    response.json(findVid)
})


router.post('/', (request, response) => {

const {id, title, description} = request.body
const newObj = {
    id,
    title,
    description,
    likes: "2"
    
}

console.log(request.body);


mainData.push(newObj)
response.json(newObj)
});

module.exports = router;
