-- TEST DATA FOR STUDENTS in Advisor projects
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(11111111, 'johnny@ufl.edu', 'Johnny Depp', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(22222222, 'angelina@ufl.edu', 'Angelina Jolie', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(33333333, 'leonardo@ufl.edu', 'Leonardo DiCaprio', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(44444444, 'jennifer@ufl.edu', 'Jennifer Lawrence', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(55555555, 'tom@ufl.edu', 'Tom Cruise', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(66666666, 'meryl@ufl.edu', 'Meryl Streep', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(77777777, 'brad@ufl.edu', 'Brad Pitt', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(88888888, 'emma@ufl.edu', 'Emma Stone', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(99999999, 'robert@ufl.edu', 'Robert Downey Jr.', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(10101010, 'scarlett@ufl.edu', 'Scarlett Johansson', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(12121212, 'chris@ufl.edu', 'Chris Hemsworth', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(13131313, 'charlize@ufl.edu', 'Charlize Theron', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(14141414, 'tomH@ufl.edu', 'Tom Hanks', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(15151515, 'natalie@ufl.edu', 'Natalie Portman', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(16161616, 'denzel@ufl.edu', 'Denzel Washington', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(17171717, 'julia@ufl.edu', 'Julia Roberts', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(18181818, 'will@ufl.edu', 'Will Smith', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(19191919, 'jenniferA@ufl.edu', 'Jennifer Aniston', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(20202020, 'george@ufl.edu', 'George Clooney', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(21212121, 'nicole@ufl.edu', 'Nicole Kidman', null);

-- TEST DATA FOR STUDENTS IN STUDENT PROJECTS
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(25252525, 'po123@ufl.edu', 'Po', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(26262626, 'tigress123@ufl.edu', 'Tigress', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(27272727, 'shifu123@ufl.edu', 'Shifu', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(28282828, 'monkey123@ufl.edu', 'Monkey', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(29292929, 'viper123@ufl.edu', 'Viper', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(30303030, 'crane123@ufl.edu', 'Crane', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(31313131, 'mantis123@ufl.edu', 'Mantis', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(32323232, 'oogway123@ufl.edu', 'Oogway', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(33233333, 'mrping123@ufl.edu', 'Mr. Ping', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(34343434, 'mastercroc123@ufl.edu', 'Master Croc', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(35353535, 'stormingox123@ufl.edu', 'Storming Ox', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(36363636, 'thunderingrhino123@ufl.edu', 'Thundering Rhino', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(37373737, 'soothsayer123@ufl.edu', 'Soothsayer', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(38383838, 'masterbear123@ufl.edu', 'Master Bear', null);
insert into student(UFID, EMAIL, STUDENTNAME, PID) values(39393939, 'masterpanther123@ufl.edu', 'Master Panther', null);

--SELECT * FROM student;

--test data for advisors
insert into advisor(NAME, AID, EMAIL) values('George Washington', aIDSeq.nextval, 'george@ufl.edu');
insert into advisor(NAME, AID, EMAIL) values('John Adams', aIDSeq.nextval, 'john@ufl.edu');
insert into advisor(NAME, AID, EMAIL) values('Thomas Jefferson', aIDSeq.nextval, 'thomas@ufl.edu');
insert into advisor(NAME, AID, EMAIL) values('James Madison', aIDSeq.nextval, 'james@ufl.edu');
insert into advisor(NAME, AID, EMAIL) values('Andrew Jackson', aIDSeq.nextval, 'andrew@ufl.edu');

--select * from advisor;


--advisor Projects
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Exploring Quantum Mechanics', pIDSeq.nextval, 1, 4, 0, 'An introductory project to delve into the fascinating realm of quantum mechanics.', null, 'quantum@ufl.edu', 0);
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Artificial Intelligence Applications', pIDSeq.nextval, 2, 3, 0, 'Applying AI techniques to solve real-world problems.', null, 'ai@ufl.edu', 0);
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Renewable Energy Solutions', pIDSeq.nextval, 3, 5, 0, 'Developing innovative solutions for sustainable energy production.', null, 'energy@ufl.edu', 0);
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Understanding Climate Change', pIDSeq.nextval, 4, 2, 0, 'Analyzing the causes and impacts of climate change on our planet.', null, 'climate@ufl.edu', 0);
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Exploring Genetic Engineering', pIDSeq.nextval, 5, 3, 0, 'Investigating the potential of genetic engineering in various fields.', null, 'genetics@ufl.edu', 0);
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Space Exploration Technologies', pIDSeq.nextval, 1, 4, 0, 'Developing technologies to explore and colonize outer space.', null, 'space@ufl.edu', 0);
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Data Analytics for Healthcare', pIDSeq.nextval, 2, 2, 0, 'Utilizing data analytics to improve healthcare services and outcomes.', null, 'healthcare@ufl.edu', 0);
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Cybersecurity Solutions', pIDSeq.nextval, 2, 5, 0, 'Developing robust cybersecurity solutions to combat digital threats.', null, 'cyber@ufl.edu', 0);
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Exploring Oceanic Ecosystems', pIDSeq.nextval, 3, 3, 0, 'Studying the biodiversity and dynamics of oceanic ecosystems.', null, 'ocean@ufl.edu', 0);
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Urban Planning and Design', pIDSeq.nextval, 3, 4, 0, 'Designing sustainable and livable urban environments for the future.', null, 'urban@ufl.edu', 0);


--Student Projects
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Web Development with React', pIDSeq.nextval, 25252525, 4, 0, 'A hands-on project to learn modern web development using React.js.', null, 'webdev@ufl.edu', 0);
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Data Science with Python', pIDSeq.nextval, 26262626, 3, 0, 'An immersive project focusing on data analysis and machine learning using Python.', null, 'datascience@ufl.edu', 0);
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Mobile App Development with Flutter', pIDSeq.nextval, 27272727, 5, 0, 'Learn how to build cross-platform mobile applications using Flutter framework.', null, 'mobiledev@ufl.edu', 0);
insert into project(NAME, PID, CID, CAPACITY, FILLED, DESCINPUT, PASS, CONTACT, FINAL) 
values('Game Development with Unity', pIDSeq.nextval, 28282828, 4, 0, 'Create interactive games and simulations using Unity game engine.', null, 'gamedev@ufl.edu', 0);


--SELECT * FROM project;

-- add students to projects
UPDATE student
SET pID = 1
WHERE email = 'johnny@ufl.edu';
UPDATE student
SET pID = 1
WHERE email = 'angelina@ufl.edu';
UPDATE student
SET pID = 1
WHERE email = 'leonardo@ufl.edu';
UPDATE student
SET pID = 2
WHERE email = 'jennifer@ufl.edu';
UPDATE student
SET pID = 3
WHERE email = 'tom@ufl.edu';
UPDATE student
SET pID = 3
WHERE email = 'meryl@ufl.edu';
UPDATE student
SET pID = 3
WHERE email = 'brad@ufl.edu';
UPDATE student
SET pID = 4
WHERE email = 'emma@ufl.edu';
UPDATE student
SET pID = 5
WHERE email = 'robert@ufl.edu';
UPDATE student
SET pID = 5
WHERE email = 'scarlett@ufl.edu';
UPDATE student
SET pID = 5
WHERE email = 'chris@ufl.edu';
UPDATE student
SET pID = 6
WHERE email = 'charlize@ufl.edu';
UPDATE student
SET pID = 6
WHERE email = 'tomH@ufl.edu';
UPDATE student
SET pID = 6
WHERE email = 'natalie@ufl.edu';
UPDATE student
SET pID = 7
WHERE email = 'denzel@ufl.edu';
UPDATE student
SET pID = 8
WHERE email = 'julia@ufl.edu';
UPDATE student
SET pID = 8
WHERE email = 'will@ufl.edu';
UPDATE student
SET pID = 8
WHERE email = 'jenniferA@ufl.edu';
UPDATE student
SET pID = 8
WHERE email = 'george@ufl.edu';
UPDATE student
SET pID = 9
WHERE email = 'nicole@ufl.edu';

-- students with student projects
UPDATE student
SET PID = 11
WHERE EMAIL = 'po123@ufl.edu';
UPDATE student
SET PID = 12
WHERE EMAIL = 'tigress123@ufl.edu';
UPDATE student
SET PID = 13
WHERE EMAIL = 'shifu123@ufl.edu';
UPDATE student
SET PID = 14
WHERE EMAIL = 'monkey123@ufl.edu';
UPDATE student
SET PID = 11
WHERE EMAIL = 'viper123@ufl.edu';
UPDATE student
SET PID = 11
WHERE EMAIL = 'crane123@ufl.edu';
UPDATE student
SET PID = 12
WHERE EMAIL = 'mantis123@ufl.edu';
UPDATE student
SET PID = 13
WHERE EMAIL = 'oogway123@ufl.edu';
UPDATE student
SET PID = 13
WHERE EMAIL = 'mrping123@ufl.edu';
UPDATE student
SET PID = 13
WHERE EMAIL = 'mastercroc123@ufl.edu';
UPDATE student
SET PID = 14
WHERE EMAIL = 'stormingox123@ufl.edu';
UPDATE student
SET PID = 14
WHERE EMAIL = 'thunderingrhino123@ufl.edu';
--UPDATE student
--SET PID = ${pID}
--WHERE EMAIL = 'soothsayer123@ufl.edu';
--UPDATE student
--SET PID = ${pID}
--WHERE EMAIL = 'masterbear123@ufl.edu';
--UPDATE student
--SET PID = ${pID}
--WHERE EMAIL = 'masterpanther123@ufl.edu';

--add languages 
-- pID: 11
insert into language (NAME, pID) values('C++', 1);
insert into language (NAME, pID) values('Java', 1);
insert into language (NAME, pID) values('Python', 1);

-- pID: 12
insert into language (NAME, pID) values('JavaScript', 2);
insert into language (NAME, pID) values('Ruby', 2);

-- pID: 13
insert into language (NAME, pID) values('C#', 3);
insert into language (NAME, pID) values('PHP', 3);
insert into language (NAME, pID) values('Go', 3);
insert into language (NAME, pID) values('Scala', 3);

-- pID: 14
insert into language (NAME, pID) values('R', 4);
insert into language (NAME, pID) values('Perl', 4);

-- pID: 15
insert into language (NAME, pID) values('Haskell', 5);
insert into language (NAME, pID) values('Lua', 5);
insert into language (NAME, pID) values('TypeScript', 5);

-- pID: 16
insert into language (NAME, pID) values('Dart', 6);
insert into language (NAME, pID) values('Assembly', 6);

-- pID: 17
insert into language (NAME, pID) values('Objective-C', 7);
insert into language (NAME, pID) values('Swift', 7);
insert into language (NAME, pID) values('Rust', 7);
insert into language (NAME, pID) values('Elixir', 7);

-- pID: 18
insert into language (NAME, pID) values('Clojure', 8);
insert into language (NAME, pID) values('Julia', 8);
insert into language (NAME, pID) values('F#', 8);

-- pID: 19
insert into language (NAME, pID) values('D', 9);
insert into language (NAME, pID) values('COBOL', 9);
insert into language (NAME, pID) values('SQL', 9);
insert into language (NAME, pID) values('Bash', 9);

-- pID: 20
insert into language (NAME, pID) values('PowerShell', 10);
insert into language (NAME, pID) values('Python', 10);
insert into language (NAME, pID) values('Java', 10);

insert into language (NAME, pID) values('Python', 11);
insert into language (NAME, pID) values('Java', 11);
insert into language (NAME, pID) values('JavaScript', 11);
insert into language (NAME, pID) values('C#', 12);
insert into language (NAME, pID) values('Ruby', 12);
insert into language (NAME, pID) values('Swift', 13);
insert into language (NAME, pID) values('Go', 13);
insert into language (NAME, pID) values('Rust', 14);

--select * from language;

--insert types
insert into type (NAME, PID) values('Web App', 1);
insert into type (NAME, PID) values('Mobile App', 2);
insert into type (NAME, PID) values('Data Analysis', 3);
insert into type (NAME, PID) values('Machine Learning', 4);
insert into type (NAME, PID) values('Game Development', 5);
insert into type (NAME, PID) values('Web Development', 6);
insert into type (NAME, PID) values('Networking', 7);
insert into type (NAME, PID) values('Security', 8);
insert into type (NAME, PID) values('Cloud Computing', 9);
insert into type (NAME, PID) values('Artificial Intelligence', 10);
insert into type (NAME, PID) values('Blockchain', 11);
insert into type (NAME, PID) values('Embedded Systems', 12);
insert into type (NAME, PID) values('Virtual Reality', 13);
insert into type (NAME, PID) values('Augmented Reality', 14);

