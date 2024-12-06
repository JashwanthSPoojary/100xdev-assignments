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
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const pgCLient = new pg_1.Client("postgresql://neondb_owner:YNg8DABvZ6dC@ep-small-sky-a5ko4nqk.us-east-2.aws.neon.tech/neondb?sslmode=require");
app.use(express_1.default.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    try {
        const insertQuery = "select u.username,u.password,a.address from users u join address a on u.id=a.userId where u.id=$1 ";
        const response = yield pgCLient.query(insertQuery, [id]);
        res.json({
            message: "success",
            res: response.rows,
        });
    }
    catch (error) {
        res.json({
            message: "error",
            err: error,
        });
    }
}));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgCLient.connect();
    });
}
main();
app.listen(3000);
