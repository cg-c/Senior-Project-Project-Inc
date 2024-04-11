-- gets student projects
SELECT p.NAME NAME,
p.PID PID,
p.CID CID,
p.CAPACITY CAPACITY,
p.FILLED FILLED,
p.DESCINPUT DESCINPUT,
p.PASS PASS,
p.CONTACT CONTACT,
CURSOR(SELECT name
FROM type
where p.pID = type.pID) as type,
CURSOR(SELECT name
FROM language
where p.pID = language.pID) as language
FROM project p
LEFT JOIN student s
ON p.cID = s.UFID
WHERE p.cID = s.UFID
AND capacity != filled
AND final = 0;



-- get advisor projects
SELECT p.NAME NAME,
p.PID PID,
p.CID CID,
p.CAPACITY CAPACITY,
p.FILLED FILLED,
p.DESCINPUT DESCINPUT,
p.PASS PASS,
p.CONTACT CONTACT,
CURSOR(SELECT name
FROM type
where p.pID = type.pID) as type,
CURSOR(SELECT name
FROM language
where p.pID = language.pID) as language
FROM project p
LEFT JOIN aProjects a
ON p.pID = a.pID
WHERE p.pID = a.pID
AND capacity != filled
AND final = 0;



-- check if student or advisor exists
SELECT *
FROM student s
FULL OUTER JOIN advisor a
ON s.email = a.email
Where a.email = \'${email}\' OR s.email = \'${email}\';



-- create student account
INSERT INTO student (ufID, email, studentName, pid) VALUES (:ufID, :email, :studentName, :pid);



-- create advisor account
INSERT INTO advisor (name, aID, email) VALUES (:name, :aID, :email);



-- student creates project
insert into project(NAME , PID , CID , CAPACITY , FILLED , DESCINPUT , PASS, FINAL) 
values(:name, :pid , :cid , :capacity , :filled , :descinput , :pass, 0) RETURNING pID INTO outPID;


SELECT UFID
FROM student
WHERE email = '${EMAIL}';

INSERT INTO language (name, pid) VALUES (${item.value}, ${outPID});

INSERT INTO type values('${TYPE}', ${outPID});



-- advisor create project
insert into project(NAME , PID , CID , CAPACITY , FILLED , DESCINPUT , PASS, FINAL) 
values(:name, :pid , :cid , :capacity , :filled , :descinput , :pass, 0) RETURNING pID INTO outPID;

SELECT aID
FROM advisor
WHERE email = '${EMAIL}';

INSERT INTO language (name, pid) VALUES (${item.value}, ${outPID});

INSERT INTO type values('${TYPE}', ${outPID});



-- add student to proj
UPDATE student
SET pID = ${pID}
where email = '${email}';



-- get students team
SELECT b.studentName, b.email
FROM student a, student b
WHERE a.email = '${email}'
AND a.pID = b.pID;

-- get advisor projects
SELECT b.studentName, b.email, p.name, p.pID
FROM advisor a, student b, aProjects ap, project p
WHERE a.email = '${email}'
AND a.aID = ap.aID
AND p.pID = ap.pID 
AND ap.pID = b.pID;

select * from aProjects;



-- student leaves team
UPDATE student
SET pID = null
WHERE email = '${email}';

-- advisor finalizes a project
UPDATE project
SET final = 1
WHERE pID = ${PID};

-- advisors projects
SELECT p.name as NAME ,p.pID as PID
FROM advisor a, aProjects ap, project p
WHERE a.aID = ap.aID
AND ap.pID = p.pID
AND a.email = 'john@ufl.edu';