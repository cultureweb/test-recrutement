const filename = '../data/tasks.json';
let tasks = require(filename);
const helper = require('../helpers/helper.js');

function getTasks() {
  return new Promise((resolve, reject) => {
    if (tasks.length === 0) {
      reject({
        message: 'no tasks available',
        status: 202,
      });
    }
    resolve(tasks);
  });
}
function generateTask() {
  return new Promise((resolve, reject) => {
    const id = { id: helper.getNewId(tasks) };
    const newTask = {
      id: id.id,
      title: helper.randomValue(),
      done: false,
      doneAt: null,
    };
    tasks.push(newTask);
    helper.writeJSONFile(filename, tasks);
    resolve(newTask);
  });
}

function getTask(id) {}
function insertTask(newTask) {}
function updateTask(id, newTask) {}
function deleteTask(id) {}
module.exports = {
  insertTask,
  generateTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
};
