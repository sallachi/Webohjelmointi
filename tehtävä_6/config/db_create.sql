CREATE DATABASE `athlete-app`;

CREATE TABLE `athlete` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`firstname` VARCHAR(50) NOT NULL,
	`lastname` VARCHAR(100) NOT NULL,
	`nickname` VARCHAR(100) NULL DEFAULT NULL,
	`birthyear` DATE NULL DEFAULT NULL,
	`weight` FLOAT NULL DEFAULT NULL,
	`sport` VARCHAR(150) NULL DEFAULT NULL,
	`picturelink` VARCHAR(500) NULL DEFAULT NULL,
	`achievements` VARCHAR(250) NULL DEFAULT NULL,
    `created_at` DATE NOT NULL DEFAULT NOW(),
	PRIMARY KEY (`id`)
);