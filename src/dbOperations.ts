import mongoose from 'mongoose'
import personModel from './schema'


mongoose.connect('mongodb://localhost:27017/chatBot', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', (err) => console.log(`Connection failed with - ${err}`));

const db = mongoose.connection;

const saveToDb = async (personObj: any): Promise<Boolean> => {
    personModel.create(personObj).then(person => {
        console.log(`Person ${person.name} Information is added`);
        db.close();
    }).catch(err => {
        console.error(err);
        return false;
    });
    return true;
}

export default saveToDb;