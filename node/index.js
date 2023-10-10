var http = require("http");
var { add, sub } = require("./math");
var fs = require("fs");
var url = require("url");
var mysql = require("mysql2");
let PORT = 8080;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin@123",
  database: "management",
});
con.connect((err, res, result) => {
  if (err) {
    console.error("Error connecting to the MySQL server:", err);
    return;
  }
  console.log("Connected to MySQL server");

  try {
    con.query("CREATE DATABASE IF NOT EXISTS management", (err, result) => {
      if (err) throw err;
      console.log("Database Created");
    });
  } catch (err) {
    throw err;
  }
});

// let server = http.createServer(function (req, res) {
//   let q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   console.log(q);

//   fs.readFile(filename, function (err, data) {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       return res.end("404 Not Found");
//     }
//     res.writeHead(200, { "Content-Type": "text/html" });
//     // res.write(req.url);
//     res.write("Hello World!");
//     res.write(data);
//     return res.end();
//   });
// });

// fs.writeFile("myfile.txt", "Hello World", function (err) {
//   if (err) throw err;
// });

// let res = add(2, 63);
// console.log(res);
// let res1 = sub(100, 45);
// console.log(res1);

// server.listen(PORT, () => {
//   console.log("server is running on port " + " " + PORT);
// });
