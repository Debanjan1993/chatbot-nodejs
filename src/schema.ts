import { Model, model, Schema, Document } from "mongoose"

const personSchema: Schema = new Schema({
    name: { type: String },
    email: { type: String },
    phoneNumber: { type: Number },
    message: { type: String },
    uniqueID : {type : Number}
});

export interface person extends Document {
    name: string,
    email: string,
    phoneNumber: string,
    message: string,
    uniqueID : number
}

const personModel: Model<person> = model<person>('Person', personSchema);

export default personModel