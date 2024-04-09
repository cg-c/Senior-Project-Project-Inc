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
  connectString: "j1r684plpz959lmg_high",
};


// #region tests
const data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// test to send data in JSON
app.get("/api/data", (req, res) => {
  res.json(data);
});

//test to send data
app.get("/", (req, res) => {
  res.send("Hello World");
});

//test to send data oracle style 
app.get("/api", (req, res) => {
  res.json({ rows: ["stuff", "more stuff"] });
  console.log("sent");
});

// #endregion


//gets all student projects
app.get("/student/projects", (req, res) => {
  async function fun() {
    let con;

    try {

      //connects to database
      con = await oracledb.getConnection(dbConfig);

      // execute sql statment
      const data = await con.execute(`SELECT project.NAME , PID ,
                                      CID ,
                                      CAPACITY ,
                                      FILLED ,
                                      DESCINPUT ,
                                      PASS,
                                      CURSOR(SELECT name
                                      FROM type
                                      where project.PID = type.PID) as type,
                                      CURSOR(SELECT name
                                      FROM language
                                      where project.PID = language.PID) as language
                                      FROM project`);

      // log data to console for debugging
      console.dir(data.rows, {depth: null}); 
      con.close();

      //send data to front end
      return data.rows;
    } catch (err) {
      console.error(err);
      return err;
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

//get all advisor projects
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
      return err;
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

//get all languages
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
      return err;
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

//check if student exists already 
app.post("/check/has", (req, res) => {
  async function fun() {
    let con;

    console.log("check has");
    console.log(req.body);

          const {email} = req.body;


    try {
      con = await oracledb.getConnection(dbConfig);


      const sql =     `SELECT *
                      FROM student s
                      FULL OUTER JOIN advisor a
                      ON s.email = a.email
                      Where a.email = \'${email}\' OR s.email = \'${email}\'`;

      // Execute the SQL statement
      const data = await con.execute(sql);

      console.log("Data received successfully:", data.rows);
      con.close();
      console.log(data.rows)
      console.log(data.rows.length)
      return data.rows;
    } catch (err) {
      console.error(err);
      return err;
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


//test add to database
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
      return err;
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


//create student
app.post("/student/create", (req, res) => {
  async function fun() {
    let con;

    //console.log(res);
    console.log(req.body);

    try {
      con = await oracledb.getConnection(dbConfig);

      const sql = `INSERT INTO student (ufID, email, studentName, pid) VALUES (:ufID, :email, :studentName, :pid)`;

      const { PID, NAME, UFID, EMAIL } = req.body;

      // Bind parameters for the SQL statement
      const binds = {
        ufID: UFID,
        email: EMAIL,
        studentName: NAME,
        pid: PID
      };

      console.log(binds);

      // Execute the SQL statement
      const result = await con.execute(sql, binds, { autoCommit: true });

      console.log("Data inserted successfully:", result);
      con.close();
    } catch (err) {
      console.error(err);
      return err;
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

//create advisor
app.post("/advisor/create", (req, res) => {
  async function fun() {
    let con;

    //console.log(res);
    console.log(req.body);

    try {
      con = await oracledb.getConnection(dbConfig);

      const sql = `INSERT INTO advisor (name, aID, email) VALUES (:name, :aID, :email)`;

      const { PID, NAME, UFID, EMAIL } = req.body;

      // Bind parameters for the SQL statement
      const binds = {
        email: EMAIL,
        name: NAME,
        aID: 'aIDSeq.nextVal',
      };

      console.log(binds);

      // Execute the SQL statement
      const result = await con.execute(sql, binds, { autoCommit: true });

      console.log("Data inserted successfully:", result);
      con.close();
    } catch (err) {
      console.error(err);
      return err;
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

// create student project
app.post("/student/create/project", (req, res) => {
  async function fun() {
    let con;

    //console.log(res);
    console.log(req.body);

    try {
      con = await oracledb.getConnection(dbConfig);

      const {NAME, CAPACITY, DESCINPUT, PASS, EMAIL, LANG} = req.body;

      const sql = `insert into project(NAME , PID , CID , CAPACITY , FILLED , DESCINPUT , PASS) 
                    values(:name, :pid , :cid , :capacity , :filled , :descinput , :pass)RETURNING aID INTO outPID`;

      const creatorSQL = `SELECT UFID
                          FROM student
                          WHERE email = '${EMAIL}'`;


      //const getUFID = await con.execute(sql);

      // Bind parameters for the SQL statement
      const binds = {
        name: NAME, 
        pid: 'pIDSEQ.nextVal' , 
        cid: getUFID.rows.UFID , 
        capacity: CAPACITY , 
        filled: 0, 
        descinput: DESCINPUT , 
        pass: PASS,
        outPID: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
      };

      //console.log(binds);

      // Execute the SQL statement
      //const result = await con.execute(sql, binds, { autoCommit: true });
      async function submitLang(item) {
        const langSQL = `INSERT INTO language (name, pid) VALUES (${outPID}, ${item.value})`;
        const getUFID = await con.execute(sql);
      }

      LANG.map(item)

      
      con.execute();
      console.log("Data inserted successfully:", result);
      con.close();
    } catch (err) {
      console.error(err);
      return err;
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

//adds students to project
app.post("/student/join/project", (req, res) => {
  async function fun() {
    let con;
    console.log(req.body);

    const {email, pID} = req.body;

    try {
      con = await oracledb.getConnection(dbConfig);

      const sql = `UPDATE student
                    SET pID = ${pID}
                    where email = '${email}'`;

      const data = await con.execute(sql);
      con.commit();

      console.dir(data.rows, {depth: null});
      con.close();
      return data.rows;
    } catch (err) {
      console.error(err);
      return err;
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

//gets students team
app.post("/team", (req, res) => {
  async function fun() {
    let con;
    console.log(req.body);

    const {email} = req.body;

    try {
      con = await oracledb.getConnection(dbConfig);

      const sql = `SELECT b.studentName, b.email
                    FROM student a, student b
                    WHERE a.email = '${email}'
                    AND a.pID = b.pID`;

      const data = await con.execute(sql);


      console.dir(data.rows, {depth: null});
      con.close();
      return data.rows;
    } catch (err) {
      console.error(err);
      return err;
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

// leave team
app.post("/team/leave", (req, res) => {
  async function fun() {
    let con;
    console.log(req.body);

    const {email} = req.body;

    try {
      con = await oracledb.getConnection(dbConfig);

      const sql = `UPDATE student
                    SET pID = null
                    WHERE email = '${email}'`;

      const data = await con.execute(sql);
      con.commit();

      console.log(data);
      console.dir(data.rows, {depth: null});
      con.close();
    } catch (err) {
      console.error(err);
      return err;
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
