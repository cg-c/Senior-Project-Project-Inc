CREATE TABLE student (
    UFID int PRIMARY KEY,
    email varchar(100) UNIQUE,
    studentName varchar(100),
    role varchar(50),
    teamID int,
    pID int
    );
    
CREATE TABLE team (
    teamName varchar(255),
    teamID int PRIMARY KEY,
    complete int
    );
    
CREATE TABLE advisor (
    name varchar(100),
    aID int PRIMARY KEY,
    email varchar(100) UNIQUE);
    
CREATE TABLE project (
    name varchar(255),
    pID int Primary KEY,
    descInput varchar(1000),
    pass varchar(100)
    );

CREATE TABLE language (
    name varchar(50),
    pID int NOT NULL
    );
    
CREATE TABLE type (
    name varchar(50),
    pID int
);
