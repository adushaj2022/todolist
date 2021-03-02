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
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove_student = exports.new_student = exports.students = void 0;
const Student_1 = require("../Entities/Student");
const students = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Student_1.Student.find();
    res.status(201).send(data);
});
exports.students = students;
const new_student = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, major } = req.body;
    yield Student_1.Student.insert({
        firstName,
        lastName,
        major,
    });
    res.status(201).send("data inserted");
});
exports.new_student = new_student;
const remove_student = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const student = yield Student_1.Student.findOne({ id });
    if (!student) {
        res.send(200).send({ status: false });
    }
    else {
        yield Student_1.Student.delete({ id });
        res.status(201).send({ status: true });
    }
});
exports.remove_student = remove_student;
