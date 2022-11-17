CREATE DATABASE parrot;
USE parrot;

CREATE TABLE residents ( 
 resident_id INT PRIMARY KEY AUTO_INCREMENT,  
 name VARCHAR(30) NOT NULL,  
 email VARCHAR(30) NOT NULL UNIQUE,  
 password VARCHAR(200) NOT NULL,  
 apartment VARCHAR(3) NOT NULL,  
 link_photo VARCHAR(150)
); 

CREATE TABLE posts ( 
 post_id INT PRIMARY KEY AUTO_INCREMENT,  
 post_content VARCHAR(150) NOT NULL,  
 created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 resident_id INT NOT NULL
); 

ALTER TABLE posts ADD FOREIGN KEY(resident_id) REFERENCES residents (resident_id);