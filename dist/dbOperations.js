"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = __importDefault(require("./schema"));
mongoose_1.default.connect('mongodb://localhost:27017/chatBot', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose_1.default.connection.on('connected', () => console.log('Connected'));
mongoose_1.default.connection.on('error', (err) => console.log(`Connection failed with - ${err}`));
const db = mongoose_1.default.connection;
const saveToDb = (personObj) => __awaiter(void 0, void 0, void 0, function* () {
    schema_1.default.create(personObj).then(person => {
        console.log(`Person ${person.name} Information is added`);
    }).catch(err => {
        console.error(err);
        return false;
    });
    return true;
});
exports.default = saveToDb;
