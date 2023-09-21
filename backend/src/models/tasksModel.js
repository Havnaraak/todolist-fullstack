const connection = require("./connection");

const getAll = async () => {
    const [tasks] = await connection.execute("Select * from tasks");
    return tasks;
};

const createTask =  async (task) => {
    const { title } = task;
    
    const dateUtc = new Date(Date.now()).toUTCString();

    const [createdTask] = await connection.execute(
        "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)", 
        [title, "pendente", dateUtc]
    );

    return {insertId: createdTask[0].insertId};
};

const deleteTask = async (id) => {

    const [deletedTask] = await connection.execute(
        "Delete From tasks Where Id = ?", 
        [id]
    );
    return deletedTask;
};

const updateTask = async(id, task) => {
    const { title, status } = task;

    const [updatedTask] = await connection.execute(
        "Update tasks set title = ?, status = ? Where id = ?",
        [title, status, id]
    );

    return updatedTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};