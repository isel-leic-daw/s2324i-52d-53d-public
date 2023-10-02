create schema dbo;

drop table if exists dbo.Games;
drop table if exists dbo.Users;

create table dbo.Users(
    id int generated always as identity primary key,
    username VARCHAR(64) unique not null
);

create table dbo.Games(
    id UUID not null,
    board CHAR(9) not null,
    player_x int references dbo.Users(id),
    player_o int references dbo.Users(id)
);