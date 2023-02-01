-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 10, 2022 at 10:30 PM
-- Server version: 8.0.24
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `php_stage2_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `url` varchar(255) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `url`, `title`, `description`) VALUES
(1, 'category1', 'Category 1', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'),
(2, 'category2', 'Category 2', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit');

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int NOT NULL,
  `cid` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `descr_min` varchar(1024) NOT NULL,
  `description` text,
  `image` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `cid`, `title`, `url`, `descr_min`, `description`, `image`) VALUES
(1, 2, 'Как меня унизили в geek-shope', 'geek-shope-1', '1Как меня унизили в geek-shope', 'Как меня унизили 6в geek-shope', 'diagnosis_of_mesothelioma_c.jpg'),
(2, 1, 'Маркетинг уровень \"Гарри Поттер\"', 'marketing', 'Мантия неведимка из Гарри Поттера. Стоимость 25.000$\r\n\r\n', NULL, '1599721350195723123.webp'),
(3, 1, 'ГП и ко 1', 'gp-ko', 'ГП и ко', 'ГП и ко', '1599597586181144142.webp'),
(4, 2, 'Это бесит', 'angry-1', 'Это бесит2', 'Это бесит', '159930306711734667.jpg'),
(5, 2, 'Если кто-то бесит', 'angry-2', 'План действий', NULL, '1594813802136529252.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int UNSIGNED NOT NULL,
  `login` varchar(30) NOT NULL,
  `password` varchar(32) NOT NULL,
  `hash` varchar(32) NOT NULL DEFAULT '',
  `ip` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `hash`, `ip`) VALUES
(1, 'admin', 'qwertyuiop', '', 123456789),
(2, 'admin1', '14e1b600b1fd579f47433b88e8d85291', '', 0),
(3, 'admin3', '14e1b600b1fd579f47433b88e8d85291', '003b7f1aa58f9fa5c9c0d6336a080dcb', 2130706433),
(4, 'user', '8f0ba43ee7f80a564d46ab7dbb845ef5', 'd27cf10923be12e4af3e2cf4fd93238b', 2130706433),
(5, 'user1', '897c8fde25c5cc5270cda61425eed3c8', '53c960ea175c0b1320936a78bb291068', 2130706433),
(6, '1234', 'be8fe4c12c4e43217c06098a2595a950', '884609ab14ae201c98e40faf24d6cd0d', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
