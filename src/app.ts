import express from 'express';
import saveToDb from './dbOperations';
import bodyParser from 'body-parser'

const app = express();
const PORT = process.env.PORT || 5600;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello');
});

app.post('/addPerson', async(req,res)=>{
    const isSuccess = await saveToDb(req.body);
    if(isSuccess){
        res.json({message: 'Record saved successfully'}).status(201);
    }else{
        res.json({message : 'Unable to save record'}).status(400);
    }
})


app.listen(PORT, () => console.log(`Running code on port ${PORT}`));