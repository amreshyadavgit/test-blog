const fs = require('fs')
module.exports = {
    find: async (req, res) => {
        const arr = require('../config/data.json');
        return res.json(arr);
    },
    findOne: async (req, res) => {
        const arr = require('../config/data.json');
        let id = req.params.id;
        const post = arr.find(post => post.id === id);
        return res.json(post)
    },
    create: async (req, res) => {
        let arr = require('../config/data.json');
        let post = req.body;
        post.id = arr.length + 1;
        arr.push(post);
        fs.writeFileSync('config/data.json', JSON.stringify(arr));
        return res.json(post);
    },
    update: async (req, res) => {
        const oldArr = require('../config/data.json');
        const arr = JSON.parse(JSON.stringify(oldArr))
        const id = req.params.id;
        let post = req.body;
        let index = arr.findIndex(post => post.id == id);
        arr[index] = Object.assign(arr[index], post);
        fs.writeFileSync('config/data.json', JSON.stringify(arr));
        return res.json(arr);
    },
    deleteOne: async (req, res) => {
        const oldArr = require('../config/data.json');
        const arr = JSON.parse(JSON.stringify(oldArr))
        const id = req.params.id;
        let index = arr.findIndex(post => post.id == id);
        arr.splice(index, 1);
        fs.writeFileSync('config/data.json', JSON.stringify(arr));
        return res.json(arr);
    }

}














