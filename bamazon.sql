
create database bamazon_db;
use bamazon_db;

create table products (
item_id int auto_increment not null,
product_name varchar(100) not null,
department_name varchar (100) null,
price decimal not null,
stock_quantity int not null,
primary key(item_id)
);
insert into products (product_name, department_name, price, stock_quantity)
values ("toilet paper", "home", 10.0 ,300);

insert into products (product_name, department_name, price, stock_quantity)
values ("computer", "electronics", 770.0 ,200);

insert into products (product_name, department_name, price, stock_quantity)
values ("napkins", "home", 6.0 ,300);

insert into products (product_name, department_name, price, stock_quantity)
values ("dog food", "animal", 25.0 ,70);

insert into products (product_name, department_name, price, stock_quantity)
values ("cat litter", "animal", 30.0 ,80);

insert into products (product_name, department_name, price, stock_quantity)
values ("spoons", "home", 7.0 ,500);

insert into products (product_name, department_name, price, stock_quantity)
values ("headphones", "electronics", 12.0 ,100);

insert into products (product_name, department_name, price, stock_quantity)
values ("cat nip", "animal", 10.0 ,40);

insert into products (product_name, department_name, price, stock_quantity)
values ("monitor", "electronics", 70.0 ,200);

-- insert into songs (title,artist,genre)
-- values ("Drive Slow", "Kanye West","rap");
update products set stock_quantity= 5 where item_id = 1
