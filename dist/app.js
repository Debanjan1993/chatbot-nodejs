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
const express_1 = __importDefault(require("express"));
const dbOperations_1 = __importDefault(require("./dbOperations"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const PORT = process.env.PORT || 5600;
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('hello');
});
app.post('/addPerson', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const isSuccess = yield dbOperations_1.default(req.body);
    if (isSuccess) {
        res.json({ message: 'Record saved successfully' }).status(201);
    }
    else {
        res.json({ message: 'Unable to save record' }).status(400);
    }
}));
app.listen(PORT, () => console.log(`Running code on port ${PORT}`));
