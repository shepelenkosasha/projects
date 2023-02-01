-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Час створення: Лип 12 2022 р., 22:55
-- Версія сервера: 8.0.24
-- Версія PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `php_stage2_project`
--

-- --------------------------------------------------------

--
-- Структура таблиці `info`
--

CREATE TABLE `info` (
  `id` int NOT NULL,
  `cid` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `descr_min` varchar(1024) NOT NULL,
  `description` text,
  `image` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп даних таблиці `info`
--

INSERT INTO `info` (`id`, `cid`, `title`, `descr_min`, `description`, `image`) VALUES
(1, 1, 'Lorem ipsum ', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas debitis eaque iure nulla, laudantium a architecto voluptates recusandae ut ipsum. Provident sit recusandae rem.', '1599721350195723123.webp'),
(2, 1, 'Lorem ipsum ', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas debitis eaque iure nulla, laudantium a architecto voluptates recusandae ut ipsum. Provident sit recusandae rem.', '1599657993162221197.webp'),
(3, 1, 'Lorem ipsum ', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas debitis eaque iure nulla, laudantium a architecto voluptates recusandae ut ipsum. Provident sit recusandae rem.', '1599597586181144142.webp'),
(4, 2, 'Lorem ipsum ', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas debitis eaque iure nulla, laudantium a architecto voluptates recusandae ut ipsum. Provident sit recusandae rem.', '1594813802136529252.jpg'),
(5, 2, 'Lorem ipsum ', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas debitis eaque iure nulla, laudantium a architecto voluptates recusandae ut ipsum. Provident sit recusandae rem.', '159930306711734667.jpg');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `info`
--
ALTER TABLE `info`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
