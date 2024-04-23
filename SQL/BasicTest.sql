
insert into student values(11111111, 'b@ufl.edu', 'banjo jim', 11);
insert into student values(22222222, 'c@ufl.edu', 'jim jam', 12);
insert into student values(33333333, 'd@ufl.edu', 'Jon Doe', 13);
insert into student values(44444444, 'e@ufl.edu', 'Jane Doe', 14);
insert into student values(55555555, 'f@ufl.edu', 'Slim Jim', null);
insert into student values(66666666, 'g@ufl.edu', 'Slim Jim', 14);
insert into student values(00000000, 'maingotj@ufl.edu', 'Jonathan Maingot', 14);


    
insert into advisor(NAME, AID, EMAIL) values('Sanethia Thomas', aIDSeq.nextval, 's@ufl.edu');
insert into advisor values('James Thomas', aIDSeq.nextval, 't@ufl.edu');
insert into advisor values('Timmy Turner', aIDSeq.nextval, 'u@ufl.edu');
insert into advisor values('Adrian Monk', aIDSeq.nextval, 'v@ufl.edu');

    
insert into project values('cool stuff', 11, 3, 5, 3, 'THis is a cool project blah blah', null, 'jame@ufl.edu', 0);
insert into project values('bad stuff', 13, 3, 3, 2, 'Cheese is a cool project blah blah', null, 'jon@ufl.edu', 0);
insert into project values('okay stuff', 0, 3, 4, 3, 'Jonathan is a cool project blah blah', null, 'joe@ufl.edu', 0);
insert into project values('whoaaa stuff', 89, 3, 2, 1, 'TImmy turner is a cool project blah blah', null, 'jim@ufl.edu', 0);
insert into project(NAME , PID , CID , CAPACITY , FILLED , DESCINPUT , PASS, CONTACT, FINAL) values('some stuff', 12, 3, 5, 3, 'MOOOOOOOOOOOOOOOOOO Cow ', null, 'jerome@ufl.edu', 0);
insert into project(NAME , PID , CID , CAPACITY , FILLED , DESCINPUT , PASS, CONTACT, FINAL) values('more stuff', 14, 55555555, 5, 3, 'ahhhhhhhhh', null, 'jerold@ufl.edu', 0);
insert into project values('cool stuff', 80, 1001, 5, 3, 'THis is a cool project blah blah', null, 'jame@ufl.edu', 0);
insert into project values('Shouldnt Show', 90, 11111111, 5, 5, 'do not show this one', null, 'dontshow@ufl.edu', 0);


    insert into language (NAME, pID) values('C++', 11);
    insert into language values('Java', 11);
    insert into language values('JavaScript', 11);
    insert into language values('C++', 13);
    insert into language values('C++', 14);


    insert into type (NAME, PID) values('Web App', 11);
    insert into type values('Hardware', 12);
    insert into type values('Stuff', 11);

insert into aProjects values(1001, 14);