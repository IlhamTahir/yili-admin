const curdGenerator = require("./templates/curd/index.js");
module.exports = function (plop) {
  plop.setGenerator("curd", curdGenerator);
};
