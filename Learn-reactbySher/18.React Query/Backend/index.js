const express = require('express');
const app = express();

app.get('/api/products', (req, res) => {
    const character = [
        {
            "id": "208",
            "author": "Doraemon",
            "download_url": "https://picsum.photos/id/208/2002/1280"
        },
        {
            "id": "209",
            "author": "Nobita Nobi",
            "download_url": "https://picsum.photos/id/209/1920/1280"
        },
        {
            "id": "210",
            "author": "Shizuka Minamoto",
            "download_url": "https://picsum.photos/id/210/1920/1280"
        },
        {
            "id": "211",
            "author": "Takeshi Gouda",
            "download_url": "https://picsum.photos/id/211/1920/1280"
        },
        {
            "id": "212",
            "author": "Suneo Honekawa",
            "download_url": "https://picsum.photos/id/212/2000/1394"
        },
        {
            "id": "213",
            "author": "Dorami",
            "download_url": "https://picsum.photos/id/213/4928/3264"
        },
        {
            "id": "214",
            "author": "Hidetoshi Dekisugi",
            "download_url": "https://picsum.photos/id/214/2729/2047"
        },
        {
            "id": "215",
            "author": "Tamako Nobi",
            "download_url": "https://picsum.photos/id/215/3264/2448"
        },
        {
            "id": "216",
            "author": "Nobisuke Nobi",
            "download_url": "https://picsum.photos/id/216/2500/1667"
        },
        {
            "id": "217",
            "author": "Mii-chan",
            "download_url": "https://picsum.photos/id/217/4000/2590"
        },
        {
            "id": "218",
            "author": "Perman",
            "download_url": "https://picsum.photos/id/218/4752/3168"
        },
        {
            "id": "219",
            "author": "Hidetoshi Dekisugi Jr.",
            "download_url": "https://picsum.photos/id/219/5000/3333"
        },
        {
            "id": "220",
            "author": "Dorami Jr.",
            "download_url": "https://picsum.photos/id/220/3872/2416"
        }
    ]

    // http://localhost:3000/api/products/?search=nobi 
    if (req.query.search) {
        const charFilter = character.filter(char => char.author.toLowerCase().includes(req.query.search.toLowerCase()))
        res.send(charFilter)
        return;
    }

    setTimeout(() => {
        res.send(character);
    }, 3000)


})

app.listen(3000)