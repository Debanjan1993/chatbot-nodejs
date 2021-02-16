import { Model, model, Schema, Document } from "mongoose"

const personSchema: Schema = new Schema({
    name: { type: String },
    email: { type: String }
});

export interface person extends Document {
    name: string,
    email: string,
}

const personModel: Model<person> = model<person>('Person', personSchema);

export default personModel