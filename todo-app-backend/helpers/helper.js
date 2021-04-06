const fs = require('fs');
const path = require('path');
const getNewId = (array) => {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  } else {
    return 1;
  }
};

function mustBeInArray(array, id) {
  return new Promise((resolve, reject) => {
    const row = array.find((r) => r.id == id);
    if (!row) {
      reject({
        message: 'ID is not good',
        status: 404,
      });
    }
    resolve(row);
  });
}

//Getting a random value from two JavaScript arrays
function randomValue() {
  const actionList = [
    'Prepare',
    'Write',
    'Create',
    'Schedule',
    'Read',
    'Skip',
    'Find',
  ];
  const objectList = [
    'the manual',
    'the pitch',
    'the slides',
    'the exercice',
    'the demo',
    'the letter',
  ];
  const randomElement1 =
    actionList[Math.floor(Math.random() * actionList.length)];

  const randomElement2 =
    objectList[Math.floor(Math.random() * objectList.length)];

  return randomElement1 + ' ' + randomElement2;
}

function writeJSONFile(filename, content) {
  fs.writeFileSync(
    path.resolve(__dirname, filename),
    JSON.stringify(content, null, 2),
    'utf8',
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
}
module.exports = {
  getNewId,
  randomValue,
  mustBeInArray,
  writeJSONFile,
};
