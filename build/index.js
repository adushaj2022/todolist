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
const typeorm_1 = require("typeorm");
const Student_1 = require("./Entities/Student");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    const port = process.env.PORT || 4000;
    const connection = yield typeorm_1.createConnection({
        type: "postgres",
        username: "postgres",
        password: "4512",
        database: "School",
        logging: true,
        host: "127.0.0.1",
        synchronize: true,
        port: 5432,
        entities: [Student_1.Student],
    });
    if (connection.isConnected) {
        console.log("Connected to Postgres");
    }
    app.get("/", (req, res) => {
        res.status(200).send("hi");
    });
    app.listen(4000, () => {
        console.log(`Server is running on port ${port}`);
    });
});
main().catch((err) => {
    console.log(err);
});
