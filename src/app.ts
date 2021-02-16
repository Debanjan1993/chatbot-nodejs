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
    const obj = req.body.queryResult.parameters;
    const isSuccess = await saveToDb(obj);
    if(isSuccess){
        res.send({
          "fulfillmentMessages": [
            {
              "text": {
                "text": [
                  "Thank you for leaving your information debanjan will really appreciate it"
                ]
              }
            }
          ]
        })
    }else{
      res.send({
        "fulfillmentMessages": [
          {
            "text": {
              "text": [
                "Unable to send your details to debanjan"
              ]
            }
          }
        ]
      })
    }
})

app.post('/test', async(req,res)=>{
    console.log(req.body.queryResult.parameters);
    res.send({
        "fulfillmentMessages": [
          {
            "text": {
              "text": [
                "Thank you for leaving your information debanjan will really appreciate it"
              ]
            }
          }
        ]
      })
})


app.listen(PORT, () => console.log(`Running code on port ${PORT}`));