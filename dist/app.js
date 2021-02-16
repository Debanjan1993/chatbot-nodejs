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
    const obj = req.body.queryResult.parameters;
    const isSuccess = yield dbOperations_1.default(obj);
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
        });
    }
    else {
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
        });
    }
}));
app.post('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    });
}));
app.listen(PORT, () => console.log(`Running code on port ${PORT}`));
