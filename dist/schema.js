"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const personSchema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String }
});
const personModel = mongoose_1.model('Person', personSchema);
exports.default = personModel;
