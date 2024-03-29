const express = require('express');
const server = express();
const axios = require('axios');
const port = process.env.PORT || 8080;
const path = require('path');

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    next();
});

// Get all data
server.get('/v1/api/', (req, res) => {
    axios.get('https://board-app-aa484.firebaseio.com/.json')
        .then(response => res.send(response.data))
        .catch(error => res.send(error))
})

// create new board
server.post('/v1/api/newboard/:title', (req, res) => {
    axios.post('https://board-app-aa484.firebaseio.com/boardListContainer.json', {
        title: req.params.title
    })
        .then(response => {
            res.send(response.data)
        })
        .catch(error => res.send(error))
})

// create new card in board
server.post('/v1/api/newboard/:index/newcard', (req, res) => {
    axios.get('https://board-app-aa484.firebaseio.com/.json')
        .then(response => {
            const keys = Object.keys(response.data['boardListContainer'])
            if (req.params.index < keys.length) {
                axios.post(`https://board-app-aa484.firebaseio.com/boardListContainer/${keys[req.params.index]}.json`, {
                    summary: "Enter a title...",
                    description: "Enter a description...",
                    issueType: "issue"
                })
                    .then(resp => {
                        res.send({ result: "Success" })
                    }).catch(err => res.send(err))
            } else {
                res.send({ result: "Failed, index does not exist" })
            }
        })
        .catch(error => res.send(error))
})

// delete board
server.delete('/v1/api/deleteboard/:index', (req, res) => {
    axios.get('https://board-app-aa484.firebaseio.com/.json')
        .then(response => {
            const keys = Object.keys(response.data['boardListContainer'])
            if (req.params.index < keys.length) {
                axios.delete(`https://board-app-aa484.firebaseio.com/boardListContainer/${keys[req.params.index]}.json`)
                    .then(resp => {
                        res.send({ result: "Success" })
                    }).catch(err => res.send(err))
            } else {
                res.send({ result: "Failed, index does not exist" })
            }
        })
        .catch(error => res.send(error))
})

// delete card from board
server.delete('/v1/api/deleteboard/:index/deletecard/:indextwo', (req, res) => {
    axios.get('https://board-app-aa484.firebaseio.com/.json')
        .then(response => {
            const keys = Object.keys(response.data['boardListContainer'])
            if (req.params.index < keys.length) {
                const card = Object.keys(response.data['boardListContainer'][keys[req.params.index]])
                const filterCard = card.filter(titleID => titleID !== "title")
                if (req.params.indextwo < filterCard.length) {
                    axios.delete(`https://board-app-aa484.firebaseio.com/boardListContainer/${[keys[req.params.index]] + '/' + [filterCard[req.params.indextwo]]}.json`)
                        .then(resp => {
                            res.send({ result: "Success" })
                        }).catch(err => res.send(err))
                } else {
                    res.send({ result: "Failed, indextwo does not exist" })
                }
            } else {
                res.send({ result: "Failed, index does not exist" })
            }
        })
        .catch(error => res.send(error))
})


// change card information
server.put('/v1/api/changecard/:index/:indextwo/', (req, res) => {
    axios.get('https://board-app-aa484.firebaseio.com/.json')
        .then(response => {
            const keys = Object.keys(response.data['boardListContainer'])
            if (req.params.index < keys.length) {
                const card = Object.keys(response.data['boardListContainer'][keys[req.params.index]])
                const filterCard = card.filter(titleID => titleID !== "title")
                if (req.params.indextwo < filterCard.length) {
                    axios.put(`https://board-app-aa484.firebaseio.com/boardListContainer/${[keys[req.params.index]] + '/' + [filterCard[req.params.indextwo]]}.json`, {
                        summary: req.query.summary,
                        description: req.query.description,
                        issueType: req.query.issue
                    })
                        .then(resp => {
                            res.send({ result: "Success" })
                        }).catch(err => res.send(err))
                } else {
                    res.send({ result: "Failed, indextwo does not exist" })
                }
            } else {
                res.send({ result: "Failed, index does not exist" })
            }
        })
        .catch(error => res.send(error))
})

// change color
server.put('/v1/api/changecolor/', (req, res) => {
    axios.put("https://board-app-aa484.firebaseio.com/boardListContainer/color.json", {
        color: req.query.color
    })
        .then(response => res.send(response.data))
        .catch(err => res.send(err))
})

if (process.env.NODE_ENV === 'production') {
    server.use(express.static('board/build'));
    server.get('*', (res, req) => {
        res.sendFile(path.join(__dirname, 'board', 'build', 'index.html'));
    });
}

server.listen(port, () => console.log(`Server started, listening on port: ${port}`));

