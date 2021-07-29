"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.listen(3334, function () {
    app.get('/', function (request, response) {
        return response.json({ message: 'Hello word, I´m not dead!' });
    });
    console.log('This server started in port 3333!');
});
