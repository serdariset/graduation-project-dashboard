const express = require("express");
const router = express.Router();
const client = require("../database");

router.get(
  "/list",

  async (req, res) => {
    try {
      console.log("geldi");
      client.query("SELECT * FROM list", (err, result) => {
        res.status(200).json(result.rows);
      });
    } catch (e) {
      console.log(e);
    }
  }
);

router.delete(
  "/delete",

  async (req, res) => {
    const { factory_id } = req.body;

    const sql = "DELETE FROM list WHERE factory_id = $1";
    try {
      console.log(factory_id);

      client.query(sql, [factory_id], (err, success) => {
        if (!err) {
          res.status(200).json({
            status: true,
            id: factory_id,
          });
        }
      });
    } catch (e) {
      res.status(400).send(e);
    }
  }
);

module.exports = router;
