const express = require("express");
const conn = require("./db");

const app = express();

const PORT = process.env.PORT || 4002;

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
          res.send(result);
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

/**
 *
 * new book route
 */
app.post("/api/books/new", (req, res) => {
  conn.query("INSERT INTO books_tbl SET ?", req.body, (err, result) => {
    if (err) {
      res.send("1");
      throw err;
    } else {
      res.send("Ok");
    }
  });
});

/**
 *
 * get recent books
 */

app.get("/api/books/all", (req, res) => {
  conn.query("SELECT * FROM books_tbl", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

/**
 *
 * search catalog
 */
app.get("/api/books/search/:search", (req, res) => {
  conn.query(
    `SELECT * FROM books_tbl WHERE book_title LIKE '%${req.params.search}%'`,
    (err, result) => {
      if (err) {
        res.send([]);
        throw err;
      } else {
        res.send(result);
      }
    }
  );
});

/**
 *
 * search catalog
 */
app.get("/api/books/:id", (req, res) => {
  conn.query(
    `SELECT * FROM books_tbl WHERE book_id = ?`,
    req.params.id,
    (err, result) => {
      console.log(result);
      if (err) {
        res.send([]);
        throw err;
      } else {
        res.send(result);
      }
    }
  );
});

/**
 *
 * new give away
 *
 */

app.post("/api/books/give_away", (req, res) => {
  conn.query("INSERT INTO give_away_tbl SET ?", req.body, (err, result) => {
    if (err) {
      res.send("1");
      throw err;
    } else {
      res.send("Ok");
    }
  });
});

/**
 *
 * Borrowed
 */
app.get("/api/books/borrowed", (req, res) => {
  conn.query("SELECT * FROM give_away_tbl", (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/api/users/all", (req, res) => {
  conn.query("SELECT * FROM user_tbl", (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

// api calls

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}......`);
});
