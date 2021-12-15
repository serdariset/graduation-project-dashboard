const express = require("express");
const router = express.Router();
const client = require("../database");

router.post(
  "/factory-info",

  async (req, res) => {
    const { name, type } = req.body;
    let orderType;
    let sql;

    if (name || type == undefined) {
      sql = "SELECT * FROM info";
    }
    if (name !== undefined) {
      if (type == false) {
        orderType = "DESC";
      } else if (type == true) {
        orderType = "ASC";
      }
      sql = `SELECT * FROM info ORDER BY ${name} ${orderType}`;
    }
    try {
      client.query(sql, (err, result) => {
          
        res
          .status(200)
          .json(result.rows);
      });
    } catch (e) {
      console.log(e);
    }
  }
);
router.get(
  "/column",

  async (req, res) => {
    try {
      client.query("SELECT * FROM info WHERE false", (err, result) => {
        res.status(200).json({
          name: result.fields.map((item) => item.name),
          type: result.fields.map((item) => item.format),
        });
      });
    } catch (e) {
      res.status(400).json(e);
    }
  }
);

router.delete(
  "/delete",

  async (req, res) => {
    const { factory_id } = req.body;

    const sql = "DELETE FROM info WHERE factory_id = $1";
    try {
      client.query(sql, [factory_id], (err, success) => {
        if (!err) {
          res.status(200).json({
            status: true,
            name: factory_id,
          });
        }
      });
    } catch (e) {
      res.status(400).send(e);
    }
  }
);

router.post(
  "/create-column",

  async (req, res) => {
    const { columnName, dataType } = req.body;
    const sql = `ALTER TABLE info ADD COLUMN ${columnName} ${dataType}`;
    try {
      client.query(sql, (err, result) => {
        if (!err) {
          res.status(201).send(result);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
);
router.post(
  "/create-row",

  async (req, res) => {
    let cols = [];
    let rows = [];
    let query = "";
    const { keys } = req.body;
    keys.map((item) => {
      if (Object.keys(item) == "key") {
        cols.push(Object.values(item));
      } else if (Object.keys(item) == "values") {
        rows.push(Object.values(item));
      }
    });
    for (let i = 0; i < cols.length; i++) {
      if (i == cols.length - 1) {
        query += `$${i + 1}`;
      } else {
        query += `$${i + 1}, `;
      }
    }
    let values = [];
    let row = "";
    for (let i = 0; i < rows.length; i++) {
      values.push(rows[i][0]);
    }
    for (let i = 0; i < rows.length; i++) {
      if (i == cols.length - 1) {
        row += cols[i][0];
      } else {
        row += cols[i][0] + ", ";
      }
    }

    const sql = `INSERT INTO info (${row}) VALUES (${query})`;

    try {
      client.query(sql, values, (err, result) => {
        if (!err) {
          res.status(201).send(result);
        } else {
          console.log(err);
        }
      });
    } catch (e) {
      res.status(400).send(e);
      console.log(e);
    }
  }
);

router.post(
  "/delete-column",

  async (req, res) => {
    const { name } = req.body;
    const sql = `ALTER TABLE info DROP COLUMN ${name}`;
    try {
      client.query(sql, (err, result) => {
        if (!err) {
          res.status(201).send(result);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
);

router.post(
  "/update",

  async (req, res) => {
    let cols = [];
    let rows = [];
    let query = "";
    const { keys } = req.body;
    keys.map((item) => {
      if (Object.keys(item) == "key") {
        cols.push(Object.values(item));
      } else if (Object.keys(item) == "values") {
        rows.push(Object.values(item));
      }
    });
    for (let i = 0; i < cols.length; i++) {
      if (i == cols.length - 1) {
        query += `${cols[i]}=$${i + 2}`;
      } else {
        query += `${cols[i]}=$${i + 2}, `;
      }
    }
    let values = [];

    for (let i = 0; i < rows.length; i++) {
      values.push(rows[i][0]);
    }

    const sql = `UPDATE info SET ${query} WHERE factory_id = $1`;

    try {
      client.query(sql, values, (err, result) => {
        if (!err) {
          res.status(201).send(result);
        } else {
          console.log(err);
        }
      });
    } catch (e) {
      res.status(400).send(e);
      console.log(e);
    }
  }
);

module.exports = router;
