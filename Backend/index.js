const oracledb = require("oracledb");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

app.use(bodyParser.json());

let clientOpts = {};
if (process.platform === 'win32') {
  // Windows
  // If you use backslashes in the libDir string, you will
  // need to double them.
  clientOpts = { libDir: '..\\instantclient_21_13' };
} else if (process.platform === 'darwin' && process.arch === 'x64') {
  // macOS Intel
  clientOpts = { libDir: '../instantclient_21_13' };
}
// else on other platforms like Linux the system library search path MUST always be
// set before Node.js is started, for example with ldconfig or LD_LIBRARY_PATH.

// enable node-oracledb Thick mode
oracledb.initOracleClient(clientOpts);

const dbConfig = {
  user: "admin",
  password: "CapeTownRox28!",
  connectString:
    "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.us-ashburn-1.oraclecloud.com))(connect_data=(service_name=g919c578ac880c3_j1r684plpz959lmg_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))",
  connectString: "j1r684plpz959lmg_high",
};

const data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// test to fetch data
app.get("/api/data", (req, res) => {
  res.json(data);
});

//test
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.json({ rows: ["stuff", "more stuff"] });
  console.log("sent");
});

app.get("/student/projects", (req, res) => {
  async function fun() {
    let con;

    try {
      con = await oracledb.getConnection(dbConfig);
      const data = await con.execute("SELECT * FROM project");

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

app.get("/advisor/projects", (req, res) => {
  async function fun() {
    let con;

    try {
      con = await oracledb.getConnection(dbConfig);
      const data = await con.execute("SELECT * FROM project");

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


app.get("/check/has", (req, res) => {
  async function fun() {
    let con;

    try {
      con = await oracledb.getConnection(dbConfig);

      console.log(req);

      const { UFID, EMAIL, NAME, ROLE, TEAMID, PID } = req.body;

      // Bind parameters for the SQL statement
      const binds = {
        ufID: UFID,
        email: EMAIL,
        studentName: NAME,
        role: ROLE,
        teamID: TEAMID,
        pid: PID
      };

      console.log(binds);


      // Bind parameters for the SQL statement


      const sql =   `SELECT COUNT(1)
                    FROM student
                    WHERE email = ${EMAIL}`;

      // Execute the SQL statement
      const data = await con.execute(sql, { autoCommit: true });

      console.log("Data received successfully:", result);
      con.close();
      console.log(data.rows)
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



app.post("/student/create", (req, res) => {
  async function fun() {
    let con;

    //console.log(res);
    console.log(req.body);

    try {
      con = await oracledb.getConnection(dbConfig);

      const sql = `INSERT INTO student (ufID, email, studentName, role, teamID, pid) VALUES (:ufID, :email, :studentName, :role, :teamID, :pid)`;

      const { UFID, EMAIL, NAME, ROLE, TEAMID, PID } = req.body;

      // Bind parameters for the SQL statement
      const binds = {
        ufID: UFID,
        email: EMAIL,
        studentName: NAME,
        role: ROLE,
        teamID: TEAMID,
        pid: PID
      };

      console.log(binds);

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
