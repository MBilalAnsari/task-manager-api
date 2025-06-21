import { validationResult } from "express-validator";

let tasks = [];
let idCounter = 1;

export const createTask = (req, res) => {

    const { title, description } = req.body;

    const errors = validationResult(req)
    
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });


    const newTask = {
        id: idCounter++,
        title,
        description: description || ''
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};

export const getAllTasks = (req, res) => {
    res.status(200).json(tasks);
};
