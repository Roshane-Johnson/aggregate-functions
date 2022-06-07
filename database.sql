-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.24-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET NAMES utf8 */
;
/*!50503 SET NAMES utf8mb4 */
;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;
/*!40103 SET TIME_ZONE='+00:00' */
;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;
-- Dumping database structure for aggregate_func
CREATE DATABASE IF NOT EXISTS `aggregate_func`
/*!40100 DEFAULT CHARACTER SET utf8mb4 */
;
USE `aggregate_func`;
-- Dumping structure for table aggregate_func.employees
CREATE TABLE IF NOT EXISTS `employees` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `first_nm` varchar(50) NOT NULL,
    `last_nm` varchar(50) NOT NULL,
    `salary` int(11) NOT NULL,
    `bonus` int(11) NOT NULL DEFAULT 0,
    `pay_day` date NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
    `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4;
-- Dumping data for table aggregate_func.employees: ~0 rows (approximately)
DELETE FROM `employees`;
INSERT INTO `employees` (
        `id`,
        `first_nm`,
        `last_nm`,
        `salary`,
        `bonus`,
        `pay_day`,
        `created_at`,
        `updated_at`
    )
VALUES (
        1,
        'John',
        'Doe',
        200000,
        50000,
        '2022-06-24',
        '2022-06-07 16:32:15',
        NULL
    ),
    (
        2,
        'Jane',
        'Doe',
        230000,
        0,
        '2022-07-29',
        '2022-06-07 16:33:13',
        NULL
    ),
    (
        3,
        'Dante',
        'Inferno',
        320000,
        80000,
        '2022-07-25',
        '2022-06-07 16:34:20'
    ),
    (
        4,
        'Kim',
        'Dixon',
        32000,
        8000,
        '2022-07-28',
        '2022-06-07 16:37:22'
    );
/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */
;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */
;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */
;