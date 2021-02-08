"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const personSchema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String },
    phoneNumber: { type: Number },
    message: { type: String },
    uniqueID: { type: Number }
});
const personModel = mongoose_1.model('Person', personSchema);
exports.default = personModel;
