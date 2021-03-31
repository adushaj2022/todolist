"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
require("reflect-metadata");
const dotenv = __importStar(require("dotenv-safe"));
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const todo_routes_1 = __importDefault(require("./routes/todo.routes"));
const cors_1 = __importDefault(require("cors"));
const ToDo_1 = require("./Entities/ToDo");
dotenv.config({
    allowEmptyValues: true,
    example: "./.env",
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    //middlewares
    app.use(express_1.default.json());
    app.use(cors_1.default());
    const port = process.env.PORT || 5000;
    const connection = yield typeorm_1.createConnection({
        type: "postgres",
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: "typedo",
        logging: true,
        host: process.env.HOST,
        synchronize: true,
        port: process.env.DATABASE_PORT,
        entities: [ToDo_1.ToDo],
    });
    if (connection.isConnected) {
        console.log("Connected to Postgres");
    }
    //routes
    app.use("/", todo_routes_1.default);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
main().catch((err) => {
    console.log(err);
});
