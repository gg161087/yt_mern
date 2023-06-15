import { pool } from '../database/db.js';

const getTasks = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM tasks ORDER BY createdAt ASC');    
        res.json(result);        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    };
};

const getTask = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', id);    
        if (result.length === 0) return res.status(404).json({ message: "Task not found."});   
        res.json(result[0]);         
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    };
};

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const [result] = await pool.query('INSERT INTO tasks(title, description) VALUES (?, ?)', [
            title,
            description
        ]);
        if (result.affectedRows) {
            res.json({
                message: "Task create success",
                id: result.insertId
            });
        };       
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    };
};

const updateTask = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const task = req.body;    
        const [result] = await pool.query('UPDATE tasks SET ? WHERE id = ?', [task, id]);    
        if (result.affectedRows === 0) return res.status(404).json({ message: "Task not found."});   
        res.json({ message: "Task updated",});     
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', id);    
        if (result.affectedRows === 0) return res.status(404).json({ message: "Task not found."});   
        res.json({ message: "Task removed."});        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

export {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}