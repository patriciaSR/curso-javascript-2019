const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const express = require('express');
const cors = require('cors');

const url = "mongodb://localhost:27017/itemsDB";

const app = express();
//Enable CORS
app.use(cors());
//Convert json bodies to JavaScript object
app.use(express.json());

//Save info in DataBase Mongo
let items;

app.post('/items', async(req, res) => {
    const item = req.body;
    //Validation
    if (typeof item.description != 'string' || typeof item.checked != 'boolean') {
        res.sendStatus(400);
    } else {
        //Create object with needed fields and assign id
        const newItem = {
            description: item.description,
            checked: item.checked
        };
        //Save resource
        await items.insertOne(newItem);
        //Return new resource
        res.json(newItem);
    }
});

app.get('/items', async(req, res) => {
    const allItems = await items.find().toArray();
    res.json(allItems);
});

app.get('/items/:id', async(req, res) => {
    const id = req.params.id;
    const item = await items.find({_id: new ObjectId(id)}).toArray();
    if (!item) {
        res.sendStatus(404);
    } else {
        res.json(item);
    }
});

app.delete('/items/:id', async(req, res) => {
    const id = req.params.id;
    const item = await items.deleteOne({_id: new ObjectId(id)});
    if (!item) {
        res.sendStatus(404);
    } else {
        res.json(item);
    }
});

app.put('/items/:id', async(req, res) => {
    const id = req.params.id;
    const item = await items.findOne({ _id: new ObjectId(id)});
    if (!item) {
        res.sendStatus(404);
    } else {
        const itemReq = req.body;
        //Validation
        if (typeof itemReq.description != 'string' || typeof itemReq.checked != 'boolean') {
            res.sendStatus(400);
        } else {
            const newItem = {
                description: itemReq.description,
                checked: itemReq.checked
            };
            //Create object with needed fields and assign id
            items.updateOne({_id: new ObjectId(id)}, { $set: newItem})
            //Return new resource
            res.json(newItem);
        }
    }
});

async function dbConnect() {

    conn = await MongoClient.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log("Connected to Mongo");

    items = conn.db().collection('items');
}

async function main() {

    await dbConnect();

    app.listen(3000, () => console.log('Server started in port 3000'));
}

main();