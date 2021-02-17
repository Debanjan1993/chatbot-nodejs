import express from 'express';
import saveToDb from './dbOperations';
import bodyParser from 'body-parser'
import config from 'config';

const app = express();
const PORT = process.env.PORT || 5600;

const username = config.get('username');
const pass = config.get('password');


function auth(req: express.Request, res: express.Response, next: any) {
  const b64auth = req.headers.authorization ? req.headers.authorization.split(' ')[1] : '';
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

  if(login && password && login === username && password === pass){
    return next();
  }
  else{
    console.log('Authentication failed');
    res.status(401).send('Authentication failed');
  }

}

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/addPerson', auth, async (req, res) => {
  const obj = req.body.queryResult.parameters;
  const isSuccess = await saveToDb(obj);
  if (isSuccess) {
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
  } else {
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

app.post('/test', async (req, res) => {
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