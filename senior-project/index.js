const oracledb = require('oracledb');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

app.use(cors());

const dbConfig = {
    user            : "admin",
    password        : "CapeTownRox28!",
    connectString   : "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.us-ashburn-1.oraclecloud.com))(connect_data=(service_name=g919c578ac880c3_j1r684plpz959lmg_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))"
           
  };

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/data', (req,res) => {
    async function fun() {
        let con;

        try {
            con = await oracledb.getConnection(dbConfig);
            const data = await con.execute(
                'SELECT * FROM language',
            );
        console.log(data.rows);
        con.close();
        return data;
        } catch(err) {
            console.error(err);
            return error;
        }
    }
    fun()
    .then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err=> {
        res.send(err)
    })
})


app.get('/count', (req,res) => {
    async function fun() {
        let con;

        try {
            con = await oracledb.getConnection( {
                user            : "admin",
                password        : "CapeTownRox28!",
                connectString   : "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.us-ashburn-1.oraclecloud.com))(connect_data=(service_name=g919c578ac880c3_j1r684plpz959lmg_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))"
            });

            const sql = `INSERT INTO language (name, pid) VALUES (:name, :pid)`;

    // Bind parameters for the SQL statement
            const binds = {
                pid: 20,
                name: 'RUST',
            };

            // Execute the SQL statement
            const result = await con.execute(sql, binds, { autoCommit: true });

        console.log('Data inserted successfully:', result);
        console.log(data.rows);
        con.close();
        return data;
        } catch(err) {
            console.error(err);
            return error;
        }
    }
    fun()
    .then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err=> {
        res.send(err)
    })
})

app.listen(PORT,
    () => {
        console.log(`listen to port ${PORT}`);
    })

