const oracledb = require("oracledb");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

app.use(bodyParser.json());

const dbConfig = {
  user: "admin",
  password: "CapeTownRox28!",
  connectString:
    "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.us-ashburn-1.oraclecloud.com))(connect_data=(service_name=g919c578ac880c3_j1r684plpz959lmg_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))",
};

const data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// Endpoint to fetch data
app.get("/api/data", (req, res) => {
  res.json(data);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.json({ rows: ["stuff", "more stuff"] });
  console.log("sent");
});

app.get("/data", (req, res) => {
  async function fun() {
    let con;

    try {
      con = await oracledb.getConnection(dbConfig);
      const data = await con.execute("SELECT * FROM language");

      console.log(data.rows);
      con.close();
      return data.rows;
    } catch (err) {
      console.error(err);
      return error;
    }
  }
  fun()
    .then((dbRes) => {
      res.send(dbRes);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/count", (req, res) => {
  async function fun() {
    let con;

    try {
      con = await oracledb.getConnection({
        user: "admin",
        password: "CapeTownRox28!",
        connectString:
          "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.us-ashburn-1.oraclecloud.com))(connect_data=(service_name=g919c578ac880c3_j1r684plpz959lmg_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))",
      });

      const sql = `INSERT INTO language (name, pid) VALUES (:name, :pid)`;

      // Bind parameters for the SQL statement
      const binds = {
        pid: 20,
        name: "C#",
      };

      // Execute the SQL statement
      const result = await con.execute(sql, binds, { autoCommit: true });

      console.log("Data inserted successfully:", result);
      con.close();
      return data;
    } catch (err) {
      console.error(err);
      return error;
    }
  }
  fun()
    .then((dbRes) => {
      res.send(dbRes);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/send", (req, res) => {
  async function fun() {
    let con;

    //console.log(res);
    console.log(req.body);

    try {
      con = await oracledb.getConnection(dbConfig);

      const sql = `INSERT INTO language (name, pid) VALUES (:name, :pid)`;

      const { NAME, PID } = req.body;
      console.log("Data:", { NAME, PID });

      // Bind parameters for the SQL statement
      const binds = {
        pid: PID,
        name: NAME,
      };

      // Execute the SQL statement
      const result = await con.execute(sql, binds, { autoCommit: true });

      console.log("Data inserted successfully:", result);
      con.close();
    } catch (err) {
      console.error(err);
      return error;
    }
  }
  fun()
    .then((dbRes) => {
      res.send(dbRes);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`listen to port ${PORT}`);
});
