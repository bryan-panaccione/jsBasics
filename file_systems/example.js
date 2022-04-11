var pdf2table = require("pdf2table");
var fs = require("fs");

fs.readFile("./266.pdf", function (err, buffer) {
  if (err) return console.log(err);

  pdf2table.parse(buffer, function (err, rows, rowsdebug) {
    if (err) return console.log(err);
    fs.writeFile("./housingData.json", JSON.stringify(rows), (err, x) => {
      if (err) throw err;
    });
    console.log(rows);
  });
});
