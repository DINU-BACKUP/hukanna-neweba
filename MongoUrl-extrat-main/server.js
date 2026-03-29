const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let client = null;

// Connect to MongoDB
app.post('/connect', async (req, res) => {
    const { mongoUrl } = req.body;
    try {
        client = new MongoClient(mongoUrl);
        await client.connect();
        const databases = await client.db().admin().listDatabases();
        res.json({ success: true, databases: databases.databases });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
});

// Get Collections
app.get('/collections/:dbName', async (req, res) => {
    try {
        const db = client.db(req.params.dbName);
        const collections = await db.listCollections().toArray();
        res.json({ collections });
    } catch (err) {
        res.json({ error: err.message });
    }
});

// Get Documents
app.get('/documents/:dbName/:collName', async (req,res)=>{
    try{
        const db = client.db(req.params.dbName);
        const coll = db.collection(req.params.collName);
        const docs = await coll.find({}).limit(20).toArray();
        res.json({ docs });
    }catch(err){
        res.json({ error: err.message });
    }
});

// Search documents
app.post('/search/:dbName/:collName', async (req,res)=>{
    try{
        const db = client.db(req.params.dbName);
        const coll = db.collection(req.params.collName);
        const { query } = req.body;
        const startTime = Date.now();
        const docs = await coll.find(query).limit(20).toArray();
        const endTime = Date.now();
        res.json({ docs, time_ms: endTime-startTime });
    }catch(err){
        res.json({ error: err.message });
    }
});

app.listen(3000, ()=>console.log('Server running on http://localhost:3000'));
