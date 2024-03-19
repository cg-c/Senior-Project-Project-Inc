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

app.get('/api', (req, res) => {
    res.json({"rows": ["stuff", "more stuff"]})
})

app.get('/data', (req,res) => {
    async function fun() {
        let con;

        try {
            con = await oracledb.getConnection(dbConfig);
            const data = await con.execute(
                'SELECT * FROM language',
                [], // Bind parameters if any
                { outFormat: oracledb.OUT_FORMAT_ARRAY }
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
                name: 'C#',
            };

            // Execute the SQL statement
            const result = await con.execute(sql, binds, { autoCommit: true });

        console.log('Data inserted successfully:', result);
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

app.get('/numInj', (req,res) => {
    async function fun() {
        let con;

        try {
            con = await oracledb.getConnection( {
                user            : "maingotj",
                password        : "u6YTCbyTwmfJ0vMH3WClZDWh",
                connectString   : "oracle.cise.ufl.edu/orcl"
            });
            const data = await con.execute(
                `SELECT Month,TO_CHAR(TO_DATE(Month, 'MM'), 'MONTH') AS mon, Total_Crashes AS he FROM(
                SELECT EXTRACT(MONTH FROM CI.CRASHDATE) AS Month, PI.TYPEOFPERSON, COUNT(CI.CID) AS Total_Crashes
                FROM Keruiliu.Crash_Info CI
                JOIN Keruiliu.People_Info PI ON CI.CID = PI.CID
                WHERE EXTRACT(YEAR FROM CI.CRASHDATE) = 2018
                AND PI.TYPEOFPERSON = 'D - DRIVER'
                GROUP BY EXTRACT(MONTH FROM CI.CRASHDATE), PI.TYPEOFPERSON
                ORDER BY Month)`,
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

app.get('/women', (req,res) => {
    async function fun() {
        let con;

        try {
            con = await oracledb.getConnection( {
                user            : "maingotj",
                password        : "u6YTCbyTwmfJ0vMH3WClZDWh",
                connectString   : "oracle.cise.ufl.edu/orcl"
            });
            const data = await con.execute(
                `SELECT Month,TO_CHAR(TO_DATE(Month, 'MM'), 'MONTH') AS MON, Total_Crashes FROM (SELECT EXTRACT(MONTH FROM CI.CRASHDATE) AS Month, COUNT(CI.CID) AS Total_Crashes
                FROM Keruiliu.Crash_Info CI
                JOIN Keruiliu.Road_Conditions RC ON CI.CID = RC.CID
                WHERE EXTRACT(YEAR FROM CI.CRASHDATE) = 2015 AND RC.ROADCONTOUR = '1 - STRAIGHT LEVEL'
                GROUP BY EXTRACT(MONTH FROM CI.CRASHDATE)
                ORDER BY Month)`,
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

app.get('/sports', (req,res) => {
    async function fun() {
        let con;

        try {
            con = await oracledb.getConnection( {
                user            : "maingotj",
                password        : "u6YTCbyTwmfJ0vMH3WClZDWh",
                connectString   : "oracle.cise.ufl.edu/orcl"
            });
            const data = await con.execute(
                `SELECT Month,TO_CHAR(TO_DATE(Month, 'MM'), 'MONTH') AS MON, Total_Crashes FROM (SELECT EXTRACT(MONTH FROM CI.CRASHDATE) AS Month, COUNT(CI.CID) AS Total_Crashes
                FROM Keruiliu.Crash_Info CI
                JOIN Keruiliu.People_Info PI ON CI.CID = PI.CID
                WHERE PI.UNITTYPE LIKE '06%'
                AND EXTRACT(YEAR FROM CI.CRASHDATE) = 2015
                GROUP BY EXTRACT(MONTH FROM CI.CRASHDATE)
                ORDER BY Month)`,
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

app.get('/inter', (req,res) => {
    async function fun() {
        let con;

        try {
            con = await oracledb.getConnection( {
                user            : "maingotj",
                password        : "u6YTCbyTwmfJ0vMH3WClZDWh",
                connectString   : "oracle.cise.ufl.edu/orcl"
            });
            const data = await con.execute(
                `SELECT Month,TO_CHAR(TO_DATE(Month, 'MM'), 'MONTH') AS MON, Total_Crashes FROM (SELECT EXTRACT(MONTH FROM CRASHDATE) AS Month, COUNT(CID) AS Total_Crashes
                FROM Keruiliu.Crash_Info
                WHERE EXTRACT(YEAR FROM CRASHDATE) = 2015 AND CRASHLOCATION LIKE '01 - NOT AN INTERSECTION'
                GROUP BY EXTRACT(MONTH FROM CRASHDATE)
                ORDER BY Month)`,
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

app.get('/wend', (req,res) => {
    async function fun() {
        let con;

        try {
            con = await oracledb.getConnection( {
                user            : "maingotj",
                password        : "u6YTCbyTwmfJ0vMH3WClZDWh",
                connectString   : "oracle.cise.ufl.edu/orcl"
            });
            const data = await con.execute(
                `SELECT Month,TO_CHAR(TO_DATE(Month, 'MM'), 'MONTH') AS MON, WEEKEND_AVG FROM (
                    SELECT 
                        TO_CHAR(CRASHDATE, 'MM') AS MONTH, 
                        COUNT(*) / 4 AS WEEKEND_AVG
                    FROM 
                        Keruiliu.CRASH_INFO
                    WHERE 
                        TO_CHAR(CRASHDATE, 'YYYY') = '2015' 
                        AND TO_CHAR(CRASHDATE, 'D') IN ('1', '7')
                    GROUP BY 
                        TO_CHAR(CRASHDATE, 'MM')
                    ORDER BY 
                        TO_CHAR(CRASHDATE, 'MM'))`,
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

app.get('/young', (req,res) => {
    async function fun() {
        let con;

        try {
            con = await oracledb.getConnection( {
                user            : "maingotj",
                password        : "u6YTCbyTwmfJ0vMH3WClZDWh",
                connectString   : "oracle.cise.ufl.edu/orcl"
            });
            const data = await con.execute(
                `SELECT Month,TO_CHAR(TO_DATE(Month, 'MM'), 'MONTH') AS MON, NUM_ACCIDENTS FROM (SELECT TO_CHAR(CRASHDATE, 'MM') AS MONTH,
                COUNT(*) AS NUM_ACCIDENTS
                FROM keruiliu.Crash_Info CI
                INNER JOIN keruiliu.People_Info PI
                ON CI.CID = PI.CID
                WHERE PI.AGE = '18-25'
                AND CI.DAYOFWEEK IN ('SAT', 'SUN')
                AND EXTRACT(YEAR FROM CRASHDATE) = 2020
                GROUP BY TO_CHAR(CRASHDATE, 'MM')
                ORDER BY TO_CHAR(CRASHDATE, 'MM'))
                `,
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

app.listen(PORT,
    () => {
        console.log(`listen to port ${PORT}`);
    })

