const express = require("express");
const conn = require("./db");

const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public", { extensions: ["html", "htm"] }));

// api calls
/**
 *
 * login route
 */
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  conn.query(
    "SELECT * FROM user_tbl WHERE username = ?  AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send("1");
        throw err;
      } else {
        if (result.length > 0) {
          res.send(res[0]);
        } else {
          res.send("3");
        }
      }
    }
  );
});

/**
 *
 * register route
 */
app.post("/api/register", (req, res) => {
  const { first_name, last_name, password, username } = req.body;
  let insert_obj = { first_name, last_name, password, username };
  conn.query(
    "SELECT * FROM user_tbl WHERE username = ?",
    username,
    (err, result) => {
      if (err) {
        res.send("Error");
        throw err;
      } else {
        if (result.length > 0) {
          res.send("1");
        } else {
          conn.query(
            "INSERT INTO user_tbl SET ?",
            insert_obj,
            (error, insert_res) => {
              if (error) {
                res.send("Error");
                throw error;
              } else {
                res.send("2");
              }
            }
          );
        }
      }
    }
  );
});
// api calls

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}......`);
});
