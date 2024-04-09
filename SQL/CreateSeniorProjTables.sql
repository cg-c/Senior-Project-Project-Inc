CREATE TABLE student (
    UFID int PRIMARY KEY,
    email varchar(100) UNIQUE,
    studentName varchar(100),
    pID int
    );
    
    
CREATE TABLE advisor (
    name varchar(100),
    aID int PRIMARY KEY,
    email varchar(100) UNIQUE);
    
CREATE TABLE aProjects (
    aID int,
    pID int
);
    
CREATE TABLE project (
    name varchar(255),
    pID int Primary KEY,
    cID int,
    capacity int DEFAULT 5,
    filled int DEFAULT 0,
    descInput varchar(1000),
    pass varchar(100),
    contact varchar(100)
    );

CREATE TABLE language (
    name varchar(50),
    pID int NOT NULL
    );
    
CREATE TABLE type (
    name varchar(50),
    pID int
);

CREATE SEQUENCE aIDSeq
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 1000;
    
CREATE SEQUENCE pIDSeq
    MINVALUE 1
    START WITH 1
    INCREMENT BY 1
    CACHE 1000;
    
CREATE OR REPLACE TRIGGER addProj
AFTER INSERT ON project
FOR EACH ROW
BEGIN
    UPDATE student
    SET student.pID = :NEW.pID
    WHERE student.UFID = :NEW.cID;
END;
/

CREATE OR REPLACE TRIGGER addCount
AFTER UPDATE ON student
FOR EACH ROW
BEGIN
    IF :NEW.pID IS NOT NULL THEN
        UPDATE project
        SET filled = filled + 1
        WHERE :NEW.pID = project.pID;
    ELSE
        UPDATE project
        SET filled = filled - 1
        WHERE :NEW.pID = project.pID;
    END IF;
END;
/

