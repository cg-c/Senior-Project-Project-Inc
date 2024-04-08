
insert into student values(11111111, 'b@ufl.edu', 'banjo jim', 11);
insert into student values(22222222, 'c@ufl.edu', 'jim jam', 12);
insert into student values(33333333, 'd@ufl.edu', 'Jon Doe', 13);
insert into student values(44444444, 'e@ufl.edu', 'Jane Doe', 14);
insert into student values(55555555, 'f@ufl.edu', 'Slim Jim', null);
insert into student values(66666666, 'g@ufl.edu', 'Slim Jim', 14);
insert into student values(00000000, 'maingotj@ufl.edu', 'Jonathan Maingot', 14);


    
insert into advisor values('Sanethia Thomas', aIDSeq.nextval, 's@ufl.edu', 11);
insert into advisor values('James Thomas', aIDSeq.nextval, 't@ufl.edu', 13);
insert into advisor values('Timmy Turner', aIDSeq.nextval, 'u@ufl.edu', 0);
insert into advisor values('Adrian Monk', aIDSeq.nextval, 'v@ufl.edu', 9);

    
insert into project values('cool stuff', 11, 3, 5, 3, 'THis is a cool project blah blah', null);
insert into project values('bad stuff', 13, 3, 3, 2, 'Cheese is a cool project blah blah', null);
insert into project values('okay stuff', 0, 3, 4, 3, 'Jonathan is a cool project blah blah', null);
insert into project values('whoaaa stuff', 89, 3, 2, 1, 'TImmy turner is a cool project blah blah', null);

insert into project(NAME , PID , CID , CAPACITY , FILLED , DESCINPUT , PASS) values('some stuff', 12, 3, 5, 3, 'THis is a cool project blah blah', null);
insert into project(NAME , PID , CID , CAPACITY , FILLED , DESCINPUT , PASS) values('some stuff', 14, 55555555, 5, 3, 'ahhhhhhhhh', null);

    insert into language values('C++', 11);
    insert into language values('Java', 11);
    insert into language values('JavaScript', 11);
    insert into language values('C++', 13);
    insert into language values('C++', 14);


    insert into type values('Web App', 11);
    insert into type values('Hardware', 12);
    insert into type values('Stuff', 11);
