function mustBeInteger(req, res, next) {
  const id = req.params.id;
  if (!Number.isInteger(parseInt(id))) {
    res.status(400).json({ message: 'ID must be an integer' });
  } else {
    next();
  }
}
function checkFieldsTask(req, res, next) {
  const { title, done } = req.body;
  if (title && done) {
    next();
  } else {
    res.status(400).json({ message: 'fields are not good' });
  }
}
module.exports = {
  mustBeInteger,
  checkFieldsTask,
};
